import React from 'react';
import { Link } from 'react-router-dom';

export default function Order() {
    return (
        <>
            <header>
                <div className='s-container'>
                    <div className='order-header'>
                        <div className='back-icon'>
                            <Link to='/service'>
                                <i class="fa-solid fa-chevron-left"></i>
                            </Link>
                        </div>
                        <Link className="logo" to='/'>
                            <img src="../images/logo.svg" alt='' />
                        </Link>
                        <div className='right-icon'>
                            <div className='user-profile'>
                                <Link to='##'>
                                    <img src="../images/user-profile-icon.svg" alt='' />
                                </Link>
                                <ul className="sub-menu">
                                    <li><Link to="/login"><i className="fa-solid fa-right-to-bracket"></i>Login</Link></li>
                                    <li><Link to="/register"><i className="fa-solid fa-user-plus"></i>Register</Link></li>
                                </ul>
                            </div>
                            <div className='email-issue'>
                                <Link to='/contact'>
                                    <img src="../images/email-issue-icon.svg" alt='' />
                                </Link>
                                <span className='tooltip'>Having issues? Report to us!</span>
                            </div>
                        </div>
                    </div>
                </div>
            </header>


            <div className='login-wrapp order-section'>
                <div className='order-form'>
                    <div className='form-box'>
                        <h1>Get Started</h1>
                        <form>
                            <div className='input-box'>
                                <label>Instagram Username</label>
                                <div className='input'>
                                    <input type='text' placeholder='Instagram Username' />
                                    <div className='icon'><i class="fa-brands fa-instagram"></i></div>
                                </div>
                            </div>
                            <div className='input-box'>
                                <label>Email</label>
                                <div className='input'>
                                    <input type='email' placeholder='Your Email Address' />
                                    <div className='icon'><i class="fa-solid fa-at"></i></div>
                                </div>
                            </div>
                            <div className='input-box'>
                                <label>Package</label>
                                <div className='input'>
                                    <div className='select-input-box'>{/* add show-selected-box class */}
                                        <div className='select-input'>
                                            <div><i class="fa-solid fa-user-plus"></i></div>
                                            <div className='selected-text'>100 Instagram Followers</div>
                                            <div>$3.95</div>
                                        </div>
                                        <ul className='select-list'>
                                            <li>
                                                <Link to='##'>
                                                    <i class="fa-solid fa-user-plus"></i>
                                                    <div className='select-text'>250 Instagram Followers</div>
                                                    <div>$5.95</div>
                                                </Link>
                                            </li>
                                            <li>
                                                <Link to='##'>
                                                    <i class="fa-solid fa-user-plus"></i>
                                                    <div className='select-text'>500 Instagram Followers</div>
                                                    <div>$8.95</div>
                                                </Link>
                                            </li>
                                            <li>
                                                <Link to='##'>
                                                    <i class="fa-solid fa-user-plus"></i>
                                                    <div className='select-text'>1000 Instagram Followers</div>
                                                    <div>$3.95</div>
                                                </Link>
                                            </li>
                                            <li>
                                                <Link to='##'>
                                                    <i class="fa-solid fa-user-plus"></i>
                                                    <div className='select-text'>2500 Instagram Followers</div>
                                                    <div>$39.95</div>
                                                </Link>
                                            </li>
                                            <li>
                                                <Link to='##'>
                                                    <i class="fa-solid fa-user-plus"></i>
                                                    <div className='select-text'>5000 Instagram Followers</div>
                                                    <div>$69.95</div>
                                                </Link>
                                            </li>
                                            <li>
                                                <Link to='##'>
                                                    <i class="fa-solid fa-user-plus"></i>
                                                    <div className='select-text'>10000 Instagram Followers</div>
                                                    <div>$129.95</div>
                                                </Link>
                                            </li>
                                            <li>
                                                <Link to='##'>
                                                    <i class="fa-solid fa-user-plus"></i>
                                                    <div className='select-text'>15000 Instagram Followers</div>
                                                    <div>$199.95</div>
                                                </Link>
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                            <button type='submit'>Continue <i class="fa-solid fa-chevron-right"></i></button>
                        </form>
                    </div>
                    <div className='flex-col'>
                        <div>
                            <span className='live-number'>208</span>
                            <span>live users purchasing</span>
                        </div>
                        <div className='right-img-div'>
                            <img src='../images/rating-img.webp' alt='' />
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
