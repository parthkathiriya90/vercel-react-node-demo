import React from 'react';
import { Link } from 'react-router-dom';

export default function InstaIssue() {
    return (
        <>
            <section className='banner-section'>
                <span>Category</span>
                <h2>Instagram Issues</h2>
                <p>As Famoid Team, we are trying to solve Instagram Issues of people by preparing well written blog posts.</p>
                <span className='bg-text'>Category</span>
            </section>

            <section className='blog-section category-pages'>
                <div className='s-container'>
                    <div className='blog-card-div'>
                        <div className='blog-card'>
                            <div className='blog-img'>
                                <Link to='/blog-detail' className='image'>
                                    <img src='../images/blog-img1.webp' alt=''></img>
                                </Link>
                                <Link to='#!' className='img-category'>Instagram Issues</Link>
                            </div>
                            <div className='blog-content'>
                                <div className='post-date-div'>
                                    <Link to='#!' className='post-category'>Instagram Issues</Link>
                                    <span>-</span>
                                    <Link to='#!'>October 15, 2024</Link>
                                </div>
                                <h2 className='post-title'>
                                    <Link to='#!'>What Does IG Mean in Texting? (2024)</Link>
                                </h2>
                                <p>
                                    Wondering what does IG mean? This post is for you. Everyone is on social media these days. You can connect with anyone on social media, be it your friends or family members, from all around the globe. However, the communication style has changed in today’s fast-changing social media</p>
                            </div>
                        </div>
                        <div className='blog-card'>
                            <div className='blog-img'>
                                <Link to='/blog-detail' className='image'>
                                    <img src='../images/blog-img2.webp' alt=''></img>
                                </Link>
                                <Link to='#!' className='img-category'>Instagram Issues</Link>
                            </div>
                            <div className='blog-content'>
                                <div className='post-date-div'>
                                    <Link to='#!' className='post-category'>Social Media Updates</Link>
                                    <span>-</span>
                                    <Link to='#!'>September 30, 2024</Link>
                                </div>
                                <h2 className='post-title'>
                                    <Link to='#!'>How to Change Steam Username (2024)</Link>
                                </h2>
                                <p>Steam is one of the most popular gaming platforms in the entire world.  This platform allows gamers to purchase world-class games and software for their computer device without having to buy the physical discs that we were used to before. Downloading and installing games without physical discs seemed</p>
                            </div>
                        </div>
                        <div className='blog-card'>
                            <div className='blog-img'>
                                <Link to='#!' className='image'>
                                    <img src='../images/blog-img3.webp' alt=''></img>
                                </Link>
                                <Link to='#!' className='img-category'>Instagram Issues</Link>
                            </div>
                            <div className='blog-content'>
                                <div className='post-date-div'>
                                    <Link to='#!' className='post-category'>Instagram Issues</Link>
                                    <span>-</span>
                                    <Link to='#!'>September 19, 2024</Link>
                                </div>
                                <h2 className='post-title'>
                                    <Link to='#!'>Why Does Instagram Keep Logging Me Out? (2024 Updated)</Link>
                                </h2>
                                <p>Why does Instagram keep logging me out? If you have the same question in mind, you have landed in the right post. With a staggering 2 billion monthly active users, Instagram is the world’s fourth-largest social networking platform and the fourth-most visited website. Almost everyone uses Instagram these</p>
                            </div>
                        </div>
                        <div className='blog-card'>
                            <div className='blog-img'>
                                <Link to='#!' className='image'>
                                    <img src='../images/blog-img4.webp' alt=''></img>
                                </Link>
                                <Link to='#!' className='img-category'>Instagram Issues</Link>
                            </div>
                            <div className='blog-content'>
                                <div className='post-date-div'>
                                    <Link to='#!' className='post-category'>Facebook Issues</Link>
                                    <span>-</span>
                                    <Link to='#!'>September 11, 2024</Link>
                                </div>
                                <h2 className='post-title'>
                                    <Link to='#!'>How to Add Admin to a Facebook Page (2024)</Link>
                                </h2>
                                <p>Do you want to add admin to your Facebook page but don’t know how to do it? Do you feel like it’s too complex to add an admin to your Facebook page? If yes, don’t worry. We’ve got your back. Managing a Facebook page can require a lot</p>
                            </div>
                        </div>
                        <div className='blog-card'>
                            <div className='blog-img'>
                                <Link to='#!' className='image'>
                                    <img src='../images/blog-img5.webp' alt=''></img>
                                </Link>
                                <Link to='#!' className='img-category'>Instagram Issues</Link>
                            </div>
                            <div className='blog-content'>
                                <div className='post-date-div'>
                                    <Link to='#!' className='post-category'>Instagram Issues</Link>
                                    <span>-</span>
                                    <Link to='#!'>August 30, 2024</Link>
                                </div>
                                <h2 className='post-title'>
                                    <Link to='#!'>7 Best Platforms to Buy Threads Likes (Genuine & Safe)</Link>
                                </h2>
                                <p>Are you looking to buy Threads likes but wondering which service provider to choose? Don’t worry. We’ve got you covered. Instagram’s Threads platform has become the talk of the town these days. Plenty of users from Twitter are already shiting to Threads because they are unsure of Twitter’s</p>
                            </div>
                        </div>
                    </div>
                    <div className='main-pagination-div'>
                        <div className='pagination'>
                            <Link to='#!' className='prev-next-txt disable'><i class="fa-solid fa-arrow-left-long"></i> Previous</Link>
                            <div className='page-number'>
                                <Link to='#!' className='active-page'>1</Link>
                                <Link to='#!'>2</Link>
                                <Link to='#!'>3</Link>
                                <Link to='#!' className='dot'>...</Link>
                                <Link to='#!'>30</Link>
                            </div>
                            <Link to='#!' className='prev-next-txt'>Next <i class="fa-solid fa-arrow-right-long"></i></Link>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}
