import React, { useContext, useState } from 'react';
import Slider from "react-slick";
import AppContext from '../utils/AppContext';
import { Link } from 'react-router-dom';

export default function Home() {
    const [showModel, setShowModel] = useState(false);
    const [selectedService, setSelectedService] = useState(null);
    const value = useContext(AppContext);
    const servicesData = value.state.servicesData;

    const handleServiceClick = (service) => {
        setSelectedService(service);
        setShowModel(true);
    };

    var settings = {
        dots: false,
        infinite: false,
        speed: 500,
        slidesToShow: 5,
        slidesToScroll: 1,
        initialSlide: 0,
        prevArrow: <img src="../images/prev-icon.svg" alt='' />,
        nextArrow: <img src="../images/next-icon.svg" alt='' />,
        responsive: [
            {
                breakpoint: 1500,
                settings: {
                    slidesToShow: 4,
                    slidesToScroll: 1,
                    infinite: true,
                }
            },
            {
                breakpoint: 1200,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 1,
                    initialSlide: 2
                }
            },
            {
                breakpoint: 900,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1
                }
            },
            {
                breakpoint: 500,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    prevArrow: false,
                    nextArrow: false,
                    Arrow: false,
                }
            }
        ]
    };

    return (
        <>
            <section className="banner-section">
                <div className="s-container">
                    <h1>Meet The New Way of Becoming a Famous!</h1>
                    <p className="sub-title">Being popular in social media is not that difficult anymore. It's time to meet Famoid's excellent social media services.</p>
                    <div className="service-row">
                        {servicesData.map((service, index) => (
                            <div key={index} className="service-box" onClick={() => handleServiceClick(service)} >
                                <div className="icon">
                                    <img src={service.image} alt={service.title} />
                                </div>
                                <h3>{service.title}</h3>
                                <button>Explore Services</button>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            <section className="fast-delivery" id="delivery">
                <div className="s-container">
                    <div className="row">
                        <div className="col description">
                            <h2>😍 Reliability and Fast Delivery</h2>
                            <p>As the <span>Famoid</span> team, we are here to change all bad thoughts about social media services. You can reach our services with completely secure payment methods and have <span>Natural & Gradual delivery.</span> As Famoid team, we do give great importance to Instant delivery and reliability. In this regard, our <span>24/7 Active Support Team</span> is here to provide an instant solution for every problem you are experiencing. We completely guarantee that you will receive a full refund if any disruption occurs in our service. If you try Famoid's social media services, you will never regret it.</p>
                        </div>
                        <div className="col image">
                            <img src="../images/side-img.png" alt="side-img" />
                        </div>
                    </div>
                </div>
            </section>

            <section className="explore-sevice p-6">
                <div className="s-container">
                    <h2>🇺🇸 America's #1 Social Media Marketing Agency 🤩</h2>
                    <p>Famoid is here to reshape your perceptions of social media services. We prioritize secure payments and natural, gradual delivery. Our commitment to instant support is unwavering, with a 24/7 team ready to address any concern. And with our full refund guarantee for any service disruptions, you can rest easy. Try Famoid's services and discover the superior services of America's No. 1 Social Media Marketing Agency since 2017.</p>
                    <Link to="#delivery" className="explore-btn"> <i className="fa-solid fa-crown"></i>Explore Our Services Now!</Link>
                </div>
            </section>

            <section className="rating-section p-6">
                <h2>At Famoid, Your Satisfaction Drives Our Excellence!</h2>
                <p className="sub-title">How do clients rate their experience with Famoid? Find out here!</p>
                <div className="review-row">
                    <Slider {...settings}>

                        <div className='item'>
                            <div className="review-box">
                                <div className="card">
                                    <div className="head">
                                        <div className="star">
                                            <i className="fa-solid fa-star"></i>
                                            <i className="fa-solid fa-star"></i>
                                            <i className="fa-solid fa-star"></i>
                                            <i className="fa-solid fa-star"></i>
                                            <i className="fa-solid fa-star"></i>
                                        </div>
                                        <img src="../images/google-icon.svg" className="google-icon" alt='' />
                                    </div>
                                    <p>I'm very happy with my instagram account's engagement level. Thank you for that famoid.</p>
                                    <i className="fa-solid fa-caret-down down-arrow"></i>
                                </div>
                                <div className="review-profile">
                                    <div className="profile-img">
                                        <img src="../images/profile1.png" alt='' />
                                    </div>
                                    <div>
                                        <h4>david smith</h4>
                                        <p>21 October 2019</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className='item'>
                            <div className="review-box">
                                <div className="card">
                                    <div className="head">
                                        <div className="star">
                                            <i className="fa-solid fa-star"></i>
                                            <i className="fa-solid fa-star"></i>
                                            <i className="fa-solid fa-star"></i>
                                            <i className="fa-solid fa-star"></i>
                                            <i className="fa-solid fa-star"></i>
                                        </div>
                                        <img src="../images/google-icon.svg" className="google-icon" alt='' />
                                    </div>
                                    <p>I'm very happy with my instagram account's engagement level. Thank you for that famoid.</p>
                                    <i className="fa-solid fa-caret-down down-arrow"></i>
                                </div>
                                <div className="review-profile">
                                    <div className="profile-img">
                                        <img src="../images/profile1.png" alt='' />
                                    </div>
                                    <div>
                                        <h4>david smith</h4>
                                        <p>21 October 2019</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className='item'>
                            <div className="review-box">
                                <div className="card">
                                    <div className="head">
                                        <div className="star">
                                            <i className="fa-solid fa-star"></i>
                                            <i className="fa-solid fa-star"></i>
                                            <i className="fa-solid fa-star"></i>
                                            <i className="fa-solid fa-star"></i>
                                            <i className="fa-solid fa-star"></i>
                                        </div>
                                        <img src="../images/google-icon.svg" className="google-icon" alt='' />
                                    </div>
                                    <p>I'm very happy with my instagram account's engagement level. Thank you for that famoid.</p>
                                    <i className="fa-solid fa-caret-down down-arrow"></i>
                                </div>
                                <div className="review-profile">
                                    <div className="profile-img">
                                        <img src="../images/profile1.png" alt='' />
                                    </div>
                                    <div>
                                        <h4>david smith</h4>
                                        <p>21 October 2019</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className='item'>
                            <div className="review-box">
                                <div className="card">
                                    <div className="head">
                                        <div className="star">
                                            <i className="fa-solid fa-star"></i>
                                            <i className="fa-solid fa-star"></i>
                                            <i className="fa-solid fa-star"></i>
                                            <i className="fa-solid fa-star"></i>
                                            <i className="fa-solid fa-star"></i>
                                        </div>
                                        <img src="../images/google-icon.svg" className="google-icon" alt='' />
                                    </div>
                                    <p>I'm very happy with my instagram account's engagement level. Thank you for that famoid.</p>
                                    <i className="fa-solid fa-caret-down down-arrow"></i>
                                </div>
                                <div className="review-profile">
                                    <div className="profile-img">
                                        <img src="../images/profile1.png" alt='' />
                                    </div>
                                    <div>
                                        <h4>david smith</h4>
                                        <p>21 October 2019</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className='item'>
                            <div className="review-box">
                                <div className="card">
                                    <div className="head">
                                        <div className="star">
                                            <i className="fa-solid fa-star"></i>
                                            <i className="fa-solid fa-star"></i>
                                            <i className="fa-solid fa-star"></i>
                                            <i className="fa-solid fa-star"></i>
                                            <i className="fa-solid fa-star"></i>
                                        </div>
                                        <img src="../images/google-icon.svg" className="google-icon" alt='' />
                                    </div>
                                    <p>I'm very happy with my instagram account's engagement level. Thank you for that famoid.</p>
                                    <i className="fa-solid fa-caret-down down-arrow"></i>
                                </div>
                                <div className="review-profile">
                                    <div className="profile-img">
                                        <img src="../images/profile1.png" alt='' />
                                    </div>
                                    <div>
                                        <h4>david smith</h4>
                                        <p>21 October 2019</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className='item'>
                            <div className="review-box">
                                <div className="card">
                                    <div className="head">
                                        <div className="star">
                                            <i className="fa-solid fa-star"></i>
                                            <i className="fa-solid fa-star"></i>
                                            <i className="fa-solid fa-star"></i>
                                            <i className="fa-solid fa-star"></i>
                                            <i className="fa-solid fa-star"></i>
                                        </div>
                                        <img src="../images/google-icon.svg" className="google-icon" alt='' />
                                    </div>
                                    <p>I'm very happy with my instagram account's engagement level. Thank you for that famoid.</p>
                                    <i className="fa-solid fa-caret-down down-arrow"></i>
                                </div>
                                <div className="review-profile">
                                    <div className="profile-img">
                                        <img src="../images/profile1.png" alt='' />
                                    </div>
                                    <div>
                                        <h4>david smith</h4>
                                        <p>21 October 2019</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className='item'>
                            <div className="review-box">
                                <div className="card">
                                    <div className="head">
                                        <div className="star">
                                            <i className="fa-solid fa-star"></i>
                                            <i className="fa-solid fa-star"></i>
                                            <i className="fa-solid fa-star"></i>
                                            <i className="fa-solid fa-star"></i>
                                            <i className="fa-solid fa-star"></i>
                                        </div>
                                        <img src="../images/google-icon.svg" className="google-icon" alt='' />
                                    </div>
                                    <p>I'm very happy with my instagram account's engagement level. Thank you for that famoid.</p>
                                    <i className="fa-solid fa-caret-down down-arrow"></i>
                                </div>
                                <div className="review-profile">
                                    <div className="profile-img">
                                        <img src="../images/profile1.png" alt='' />
                                    </div>
                                    <div>
                                        <h4>david smith</h4>
                                        <p>21 October 2019</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </Slider>
                </div>
            </section>

            <section className="platforms p-6">
                <div className="m-container">
                    <div className="row">
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

            {showModel && (
                <div className="service-model">
                    <div className="model-box">
                        <div className="model-header">
                            <div className="close-btn" onClick={() => {
                                setShowModel(false);
                                setSelectedService(null);
                            }}
                            >
                                <i className="fa-solid fa-xmark"></i>
                            </div>
                        </div>
                        <div className="model-body">
                            <h2>Discover our {selectedService.title}!</h2>
                            <p>Enjoy Famoid's specially crafted {selectedService.title.toLowerCase()} now!</p>
                            {selectedService && selectedService.services?.map((selectedService, index) => (
                                <Link key={index} to={`/${selectedService.slug}`}
                                    className="mantine-btn">
                                    <i className={`fa-solid ${selectedService.icon}`}>
                                    </i>{selectedService.name}
                                </Link>
                            ))}
                        </div>
                    </div>
                </div>
            )}
        </>
    )
}
