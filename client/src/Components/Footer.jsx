import React from 'react';
import { Link } from 'react-router-dom';

export default function Footer() {
    return (
        <>
            <footer>
                <div className="m-container">
                    <div className="foot">
                        <div className="row">
                            <div className="col first-col">
                                <Link className="logo" to='##'>
                                    <img src="../images/logo.svg" alt='' />
                                </Link>
                                <p className="details">Established in 2017, Famoid is a marketing agency that delivers ad-based social media services. We prioritize our customers' experiences, and we're confident that you'll be wholly satisfied once you experience our offerings!</p>
                                <div className="newsletter">
                                    <h3>NEWSLETTER</h3>
                                    <p>Subscribe and get the latest news and promotions from Famoid!</p>
                                    <input type="text" placeholder="Enter your email" />
                                    <button type="submit">Subscribe</button>
                                </div>
                            </div>
                            <div className="col">
                                <ul className="foot-list">
                                    <li><p>Services</p></li>
                                    <li><Link to="##">Buy Instagram Followers</Link></li>
                                    <li><Link to="##">Buy Instagram Likes</Link></li>
                                    <li><Link to="##">Buy Instagram Views</Link></li>
                                    <li><Link to="##">Buy Reels Likes & Views</Link></li>
                                    <li><Link to="##">Automatic Likes</Link></li>
                                    <li><Link to="##">Buy TikTok Followers</Link></li>
                                    <li><Link to="##">Buy TikTok Likes</Link></li>
                                    <li><Link to="##">Buy TikTok Views</Link></li>
                                    <li><Link to="##">Buy Youtube Views</Link></li>
                                    <li><Link to="##">Buy Youtube Subscribers</Link></li>
                                    <li><Link to="##">Buy Youtube Likes</Link></li>
                                    <li><Link to="##">Buy Facebook Post Likes</Link></li>
                                    <li><Link to="##">Buy Facebook Page Likes</Link></li>

                                </ul>
                            </div>
                            <div className="col">
                                <ul className="foot-list">
                                    <li><p>Free Tools</p></li>
                                    <li><Link to="##">Instagram Bio Generator</Link></li>
                                    <li><Link to="##">Instagram Caption Generator</Link></li>
                                    <li><Link to="##">Instagram Follower Counter</Link></li>
                                    <li><Link to="##">Instagram Font Generator</Link></li>
                                    <li><Link to="##">Instagram Hashtag Generator</Link></li>
                                    <li><Link to="##">TikTok Counter</Link></li>
                                    <li><Link to="##">TikTok Hashtag Generator</Link></li>
                                    <li><Link to="##">TikTok Username Generator</Link></li>
                                    <li><Link to="##">Facebook Bio Generator</Link></li>
                                    <li><Link to="##">Facebook Font Generator</Link></li>
                                    <li><Link to="##">Youtube Tag Generator</Link></li>
                                </ul>
                            </div>
                            <div className="col">
                                <ul className="foot-list">
                                    <li><p>Legal</p></li>
                                    <li><Link to="##">Famoid's Story</Link></li>
                                    <li><Link to="/privacy-policy">Privacy Policy</Link></li>
                                    <li><Link to="/terms-condition">Terms of Service</Link></li>
                                    <li><Link to="##">Refund Policy</Link></li>
                                    <li><Link to="##">Cookie Policy</Link></li>
                                </ul>
                                <ul className="foot-list">
                                    <li><p>Legal</p></li>
                                    <li><Link to="/faq">FAQ</Link></li>
                                    <li><Link to="/blog">Blog</Link></li>
                                    <li><Link to="##">Affiliate Program</Link></li>
                                </ul>
                            </div>
                        </div>
                        <div className="bottom-row">
                            <img src="../images/rating.png" alt="rating" />
                            <img src="../images/secure-checkout.png" alt="secure" />
                            <img src="../images/famoid-payment-card.png" alt="card" />
                        </div>
                        <p className="copy-right">Copyright © 2024 Famoid • All Rights Reserved.</p>
                        <p className="disclaimer">Disclaimer: By using this site, you agree to our Terms of Service. Services are "as-is" for personal use only; commercial use and use on accounts you don't own are prohibited. We disclaim liability for third-party services.</p>
                    </div>
                </div>
            </footer>
        </>
    )
}
