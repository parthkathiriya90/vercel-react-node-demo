import React, { useState } from 'react';
import { Link } from 'react-router-dom';

export default function BlogHeader() {
    const [SearchBox , SetSearchBox] = useState(false);
     const [isActive, setIsActive] = useState(false);
        const showmenu = () => {
            setIsActive(prevState => !prevState);
          };
    return (
        <>
            <header>
                <div className="s-container">
                    <div className="blog-hdr">
                        <div className="blog-logo-div">
                            <div className="mob-blog-menu">
                                <div className={`menu-icon ${isActive ? 'show-mob-menu' : ''}`} onClick={() => showmenu(true)}>
                                    <i className="fa-solid fa-bars"></i>
                                </div>
                                <div className="mob-menu">
                                    <div className="close-menu-icon" onClick={() => showmenu(false) }>
                                        <i className="fa-solid fa-xmark"></i>
                                    </div>
                                    <ul>
                                        <li>
                                            <Link to="/blog">
                                                <img src="../images/blog-hdr-icon1.svg" alt="" />
                                                Blog
                                            </Link>
                                        </li>
                                        <li>
                                            <Link to="/instagram-issue">
                                                <img src="../images/blog-hdr-icon2.svg" alt="" />
                                                Instagram Updates
                                            </Link>
                                        </li>
                                        <li>
                                            <Link to="/media-update">
                                                <img src="../images/blog-hdr-icon3.svg" alt="" />
                                                Social Media Updates
                                            </Link>
                                        </li>
                                        <li>
                                            <Link to="/service">
                                                <img src="../images/blog-hdr-icon4.svg" alt="" />
                                                Services
                                            </Link>
                                        </li>
                                        <li>
                                            <Link to="/contact">
                                                <img src="../images/blog-hdr-icon5.svg" alt="" />
                                                Contact
                                            </Link>
                                        </li>
                                    </ul>
                                </div>
                                <div className="off-canvas"></div>
                            </div>
                            <Link to="/" className='blog-logo'>
                                <img src="../images/blog-logo.webp" alt="" />
                            </Link>
                        </div>
                        <div className="blog-menu">
                            <ul>
                                <li>
                                    <Link to="/blog" className='active-blog-menu'>
                                        <img src="../images/blog-hdr-icon1.svg" alt="" />
                                        Blog
                                    </Link>
                                </li>
                                <li>
                                    <Link to="/instagram-issue">
                                        <img src="../images/blog-hdr-icon2.svg" alt="" />
                                        Instagram Updates
                                    </Link>
                                </li>
                                <li>
                                    <Link to="/media-update">
                                        <img src="../images/blog-hdr-icon3.svg" alt="" />
                                        Social Media Updates
                                    </Link>
                                </li>
                                <li>
                                    <Link to="/service">
                                        <img src="../images/blog-hdr-icon4.svg" alt="" />
                                        Services
                                    </Link>
                                </li>
                                <li>
                                    <Link to="/contact">
                                        <img src="../images/blog-hdr-icon5.svg" alt="" />
                                        Contact
                                    </Link>
                                </li>
                            </ul>
                        </div>
                        <div className="search-icon" onClick={() => SetSearchBox(true)}>
                            <Link to="#!"><i className="fa-solid fa-magnifying-glass"></i></Link> 
                        </div>
                    </div>
                </div>
                {SearchBox && (
                <div className="search-modal">
                    <div className="close-icon" onClick={() => SetSearchBox(false)}>
                        <i className="fa-solid fa-xmark"></i>
                    </div>
                    <div className="search-box">
                        <form action="">
                            <input type="text" placeholder='Search...' className='search-input' />
                            <p>Type above and press <em>Enter</em> to search. Press <em>Esc</em> to cancel.</p>
                        </form>
                    </div> 
                </div>
                )}
            </header>
        </>
    )
}
