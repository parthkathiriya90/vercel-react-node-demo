import React, { useState } from 'react';
import { Link } from 'react-router-dom';

export default function Faq() {
    const [isActive, setIsActive] = useState(false);
    const showmenu = () => {
        setIsActive(prevState => !prevState);
    };
    return (
        <>
            <section className="s-container">
                <div className="faq-section">
                    <div className="title">
                        <h1>Frequently Asked Questions</h1>
                        <p>Got questions? We've got answers. Browse through our Frequently Asked Questions to find quick and
                            detailed solutions to your queries. From order timelines to service specifics, we've covered it all
                            to
                            make your experience seamless.</p>
                    </div>

                    <div className="accordion-faq">
                        <ul>
                            <li className={`accordion-li ${isActive ? 'active-acoordian' : ''}`} onClick={() => showmenu(true)}>
                                <div className="lable">
                                    <h2>How Famoid works?</h2>
                                    <i className="fa-solid fa-angle-down"></i>
                                </div>
                                <div className="accordiyan-content">
                                    <div className="content">
                                        <p>As Famoid, we’re the only company that is legally providing social media services.
                                            Here are the steps we’re taking for providing our ALL exclusive services;</p>
                                        <ul>
                                            <li>Our customers securely make payments for services intended solely for self-entertainment and use on their personal accounts.</li>
                                            <li>Famoid instantly creates advertisements/promotions on various social networks and 3rd party advertising networks.</li>
                                            <li>From these ads, we direct real interactions/impressions to your profiles.</li>
                                            <li>We never use fake (not real) accounts created by a tool or so. For more information, check our <Link to="#!"> Terms of Service.</Link></li>
                                        </ul>
                                        <p>As a result, Famoid is a legal middle-man between you and advertisement networks.</p>
                                    </div>
                                </div>
                            </li>
                            <li className="accordion-li">
                                <div className="lable">
                                    <h2>Why should I choose Famoid?</h2>
                                    <i className="fa-solid fa-angle-down"></i>
                                </div>
                                <div className="accordiyan-content">
                                    <div className="content">
                                        <p>AWe’re the first company that can legally present social media services. Our system is fully automatic so that you can get your delivery ultra instantly. Our team is available 24/7 included holidays. We aim to present ultimate social media services that you won’t regret. You can definitely <Link to='#!'>trust Famoid</Link>  on it.</p>
                                    </div>
                                </div>
                            </li>
                            <li className="accordion-li">
                                <div className="lable">
                                    <h2>How many Instagram followers can I buy for the first time?</h2>
                                    <i className="fa-solid fa-angle-down"></i>
                                </div>
                                <div className="accordiyan-content">
                                    <div className="content">
                                        <p>Actually, it depends on you. However, if you’re trying to get massive attention, we advise that you can buy more than 5.000+ for the first time. Since over 5000 followers can make a good impression on your account. The first impression is important!</p>
                                    </div>
                                </div>
                            </li>
                            <li className="accordion-li">
                                <div className="lable">
                                    <h2>Why do I need to buy followers or likes?</h2>
                                    <i className="fa-solid fa-angle-down"></i>
                                </div>
                                <div className="accordiyan-content">
                                    <div className="content">
                                        <p>We’re living in a social world, so everyone tries to pay attention in every way. To get the attention you deserve, you need social media services. We are your best supporter of it. We help you to get the attention you deserve for self-entertainment purposes only.</p>
                                    </div>
                                </div>
                            </li>
                            <li className="accordion-li">
                                <div className="lable">
                                    <h2>Buying followers or likes is legal?</h2>
                                    <i className="fa-solid fa-angle-down"></i>
                                </div>
                                <div className="accordiyan-content">
                                    <div className="content">
                                        <p><strong>Of course.</strong> Buying followers or likes for any social media is legal if it is done in compliance applicable laws, and the purchased engagements are not used to deceive or mislead others, particularly in commercial contexts. Additionally, the engagements should be for personal use and self-entertainment purposes, not for commercial gain or on behalf of others' accounts. You can think that it is a digital marketing strategy for your personal account. When you buy followers or likes, we promote your account with third-party ad networks. It is totally legal and safe. You can buy social media services on <strong>Famoid </strong> without any doubt.</p>
                                    </div>
                                </div>
                            </li>
                            <li className="accordion-li">
                                <div className="lable">
                                    <h2>Can I take receipt of my purchase?</h2>
                                    <i className="fa-solid fa-angle-down"></i>
                                </div>
                                <div className="accordiyan-content">
                                    <div className="content">
                                        <p><strong>Sure.</strong> We are a legal agency in the Delaware / United States and in Dubai / UAE. Therefore, you can take a receipt of your order. We send your receipt via e-mail after your order has been approved automatically.</p>
                                    </div>
                                </div>
                            </li>
                            <li className="accordion-li">
                                <div className="lable">
                                    <h2>How can I make a payment?</h2>
                                    <i className="fa-solid fa-angle-down"></i>
                                </div>
                                <div className="accordiyan-content">
                                    <div className="content">
                                        <p>You can easily pay with credit or debit cards. We use<strong> Nuvei and Coinbase Commerce</strong> as payment methods on our website.</p>
                                    </div>
                                </div>
                            </li>
                            <li className="accordion-li">
                                <div className="lable">
                                    <h2>How long should I wait for the delivery?</h2>
                                    <i className="fa-solid fa-angle-down"></i>
                                </div>
                                <div className="accordiyan-content">
                                    <div className="content">
                                        <p> <strong> We deliver your order gradually. </strong> When you purchase any of our products, we process your order right away. However, the full-delivery may take time as we use natural methods to deliver those services.</p>
                                    </div>
                                </div>
                            </li>
                            <li className="accordion-li">
                                <div className="lable">
                                    <h2>Followers or likes are real?</h2>
                                    <i className="fa-solid fa-angle-down"></i>
                                </div>
                                <div className="accordiyan-content">
                                    <div className="content">
                                        <p> <strong> Absolutely.</strong> We do not use fake accounts like any other website. We only use <strong>real & active followers</strong> in our packages. All of our services, like <Link to='#!'>Instagram followers</Link> or likes, are genuine. You can use our service without any kind of risk. Our services are <strong> solely based on ads</strong> and provide services for <strong>personal use only.</strong></p>
                                    </div>
                                </div>
                            </li>
                            <li className="accordion-li">
                                <div className="lable">
                                    <h2>Do I need to give my password to Famoid?</h2>
                                    <i className="fa-solid fa-angle-down"></i>
                                </div>
                                <div className="accordiyan-content">
                                    <div className="content">
                                        <p> <strong> Never.</strong> We do not ask for your password because we do not need your password. To process your order, your photo URL or username is enough for us. Please, do not give your password to anyone or any services.</p>
                                    </div>
                                </div>
                            </li>
                            <li className="accordion-li">
                                <div className="lable">
                                    <h2>Can I trust Famoid?</h2>
                                    <i className="fa-solid fa-angle-down"></i>
                                </div>
                                <div className="accordiyan-content">
                                    <div className="content">
                                        <p> <strong> Absolutely. </strong>  We know that you may have bad thoughts about social media services. We’re here to break it <Link to='#!'>Famoid </Link> is a totally legal digital agency in the United States.</p>
                                    </div>
                                </div>
                            </li>
                            <li className="accordion-li">
                                <div className="lable">
                                    <h2>Can my social media account be banned?</h2>
                                    <i className="fa-solid fa-angle-down"></i>
                                </div>
                                <div className="accordiyan-content">
                                    <div className="content">
                                        <p> <strong> No way. </strong>  While you’re ordering on Famoid.com for any social media services, we only ask for your username. We never ask for your password!. You give us your username then we complete the order. That is easy. Our developed system protects your account. Your account cannot be banned; make sure about it. In otherwise, we can send followers to anyone and get banned?. This is not possible.</p>
                                    </div>
                                </div>
                            </li>
                            <li className="accordion-li">
                                <div className="lable">
                                    <h2>Can I use the services for my business or brand?</h2>
                                    <i className="fa-solid fa-angle-down"></i>
                                </div>
                                <div className="accordiyan-content">
                                    <div className="content">
                                        <p> <strong> No, </strong>  our services <strong> are strictly intended for personal use and self-entertainment purposes only. </strong>  Using our services for commercial purposes, such as promoting a business, brand, or other entity, is strictly prohibited. This includes using the services on behalf of others, whether for personal or business purposes. Violating this policy may result in the termination of your access to our services without notice.</p>
                                    </div>
                                </div>
                            </li>
                            <li className="accordion-li">
                                <div className="lable">
                                    <h2>What happens if I use the services commercially?</h2>
                                    <i className="fa-solid fa-angle-down"></i>
                                </div>
                                <div className="accordiyan-content">
                                    <div className="content">
                                        <p> If you use our services for commercial purposes,<strong> it constitutes a violation of our Terms of Service. </strong> As a result, we may immediately terminate your access to the services without notice. Additionally, we disclaim any liability for damages or losses that may arise from such unauthorized use.<strong> We strongly advise users to adhere to the intended personal use </strong>  and self-entertainment purposes to avoid any disruptions to their service.</p>
                                    </div>
                                </div>
                            </li>
                            <li className="accordion-li">
                                <div className="lable">
                                    <h2>Can I get a refund if any problem occurs on my purchase?</h2>
                                    <i className="fa-solid fa-angle-down"></i>
                                </div>
                                <div className="accordiyan-content">
                                    <div className="content">
                                        <p>If any issues occur in your purchase,<strong> you will get a</strong> <Link to='#!'> full refund.</Link></p>
                                    </div>
                                </div>
                            </li>
                            <li className="accordion-li">
                                <div className="lable">
                                    <h2>Do you have an Affiliate Program?</h2>
                                    <i className="fa-solid fa-angle-down"></i>
                                </div>
                                <div className="accordiyan-content">
                                    <div className="content">
                                        <p>Yes, we do. You can easily join<strong> Famoid’s Affiliate Program</strong> by clicking this link:<Link to='#!'> https://famoid.tapfiliate.com/</Link></p>
                                    </div>
                                </div>
                            </li>
                            <li className="accordion-li">
                                <div className="lable">
                                    <h2>Do you offer only Advertising services?</h2>
                                    <i className="fa-solid fa-angle-down"></i>
                                </div>
                                <div className="accordiyan-content">
                                    <div className="content">
                                        <p>Famoid offers <strong> only Advertising</strong>services. We <strong> DO NOT SELL</strong> bots:<Link to='#!'> Read More</Link></p>
                                    </div>
                                </div>
                            </li>
                        </ul>
                    </div>
                </div>
            </section>
        </>
    )
}
