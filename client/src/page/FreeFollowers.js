import React from 'react';
import { Link } from 'react-router-dom';

export default function FreeFollowers() {
    return (
        <>
            <div className='free-followers p-6'>
                <div className='s-container'>
                    <div className='base-title'>
                        <h1>Free Instagram Followers</h1>
                    </div>
                    <div className='form-details'>
                        <div className='input-box'>
                            <label>Username</label>
                            <input type='text' placeholder='username' />
                        </div>
                        <div className='input-box'>
                            <label>Followers Quantity</label>
                            <input type='text' placeholder='10-350000' />
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
                        <div className='price-card'>
                            <div>
                                <h2>  <img src='../images/price.svg' alt='' />Price</h2>
                            </div>
                            <span className='line'></span>
                            <div>
                                <h3>Price</h3>
                                <p>$0.00 (Free Trial)</p>
                            </div>
                        </div>
                        <div className='buttons'>
                            <button type='button' className='common-button '> Get Free Followers </button>
                            <button type='button' className='common-button '> Get Free Followers </button>
                            <button type='button' className='common-button '> Get Free Followers </button>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
