import React, { useState, useEffect } from 'react';
import Slider from 'react-slick';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { useParams } from 'react-router-dom';
import { services } from '../services/services.services';
import { Link } from 'react-router-dom';

export default function Service() {
    const { slug } = useParams();
    const [serviceDetails, setServiceDetails] = useState(null);
    const [selectedPlan, setSelectedPlan] = useState(null);
    const [selectedPriceCard, setSelectedPriceCard] = useState(null);

    useEffect(() => {
        if (slug) {
            fetchServiceDetails(slug);
        }
    }, [slug]);

    const fetchServiceDetails = async (slug) => {
        services.getServicesBySlug(slug)
            .then(result => {
                if (result) {
                    setServiceDetails(result.data);
                    setSelectedPlan(result.data.plans[0]);
                    setSelectedPriceCard(result.data.plans[0].list[0]);
                } else {
                    setServiceDetails(null);
                }
            })
            .catch(error => {
                console.error(error);
                setServiceDetails(null);
            });
    };

    const handlePlanSelect = (plan) => {
        setSelectedPlan(plan);
        setSelectedPriceCard(plan.list[0]);
    };

    const handlePriceCardSelect = (card) => {
        setSelectedPriceCard(card);
    };

    var settings = {
        dots: false,
        arrows: true,
        infinite: true,
        autoplay: true,
        speed: 1000,
        slidesToShow: 4,
        slidesToScroll: 1,
        centerMode: false,
        prevArrow: <img src="../images/prev-icon.svg" alt='' />,
        nextArrow: <img src="../images/next-icon.svg" alt='' />,
        responsive: [
            {
                breakpoint: 1100,
                settings: {
                    slidesToShow: 3,
                }
            },
            {
                breakpoint: 900,
                settings: {
                    slidesToShow: 2,
                }
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 1,
                    arrows: false,
                }
            }
        ]
    };

    return (
        <>
            <section className="s-container">
                <div className="services-title">
                    <h1>{serviceDetails?.name}</h1>
                    <h2>{serviceDetails?.name} to <span>Accelerate Growth 🔥</span></h2>
                    <p>{serviceDetails?.description}</p>
                </div>

                <div className="services-payment">
                    <div className="payment-tab">
                        {serviceDetails?.plans && serviceDetails.plans?.map((plan, index) => (
                            <Link key={index}
                                to="#!"
                                className={`payment-link 
                                ${plan.type === 'Standard' ? 'active' :
                                        plan.type === 'Popular' ? 'growth-tab' :
                                            plan.type === 'Exclusive' ? 'exclusive-tab' : ''} 
                                ${selectedPlan === plan ? 'active-tab' : ''}`}
                                onClick={() => handlePlanSelect(plan)}
                            >
                                <div>
                                    <i className={`fa-solid ${plan.icon}`}></i>
                                    <span>{plan.title}</span>
                                </div>
                                <div className="payment-lable">{plan.type}</div>
                            </Link>
                        ))}
                    </div>

                    {selectedPlan && (
                        <>
                            <ul className="services-option">
                                {selectedPlan?.option && selectedPlan.option?.map((option, index) => (
                                    <li key={index}>
                                        <i className="fa-solid fa-star"></i>
                                        <span>{option.name}</span>
                                    </li>
                                ))}
                            </ul>

                            <div className="services-price">
                                {selectedPlan?.list && selectedPlan.list?.map((list, index) => (
                                    <div key={index} className={`price-card ${selectedPriceCard === list ? 'cheaked-card' : ''}`} onClick={() => handlePriceCardSelect(list)}>
                                        <span>{list.qty}</span>
                                        <span>{list.text}</span>
                                        {list.discount !== 0 && <div className="off-lable">{list.discount}% off</div>}
                                        {selectedPriceCard === list && (
                                            <div className="cheaked"><i className="fa-solid fa-check"></i></div>
                                        )}
                                    </div>
                                ))}
                            </div>

                            <div className="price-div">
                                <div className="pay-price">
                                    {selectedPlan?.currency}{selectedPriceCard?.price?.toFixed(2)}
                                </div>
                                <div className="save-price-div">
                                    {selectedPriceCard?.discount > 0 && (
                                        <>
                                            <div className="total-price">
                                                {selectedPlan.currency}
                                                {(selectedPriceCard.price / (1 - selectedPriceCard.discount / 100)).toFixed(2)}
                                            </div>
                                            <div className="save-price">
                                                You Save {selectedPlan.currency}
                                                {(selectedPriceCard.price / (1 - selectedPriceCard.discount / 100) - selectedPriceCard.price).toFixed(2)}
                                            </div>
                                        </>
                                    )}
                                </div>
                            </div>
                        </>
                    )}

                    <Link to="/order" className="buy-btn">Buy Now!</Link>
                </div>

                <div className="termof-services-link">
                    By initiating this order, you agree to <Link to="#!">terms of service</Link> and <Link to="#!">privacy
                        policy.</Link>
                </div>
            </section>

            <section className="marketing-agency-div">
                <div className="s-container">
                    <div className="title">
                        <span>America's #1 Social Media Marketing Agency</span>
                        <h2>Start Your Instagram Growth Right Away with Famoid!</h2>
                        <p>With Famoid, you can easily purchase Instagram services and boost your account naturally through Ads.
                        </p>
                    </div>
                    <div className="agency-services-div">
                        <div className="services-card">
                            <img src="./images/services-icon1.svg" alt="" />
                            <h3>Satisfaction Guaranteed</h3>
                            <p>Your success is assured with Famoid. We constantly strive to provide the best-in-className service to
                                satisfy our customers.</p>
                        </div>
                        <div className="services-card">
                            <img src="./images/services-icon2.svg" alt="" />
                            <h3>Ad-Based Growth</h3>
                            <p>Our Ad-based promotional system will get you high-quality organic engagement by distributing your
                                content to a targeted audience.</p>
                        </div>
                        <div className="services-card">
                            <img src="./images/services-icon3.svg" alt="" />
                            <h3>Instant Delivery</h3>
                            <p>Enjoy Instant delivery of a high-quality audience while protecting your account from getting
                                banned for suspicious activity.</p>
                        </div>
                    </div>
                </div>
            </section>

            <section>
                <div className="common-title-div">
                    <h2>🥇 Voices of Victory: Our Clients Speak Their Success!</h2>
                    <p>At Famoid, your satisfaction is our priority. Experience unparalleled customer service and watch your social
                        media soar!</p>
                </div>
                <div className="client-review-slider">
                    <div className="s-container">
                        <div className="row-div">
                            <Slider {...settings}>
                                <div className="client-review-card">
                                    <div className="card-hdr">
                                        <div className="client-profile">
                                            <div className="client-img">
                                                <img src="./images/client1.png" alt="" />
                                            </div>
                                            <div className="client-name">
                                                <h3>Janae Stofer</h3>
                                                <span>17 October 2019</span>
                                            </div>
                                        </div>
                                        <div className="googl-icon">
                                            <img src="./images/googl-icon.svg" alt="" />
                                        </div>
                                    </div>
                                    <div className="card-body">
                                        <div className="star-icon">
                                            <i className="fa-solid fa-star"></i>
                                            <i className="fa-solid fa-star"></i>
                                            <i className="fa-solid fa-star"></i>
                                            <i className="fa-solid fa-star"></i>
                                            <i className="fa-solid fa-star"></i>
                                        </div>
                                        <p>Famoid has promoted a number of my YouTube videos and always delivers the results I need..!!
                                        </p>
                                    </div>
                                </div>
                                <div className="client-review-card">
                                    <div className="card-hdr">
                                        <div className="client-profile">
                                            <div className="client-img">
                                                <img src="./images/client2.png" alt="" />
                                            </div>
                                            <div className="client-name">
                                                <h3>Pamela Keefer</h3>
                                                <span>15 October 2019</span>
                                            </div>
                                        </div>
                                        <div className="googl-icon">
                                            <img src="./images/googl-icon.svg" alt="" />
                                        </div>
                                    </div>
                                    <div className="card-body">
                                        <div className="star-icon">
                                            <i className="fa-solid fa-star"></i>
                                            <i className="fa-solid fa-star"></i>
                                            <i className="fa-solid fa-star"></i>
                                            <i className="fa-solid fa-star"></i>
                                            <i className="fa-solid fa-star"></i>
                                        </div>
                                        <p>I was confused about famoid service . But I can see the result now. They did great job for my
                                            profile. My profile was getting 70 to 150 new followers every day. I will order again once i
                                            needed</p>
                                        <Link to="#!">Read more</Link>
                                    </div>
                                </div>
                                <div className="client-review-card">
                                    <div className="card-hdr">
                                        <div className="client-profile">
                                            <div className="client-img">
                                                <img src="./images/client3.png" alt="" />
                                            </div>
                                            <div className="client-name">
                                                <h3>Junior Dala</h3>
                                                <span>9 October 2019</span>
                                            </div>
                                        </div>
                                        <div className="googl-icon">
                                            <img src="./images/googl-icon.svg" alt="" />
                                        </div>
                                    </div>
                                    <div className="card-body">
                                        <div className="star-icon">
                                            <i className="fa-solid fa-star"></i>
                                            <i className="fa-solid fa-star"></i>
                                            <i className="fa-solid fa-star"></i>
                                            <i className="fa-solid fa-star"></i>
                                            <i className="fa-solid fa-star"></i>
                                        </div>
                                        <p>2nd time buying from them ... I'm happy to work with him and would highly recommend his
                                            product on both purchases.
                                            earned me many extra views. Thanks Famoid for that!</p>
                                        <Link to="#!">Read more</Link>
                                    </div>
                                </div>
                                <div className="client-review-card">
                                    <div className="card-hdr">
                                        <div className="client-profile">
                                            <div className="client-img">
                                                <img src="./images/client4.png" alt="" />
                                            </div>
                                            <div className="client-name">
                                                <h3>kapil vedani</h3>
                                                <span>9 October 2019</span>
                                            </div>
                                        </div>
                                        <div className="googl-icon">
                                            <img src="./images/googl-icon.svg" alt="" />
                                        </div>
                                    </div>
                                    <div className="card-body">
                                        <div className="star-icon">
                                            <i className="fa-solid fa-star"></i>
                                            <i className="fa-solid fa-star"></i>
                                            <i className="fa-solid fa-star"></i>
                                            <i className="fa-solid fa-star"></i>
                                            <i className="fa-solid fa-star"></i>
                                        </div>
                                        <p>wonderful service, at a very affordable price, I got real Instagram follower.
                                        </p>
                                    </div>
                                </div>
                            </Slider>
                        </div>
                    </div>
                </div>
            </section>

            <section className="platforms">
                <div className="common-title-div">
                    <h2>✊ Why You Should Choose Famoid</h2>
                    <p>Choose Famoid for unmatched services and tailored solutions that catapult your social media growth to new heights!</p>
                </div>
                <div className="s-container">
                    <div className="row  p-6">
                        <div className="col">
                            <h2><img src="../images/safety.svg" alt='' />Privacy & Safety</h2>
                            <p> Among many reasons, our <span>commitment</span> to <span>Privacy</span> and Safety <span>stands</span> out. With trusted platforms like Checkout & Nuvei, we ensure your transactions are secure. During any order, we only ask for your username and email — your password is never requested. Be assured that personal details like your username and email are held in strict confidence, never to be shared with third parties. For a safe and reliable experience,<span> choose Famoid.</span> Don't forget to review our dedicated Privacy Policy and Terms and Conditions for added peace of mind.</p>
                        </div>
                        <div className="col">
                            <h2><img src="../images/experience.svg" alt='' />Experience</h2>
                            <p>  Among many reasons, our <span>commitment</span> to <span>Privacy</span> and Safety <span>stands</span> out. With trusted platforms like Checkout & Nuvei, we ensure your transactions are secure. During any order, we only ask for your username and email — your password is never requested. Be assured that personal details like your username and email are held in strict confidence, never to be shared with third parties. For a safe and reliable experience,<span> choose Famoid.</span> Don't forget to review our dedicated Privacy Policy and Terms and Conditions for added peace of mind.</p>
                        </div>
                        <div className="col">
                            <h2><img src="../images/delivery.svg" alt='' />Ad-Based Delivery</h2>
                            <p>  Among many reasons, our <span>commitment</span> to <span>Privacy</span> and Safety <span>stands</span> out. With trusted platforms like Checkout & Nuvei, we ensure your transactions are secure. During any order, we only ask for your username and email — your password is never requested. Be assured that personal details like your username and email are held in strict confidence, never to be shared with third parties. For a safe and reliable experience,<span> choose Famoid.</span> Don't forget to review our dedicated Privacy Policy and Terms and Conditions for added peace of mind.</p>
                        </div>
                        <div className="col">
                            <h2><img src="../images/suppoert.svg" alt='' />24/7 Support</h2>
                            <p>   Among many reasons, our <span>commitment</span> to <span>Privacy</span> and Safety <span>stands</span> out. With trusted platforms like Checkout & Nuvei, we ensure your transactions are secure. During any order, we only ask for your username and email — your password is never requested. Be assured that personal details like your username and email are held in strict confidence, never to be shared with third parties. For a safe and reliable experience,<span> choose Famoid.</span> Don't forget to review our dedicated Privacy Policy and Terms and Conditions for added peace of mind.</p>
                        </div>
                    </div>
                </div>
            </section>

            <section>
                <div className="common-title-div">
                    <h2>🚀 Buying Instagram Followers Can Skyrocket Engagement on Your Posts</h2>
                    <p>How would you feel if you saw engagement on your posts increase almost overnight? Famoid can turn this dream
                        into a reality.</p>
                </div>
                <div className="s-container">
                    <div className="information-section">
                        <div className="row col-reverse">
                            <div className="contain col">
                                <p><strong>66,000 pictures</strong> are shared on Instagram every minute.</p>
                                <p>And the average Instagram Post <strong>engagement rate is just 0.60%.</strong></p>
                                <p>In today’s <strong>hyper-competitive social media marketing world,</strong> getting noticed by
                                    your audience and encouraging them to engage with your Instagram post is the hardest thing to
                                    do.</p>
                                <p>It becomes even more <strong>difficult when you don’t have enough legitimate followers</strong>
                                    and an established Instagram presence.</p>
                                <p>Believe it or not, people <strong>mostly associate a higher follower count on Instagram</strong>
                                    or other social media platforms with credibility and trust. They often hesitate to engage with
                                    someone’s post who has fewer followers on their profile because they don’t find them trustworthy
                                    or credible.</p>
                                <p><strong>Buying real followers</strong> can eliminate this objection from your audience’s mind and
                                    establish trust.</p>
                                <p>Once you win trust in the market <strong>engagement will automatically start</strong> flowing
                                    into your Instagram posts without putting any extra effort.</p>
                                <p>So, <strong>buy followers</strong> for your profile and watch engagement pouring into your
                                    Instagram posts automatically.</p>
                            </div>
                            <div className="img-part">
                                <img src="./images/how-to-buy-instagram-followers.webp" alt="" />
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <section>
                <div className="common-title-div">
                    <h2>💪 Build a Positive Image on Instagram</h2>
                    <p>Buying Instagram followers at Famoid enables you to build a positive image of your personal account.</p>
                </div>
                <div className="s-container">
                    <div className="information-section">
                        <div className="row">
                            <div className="img-part">
                                <img src="./images/ways-to-buy-followers-on-instagram.webp" alt="" />
                            </div>
                            <div className="contain col">
                                <p><strong>Here’s a fact:</strong> 62.4% of Instagram users use the platform to follow or research
                                    similar people with them.</p>
                                <p>When you <strong>purchase premium followers on Instagram,</strong> you’re not only increasing the
                                    follower count but also shaping your profile’s image on the platform.</p>
                                <p>Whenever your <strong>potential audience</strong> lands on your Instagram profile, the first
                                    thing they notice is <strong>how many followers you have.</strong></p>
                                <p>Having a large follower base makes your brand look more <strong>trustworthy, legitimate, and
                                    reliable</strong> – especially when your brand is comparatively a newcomer in the market.
                                </p>
                                <p>Your <strong>potential audience is more likely to pay attention</strong> when your presence on
                                    social media platforms like Instagram leaves a positive impression on them.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <section>
                <div className="common-title-div">
                    <h2>🚀 Kickstart Your Brand New Instagram Account</h2>
                    <p>Famoid helps accelerate your Instagram growth by providing authentic followers that enhance your account’s
                        credibility.</p>
                </div>
                <div className="s-container">
                    <div className="information-section">
                        <div className="row col-reverse">
                            <div className="contain col">
                                <p>Growing a <strong>brand new Instagram account</strong> from complete scratch demands an insane
                                    amount of hard work, plenty of time, and patience.</p>
                                <p>As Instagram’s organic reach is almost dead for brand-new accounts, if you don’t have any
                                    extraordinary capability, achieving a <strong>high follower count could even take
                                        years.</strong></p>
                                <p><strong>Buying Instagram followers</strong> provides the much-needed push for your fresh account
                                    and <strong>helps you instantly build credibility</strong> and trust in the market.</p>
                                <p>Additionally, having a <strong>decent number of followers</strong> on your profile also attracts
                                    a new set of audience to follow you and engage with your content.</p>
                            </div>
                            <div className="img-part">
                                <img src="./images/kickstart-instagram-with-famoid.webp" alt="" />
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <section>
                <div className="common-title-div">
                    <h2>💪 30 Days Money Back Guarantee (No Questions Asked)</h2>
                    <p>If any problem arises with your purchase, Famoid offers a 30-day money-back guarantee, ensuring your
                        satisfaction.</p>
                </div>
                <div className="s-container">
                    <div className="information-section">
                        <div className="row">
                            <div className="img-part">
                                <img src="./images/30-days-money-back-guarantee.webp" alt="" />
                            </div>
                            <div className="contain col">
                                <p>We’re not in <strong>the business of selling Instagram followers.</strong></p>
                                <p>We’re in the <strong>business of satisfying our customers.</strong></p>
                                <p>Even though we <strong>always deliver authentic followers</strong> and all our services are
                                    systematized to ensure seamless execution, there may be a few rare instances of unexpected
                                    situations.</p>
                                <p>If, for any reason, we <strong>can’t deliver</strong> the order within the promised timeframe,
                                    <strong>we will refund 100% of your money within 48 hours.</strong>
                                </p>
                                <p>Apart from that, even if you’re just unhappy with the <strong>quality of your followers,</strong>
                                    you can still get your entire invoice amount back within 30 days of your purchase.</p>
                                <p><strong>That’s the level of commitment we have </strong>for our customers.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <section>
                <div className="common-title-div">
                    <h2>🚀 Your Favourite Instagram Influencers Also Buy Instagram Followers</h2>
                    <p>Many of your favourite Instagram influencers have purchased followers to boost their accounts. Why not you?
                    </p>
                </div>
                <div className="s-container">
                    <div className="information-section">
                        <div className="row col-reverse">
                            <div className="contain col">
                                <p>Everyone wants to <strong>become an influencer</strong> these days.</p>
                                <strong>After all, why wouldn’t they?</strong>
                                <p>Influencers are <strong>charging upwards of millions</strong> just for a brand collaboration
                                    post.</p>
                                <p>If becoming an <strong>influencer is one of your biggest dreams,</strong> you’ll be surprised to
                                    know that most of your favorite influencers also initially built their kingdom by <strong>buying
                                        followers for their Instagram page.</strong></p>
                                <p><strong>Buying followers</strong> is <strong>popular among influencers</strong> because it
                                    initially gives them a much-needed push and <strong>credibility,</strong> which eventually fuels
                                    their growth.</p>
                                <p>If you’re just starting out your journey of becoming a well-known influencer, <strong>buying
                                    Instagram followers</strong> can work like a launchpad for you.</p>
                            </div>
                            <div className="img-part">
                                <img src="./images/influencers-work-with-famoid.webp" alt="" />
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <section>
                <div className="common-title-div">
                    <h2>🧐 Not Convinced Yet? Check Out Our FAQ!</h2>
                    <p>As Famoid Team, we prepared detailed answers to all your questions.</p>
                </div>
                <div className="s-container">
                    <div className="information-section">
                        <div className="row col-reverse">
                            <div className="col">
                                <div className="accordion-div">
                                    <div className="accordion-item">
                                        <input type="radio" name="accordion-2" id="rd1" />
                                        <label for="rd1" className="accordion-label">Why should I buy Instagram followers?<i
                                            className="fa-solid fa-angle-down"></i></label>
                                        <div className="accordion-content">
                                            <p>Purchasing Instagram followers from Famoid boosts your online presence, enhances
                                                credibility, and improves brand awareness by expanding your audience and increasing
                                                engagement on your posts.</p>
                                        </div>
                                    </div>
                                    <div className="accordion-item">
                                        <input type="radio" name="accordion-2" id="rd2" />
                                        <label for="rd2" className="accordion-label">Is buying followers on Instagram safe?<i
                                            className="fa-solid fa-angle-down"></i></label>
                                        <div className="accordion-content">
                                            <p>Yes, buying followers from Famoid is safe. We prioritize your account’s security,
                                                employing methods that adhere to Instagram’s guidelines, and ensuring no compromise
                                                on account safety.</p>
                                        </div>
                                    </div>
                                    <div className="accordion-item">
                                        <input type="radio" name="accordion-2" id="rd3" />
                                        <label for="rd3" className="accordion-label">Will my bought followers engage with my content?<i
                                            className="fa-solid fa-angle-down"></i></label>
                                        <div className="accordion-content">
                                            <p>Famoid strives to provide quality followers that enhance engagement levels. While
                                                bought followers inherently have lower interaction rates, they elevate your
                                                account’s credibility, indirectly fostering organic engagement.</p>
                                        </div>
                                    </div>
                                    <div className="accordion-item">
                                        <input type="radio" name="accordion-2" id="rd4" />
                                        <label for="rd4" className="accordion-label">How quickly will I receive my purchased
                                            followers?<i className="fa-solid fa-angle-down"></i></label>
                                        <div className="accordion-content">
                                            <p>Famoid is renowned for its instant delivery! Once your transaction is complete, your
                                                Instagram followers typically begin to increase within minutes, empowering your
                                                brand’s presence swiftly.</p>
                                        </div>
                                    </div>
                                    <div className="accordion-item">
                                        <input type="radio" name="accordion-2" id="rd5" />
                                        <label for="rd5" className="accordion-label">Will people know I’ve bought followers?<i
                                            className="fa-solid fa-angle-down"></i></label>
                                        <div className="accordion-content">
                                            <p>No, Famoid ensures a discrete service, providing followers that look authentic. Your
                                                purchase details and information are confidential and will not be shared with third
                                                parties.</p>
                                        </div>
                                    </div>
                                    <div className="accordion-item">
                                        <input type="radio" name="accordion-2" id="rd6" />
                                        <label for="rd6" className="accordion-label">Can I lose followers after purchasing?<i
                                            className="fa-solid fa-angle-down"></i></label>
                                        <div className="accordion-content">
                                            <p>Famoid offers a 30-day refill guarantee for any drops in followers after your
                                                purchase. Our team diligently works to restore follower counts and maintain your
                                                enhanced presence.</p>
                                        </div>
                                    </div>
                                    <div className="accordion-item">
                                        <input type="radio" name="accordion-2" id="rd7" />
                                        <label for="rd7" className="accordion-label">Is it legal to buy Instagram followers?<i
                                            className="fa-solid fa-angle-down"></i></label>
                                        <div className="accordion-content">
                                            <p>Yes, buying Instagram followers is legal and complies with Instagram’s terms of
                                                service when executed through legitimate practices, like those employed by Famoid.
                                            </p>
                                        </div>
                                    </div>
                                    <div className="accordion-item">
                                        <input type="radio" name="accordion-2" id="rd8" />
                                        <label for="rd8" className="accordion-label">How can Famoid help grow my Instagram?<i
                                            className="fa-solid fa-angle-down"></i></label>
                                        <div className="accordion-content">
                                            <p>Famoid amplifies your Instagram growth by providing authentic-looking followers,
                                                improving your account’s credibility, and attracting organic followers through
                                                enhanced visibility and perceived popularity.</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="img-part">
                                <img src="./images/instagram-followers-faq.webp" alt="" />
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <section>
                <div className="common-title-div">
                    <h2>🤔 Why Should You Buy Instagram Followers?</h2>
                    <p>There are lots of reasons to purchase Instagram followers through Famoid, here are some.</p>
                </div>
                <div className="why-choose-section">
                    <div className="s-container">
                        <div className="contain">
                            <div>
                                <p>Before <strong>buying more followers</strong> for your Instagram profile, you should understand
                                    the
                                    reason behind making the purchase.</p>
                                <p>Buying followers doesn’t just increase your follower base. It also helps your business or
                                    personal brand in many different ways.</p>
                                <h3>⭐ Social Proof</h3>
                                <p>Having solid <strong>social proof is non-negotiable </strong> for a brand-new business or
                                    personal brand. It builds trust among potential customers and helps them confirm that other
                                    businesses or individuals have also benefited from your products or services. Customers often
                                    check the social media presence of brands before making a purchase and having more followers
                                    gives your potential customer a strong signal that you’re legit.</p>
                                <div className="image">
                                    <img src="./images/buy-instagram-followers.png" alt="" />
                                </div>
                                <h3>⭐ Higher Visibility</h3>
                                <p> <strong>Buying Instagram followers </strong> can rapidly increase your overall visibility. This
                                    indicates to the Instagram algorithm that you’re producing high-quality content, and people are
                                    finding it valuable. It also increases your chances of getting featured on <strong>Instagram’s
                                        Explore page,</strong> which in return gets you more organic followers.</p>
                                <h3>⭐ Easier to Get Brand Deals</h3>
                                <p>If you’re an influencer or want to be one, buying Instagram followers can enhance your profile’s
                                    overall credibility and generate hype, which every brand wants. Brands like to work with
                                    influencers who have a large and diverse follower base so that they can <Link to="#!"> reach a
                                        wider audience.</Link></p>
                                <h2>👉 Buying Instagram Followers is Just One Piece of The Puzzle</h2>
                                <p>If you think buying Instagram followers will magically make you or your brand famous, you have a
                                    wrong perception.</p>
                                <p>While Buying Instagram followers does give you <strong>unimaginable growth</strong> it’s just one
                                    piece of the puzzle.</p>
                                <p>In fact, the real work begins after that.</p>
                                <p>If you want to sustain the growth of your profile after <strong> purchasing Instagram
                                    followers</strong> you must constantly provide value to your existing audience by posting
                                    valuable and exciting content.</p>
                                <div className="image">
                                    <img src="./images/famoid-buy-instagram-followers.png" alt="" />
                                </div>
                                <p>We help you achieve the initial acceleration, but you must also work hard to maintain that speed.
                                </p>
                                <h2>👉 Get Daily Real Instagram Followers on Automation</h2>
                                <p>If you want a constant flow of new followers, we have a solution for that as well.</p>
                                <p>Our <strong>managed Instagram follower growth service</strong> is designed to deliver
                                    <strong>100% real, high-quality followers</strong> on a daily basis.
                                </p>
                                <p>You pay for the subscription once a month, and our dedicated team of experts will manage the
                                    rest.</p>
                                <p>This solution is specially created for those who want a constant but steady follower base that is
                                    100% natural.</p>
                                <h2>👉 Secured Payment Options</h2>
                                <p>Our platform is <Link to="#!"> fully secured with robust security</Link> systems and SSL encryption
                                    to ensure you can smoothly make payments without any security concerns. We offer several
                                    different payment options to make it easier for you to <strong>buy Instagram followers </strong>
                                    quickly. We accept PayPal, Debit or Credit cards, Apple Pay, and Cryptocurrencies like Bitcoin
                                    or Ethereum.</p>
                                <p>We don’t just deliver unmatched quality social media services, but we also keep you safe during
                                    the process.</p>
                                <h2>👉 Essential Things to Consider Before You Buy Instagram Followers</h2>
                                <p>There are plenty of platforms out there in the market that <strong>sell Instagram
                                    followers.</strong></p>
                                <p>With too many options, choosing the right platform can be extremely confusing and exhausting.</p>
                                <p>That’s why having proper research not only saves you from the hassle but also saves your money
                                    from getting wasted.</p>
                                <p>No matter whether you <strong>buy Instagram followers</strong> from us or some other service
                                    provider, our only goal is to feed you with the right information so that you can make an
                                    <strong>intelligent choice.</strong>
                                </p>
                                <p>So, the next time whenever you go out to buy followers, consider the following factors carefully
                                    before making any decision:</p>
                                <div className="image">
                                    <img src="./images/get-followers-on-instagram.png" alt="" />
                                </div>
                                <p><strong>✅ Reputation:</strong> You should first investigate the <Link to="#!">service
                                    provider’</Link>’s reputation. <strong>Check out previous customers’ reviews, ratings, and
                                        testimonials</strong> to determine whether they are truly genuine. For instance, at Famoid,
                                    <Link to="#!">we have hundreds of reviews from our satisfied customers</Link> spread across various
                                    review platforms.
                                </p>
                                <p><strong>✅ Follower Authenticity:</strong> Would you like to pay for fake followers? No, right?
                                    When you <strong>buy Instagram followers</strong> you expect to <strong>get real and active
                                        followers</strong> on your list. Unfortunately, some platforms do not live up to this
                                    expectation and provide bot-generated or inactive followers. When choosing a service provider,
                                    examine the process they go through to get you quality followers. For example, at Famoid, we use
                                    ad-based promotional methods and hold multiple quality checks to ensure only the finest
                                    followers make their way to your account.</p>
                                <p><strong>✅ Delivery Process: </strong>When choosing a service provider to buy followers, don’t
                                    just look for a quick delivery time. While <strong>“quick” delivery</strong> is attractive, it
                                    can be extremely dangerous for your account safety as well. Instead of “quick delivery,” look
                                    for a service provider that delivers the order in a much more natural and organic way. For
                                    example, at Famoid, our gradual delivery systems ensure your order is delivered on time while
                                    maintaining a natural pace.</p>
                                <p><strong>✅ Customer Support: </strong>Having helpful customer support by your side is essential
                                    when you buy ig followers. Make sure the service provider you’re choosing has a quick and
                                    responsive customer support team that can address any issues or concerns you might face at any
                                    given time of the day.</p>
                                <p><strong>✅ Safety and Privacy:</strong> While <strong>buying followers</strong> the safety of your
                                    personal information and account credentials should be your top priority. You should avoid any
                                    service provider that does not follow the basic safety protocols or ask for your Instagram
                                    password. At Famoid, we take various safety measures to ensure your personal data stays
                                    anonymous and safe.</p>
                                <p><strong>✅ Value Over Cost:</strong> While it’s not necessarily a <strong>bad idea to choose the
                                    most affordable option,</strong> you should prioritize the value of the service over the
                                    cost. Buying cheap Instagram followers might sound like a great deal, but if the service
                                    provider provides low-quality and fake Instagram followers, the consequences could outweigh the
                                    benefits. Always aim to <strong>buy real instagram followers</strong> even if it costs some
                                    extra bucks.</p>
                                <h2>👉 Frequently Asked Questions</h2>
                                <div className="image">
                                    <img src="./images/get-followers.png" alt="" />
                                </div>
                                <h3>⭐ Is it safe to buy Instagram followers?</h3>
                                <p>Yes, it’s completel <strong>safe to buy Instagram followers</strong> at Famoid. Your safety is
                                    our first priority. We use carefully curated advertisement-based methods, prioritize the safety
                                    of your Instagram account, and naturally deliver the order while strictly complying with all the
                                    Instagram terms and guidelines. We <strong>never ask for your password</strong> the only
                                    requirement is your <strong>Instagram username.</strong></p>
                                <h3>⭐ Will my bought followers engage with my content?</h3>
                                <p>Famoid exists to provide high-quality Instagram followers. While the main purpose of
                                    <strong>buying IG followers</strong> is to build credibility and trust among your audience, it
                                    can also <strong>indirectly boost engagement</strong> on instagram page and your content. But,
                                    if your main goal is to get engagement on your Instagram post, we suggest you should check out
                                    our Instagram likes <Link to="#!">growth services.</Link>
                                </p>
                                <h3>⭐ If I buy Instagram followers, will they last forever?</h3>
                                <p>Instagram followers bought on Famoid have the highest retention rate, and most of them stay as
                                    active followers forever.</p>
                                <h3>⭐ Can I purchase Instagram followers for a private account?</h3>
                                <p>No, you can’t <strong>purchase Instagram followers for a private account.</strong> If you wish to
                                    buy Instagram followers, <Link to="#!">your account </Link> should be public. There is no other
                                    alternative.</p>
                                <h3>⭐ Do you offer discounts for bulk Instagram follower purchases?</h3>
                                <p>Yes, we offer lucrative discounts for <strong>bulk Instagram follower orders.</strong> <Link
                                    to="#!">Contact our sales team</Link> for a custom quote.</p>
                                <h3>⭐ Is it legal to buy Instagram followers?</h3>
                                <p>Yes, it is <strong>legal to buy Instagram followers.</strong> No law in the entire world has ever
                                    mentioned that buying genuine followers through organic and advertisement-based promotions is
                                    illegal.</p>
                                <h3>⭐ Will my account get banned or penalized for buying followers?</h3>
                                <p>No, your account won’t get banned or penalized for <strong>buying real Instagram
                                    followers</strong> as we deliver the followers in the most genuine way by applying a gradual
                                    delivery system and complying with all of Instagram’s guidelines. Instead of adverse effects,
                                    Famoid's services will improve your <strong>online presence</strong> with ad-based
                                    <strong>organic growth</strong> methods.
                                </p>
                                <h3>⭐ How quickly will I see an increase in my follower base after placing the order?</h3>
                                <p>Once you place an order with us, it hardly takes a few minutes until you start noticing the
                                    results. The entire timeframe for the delivery may vary depending on the quantity you have
                                    ordered. We use gradual delivery for <strong>natural growth</strong> for all the
                                    <strong>Instagram growth service</strong> packages.
                                </p>
                                <h3>⭐ Can I buy Instagram followers for multiple of my accounts?</h3>
                                <p>Yes, you can buy followers for multiple accounts, but you have to place separate orders for each
                                    account.</p>
                                <h3>⭐ Is it okay to buy cheap Instagram followers?</h3>
                                <p>You can <strong>buy cheap Instagram followers</strong> if you’re okay with negatively affecting
                                    your credibility. Remember, cheap things are cheap for a reason. Those followers are mostly
                                    bot-generated, and anyone can easily identify them as fake accounts or purchased followers,
                                    which can ruin your reputation. You should always purchase followers from a service provider
                                    that provides active followers packages, even if it's not cheap.</p>
                                <h3>⭐ Does buying IG followers give you an advantage over those who don’t buy them?</h3>
                                <p>Yes, if you’re <strong>buying real and active Instagram followers,</strong> you’re already
                                    getting one step ahead of your competitors in terms of <strong> follower count </strong> and
                                    numbers and overall brand reputation.</p>
                                <div className="image">
                                    <img src="./images/instagram-followers.png" alt="" />
                                </div>
                                <h3>⭐ Can I cancel or modify my order after it’s been placed?</h3>
                                <p>Unfortunately, once you have placed your order, we do not provide the option to cancel or modify
                                    the order afterward</p>
                                <h3>⭐ Can I specify the gender or age range of the IG Followers I purchase?</h3>
                                <p>No, as of now, you can’t specify the gender or age range while purchasing followers at Famoid.
                                    Our followers come from different nationalities, ages, and genders.</p>
                                <h3>⭐ Does Famoid provide other Instagram services?</h3>
                                <p>Yes, we provide various other Instagram services, including <Link to="#!">likes, video views, reel
                                    views</Link> and automatic likes. Famoid is one of the best <strong>sites to buy Instagram
                                        services</strong> worldwide.</p>
                                <h3>⭐ How Do I know If the New Followers I have bought are real?</h3>
                                <p>While selling Instagram follower packages, most platforms will tell you they are <strong> real
                                    users</strong> But unfortunately, not all of them are honest. If you want to find out if the
                                    new followers you have bought are <strong>real IG users</strong> check if the users have profile
                                    pictures, bios, and posts on their feeds. It will help you identify whether the <strong>
                                        purchased followers are real.</strong></p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <section className="how-to-buy-section">
                <div className="s-container">
                    <div className="title">
                        <h2>How to Buy Instagram Followers</h2>
                        <p>Follow the steps shown below to <strong>complete your purchase quickly</strong> at Famoid!</p>
                    </div>
                    <div className="row-flex">
                        <div className="order-step-card">
                            <div className="card-title">
                                <img src="./images/number-icon1.png" alt="" />
                                <h3>Choose a Package</h3>
                            </div>
                            <div className="card-img">
                                <img src="./images/famoid-order-step-1.webp" alt="" />
                            </div>
                        </div>
                        <div className="order-step-card">
                            <div className="card-title">
                                <img src="./images/number-icon2.png" alt="" />
                                <h3>Enter your Username</h3>
                            </div>
                            <div className="card-img">
                                <img src="./images/famoid-order-step-2.webp" alt="" />
                            </div>
                        </div>
                        <div className="order-step-card">
                            <div className="card-title">
                                <img src="./images/number-icon3.png" alt="" />
                                <h3>Complete Payment</h3>
                            </div>
                            <div className="card-img">
                                <img src="./images/famoid-order-step-3.webp" alt="" />
                            </div>
                        </div>
                        <div className="order-step-card">
                            <div className="card-title">
                                <img src="./images/number-icon4.png" alt="" />
                                <h3>That's all!</h3>
                            </div>
                            <div className="card-img">
                                <img src="./images/famoid-order-step-4.webp" alt="" />
                            </div>
                        </div>
                    </div>
                    <div className="button">
                        <Link to="#!" className="blue-btn"><img src="./images/click-icon.svg" alt="" />Place Your Order Now!</Link>
                    </div>
                </div>
            </section>
            <section className="other-services">
                <div className="s-container">
                    <div className="title">
                        <h2>Check Out Our Other Instagram Services!</h2>
                        <p>We offer a <strong>wide range</strong> of Instagram services to <strong>boost your account</strong> and <strong>increase engagements!</strong></p>
                    </div>
                    <div className="other-services-link">
                        <Link to="#!" className="blue-btn"><img src="./images/user-icon.svg" alt="" />Purchase Instagram Followers</Link>
                        <Link to="#!" className="blue-btn"><img src="./images/hand-icon.svg" alt="" />Purchase Instagram Likes</Link>
                        <Link to="#!" className="blue-btn"><img src="./images/camero-icon.svg" alt="" />Purchase Instagram Views</Link>
                        <Link to="#!" className="blue-btn"><img src="./images/viedo-icon.svg" alt="" />Instagram Reelss</Link>
                        <Link to="#!" className="blue-btn"><img src="./images/heart-plus-icon.svg" alt="" />Auto Likes</Link>
                    </div>
                </div>
            </section>
        </>
    )
}
