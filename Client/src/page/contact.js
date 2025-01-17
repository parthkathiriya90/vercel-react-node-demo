import React from 'react';
import { Link } from 'react-router-dom';

export default function Contact() {
    return (
        <>
            <div className='contact-wrapp'>
                <div className='s-container'>
                    <div className='row'>
                        <div className='content-col'>
                            <h1>Contact Us</h1>
                            <p>Any questions or issues? We are here to help. Drop us an email or initiate a live chat, and we’ll get back to you shortly.</p>
                            <p>You can contact us for 7 days, 24 hours, including holidays.</p>
                            <div className='info-row'>
                                <img src='../images/atheret.svg' alt='' />
                                <div>
                                    <p>Customer Service</p>
                                    <h2>support@famoid.com</h2>
                                </div>
                            </div>
                            <div className='info-row'>
                                <img src='../images/location.svg' alt='' />
                                <div>
                                    <p>US Office</p>
                                    <h2>112 Capitol Trail Newark, DE 19711</h2>
                                </div>
                            </div>
                        </div>
                        <div className='contact-form'>
                            <div className='form-box'>
                                <form>
                                    <div className='input-box'>
                                        <label>Your Email<b>*</b></label>
                                        <input type='email' placeholder='Johny@gmail.com' />
                                    </div>
                                    <div className='input-box'>
                                        <label>Order ID (if available)</label>
                                        <input type='text' placeholder='4XXXXXX' />
                                    </div>
                                    <div className='input-box'>
                                        <label>Message<b>*</b></label>
                                        <textarea type='text' rows={5} placeholder='Please explain your request in detail.' />
                                    </div>

                                    <button type='submit'>Start a Chat with Famoid Support</button>
                                </form>
                                <p className='bottom-link'>Chat pops up only if there are available agents.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className='contact-faq'>
                <div className='faq-section'>
                    <h3>Quick Answers</h3>
                    <div className="accordion-faq">
                        <ul>
                            {/* add active-acoordian class on li click */}
                            <li className="accordion-li ">
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

                        </ul>
                    </div>
                </div>
            </div>
        </>
    )
}
