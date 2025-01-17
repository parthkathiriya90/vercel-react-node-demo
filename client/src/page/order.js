import React, { useState, useEffect, useRef } from 'react';
import { Link, useParams, useLocation } from 'react-router-dom';
import { orderServices } from '../services/order.services';

export default function Order() {
    const { slug } = useParams();
    const location = useLocation();
    const dropdownRef = useRef();
    const splitSlug = slug.split('GOI');
    const mainSlug = splitSlug[0];
    const qty = splitSlug[1];

    const queryParams = new URLSearchParams(location.search);
    const type = queryParams.get('type');

    const [orderDetails, setOrderDetails] = useState(null);
    const [isDropdownOpen, setDropdownOpen] = useState(false);
    const [selectedPackage, setSelectedPackage] = useState(null);
    const [errorMsg, setErrorMsg] = useState(null);
    const [isLoading, setIsLoading] = useState(true);
    const [isBtnLoading, setIsBtnLoading] = useState(false);
    const [title, setTitle] = useState('');
    const [email, setEmail] = useState('');

    useEffect(() => {
        renderOrderDetails();
    }, [slug, orderDetails]);

    useEffect(() => {
        orderFormDetails();
    }, []);

    useEffect(() => {
        document.addEventListener('mousedown', handleClickOutside);
        return () => {
            document.removeEventListener('mousedown', handleClickOutside);
        };
    }, []);

    const handleClickOutside = (event) => {
        if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
            setDropdownOpen(false);
        }
    };

    function clearMessages() {
        setErrorMsg('');
        setIsLoading(false);
    };

    const orderFormDetails = async () => {
        clearMessages();
        let payload = {
            slug: mainSlug,
            qty: qty,
            type: type
        }
        setIsLoading(true);
        orderServices.orderFormDetails(payload)
            .then((result) => {
                if (result.isSuccessful) {
                    setOrderDetails(result.data);
                } else {
                    setErrorMsg(result.message);
                }
                setIsLoading(false);
            })
            .catch((err) => {
                setErrorMsg(err);
                setIsLoading(false);
            })
    };

    const renderOrderDetails = async () => {
        try {
            setIsLoading(true);
            setErrorMsg(null);

            if (!slug) {
                setErrorMsg('Invalid URL parameters!');
            }

            if (!orderDetails?.fields?.[2]?.List) {
                setErrorMsg('Package details not available');
            }

            const packageToSelect = orderDetails?.fields[2]?.List.find(
                pkg => pkg.qty.toString() === qty
            );

            if (packageToSelect) {
                setSelectedPackage(packageToSelect);
            }
            else {
                setErrorMsg('Selected package not found');
            }
            setIsLoading(false);
        }
        catch (err) {
            setErrorMsg(err.message);
        }
    };

    const handlePackageSelect = (List) => {
        setSelectedPackage(List);
        setDropdownOpen(false);
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        clearMessages();
        if (title !== "" && email !== "" && slug !== "" && qty !== "" && type !== "") {
            const payload = {
                slug: mainSlug,
                serviceId: orderDetails?.serviceId,
                qty: qty,
                type: type,
                title: title,
                email: email
            };
            setIsBtnLoading(true);
            orderServices
                .generateOrder(payload)
                .then((result) => {
                    if (result.isSuccessful) {
                        console.log('Order generated successfully:', result);
                    } else {
                        setErrorMsg(result.message);
                    }
                    setIsBtnLoading(false);
                })
                .catch((error) => {
                    setErrorMsg(error.message);
                    setIsBtnLoading(false);
                });
        };
    };

    if (errorMsg) {
        return (
            <div className="errorMsg-message">
                Error: {errorMsg}
            </div>
        );
    };

    return (
        <>
            <header>
                <div className='s-container'>
                    <div className='order-header'>
                        <div className='back-icon'>
                            <Link to='/'>
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

            {isLoading ? (
                <i className=""></i>
            ) : (
                <div className='login-wrapp order-section'>
                    <div className='order-form'>
                        <div className='form-box'>
                            <h1>Get Started</h1>
                            <form method="POST">
                                <div className='input-box'>
                                    <label>{orderDetails.fields[0].title}</label>
                                    <div className='input'>
                                        <input
                                            type='text'
                                            name='title'
                                            placeholder={orderDetails.fields[0].placeholder}
                                            value={title}
                                            required
                                            onChange={(e) => setTitle(e.target.value)}
                                        />
                                        <div className='icon'><i class="fa-brands fa-instagram"></i></div>
                                    </div>
                                </div>
                                <div className='input-box'>
                                    <label>{orderDetails.fields[1].title}</label>
                                    <div className='input'>
                                        <input
                                            type='email'
                                            name='email'
                                            placeholder={orderDetails.fields[1].placeholder}
                                            value={email}
                                            required
                                            onChange={(e) => setEmail(e.target.value)}
                                        />
                                        <div className='icon'><i class="fa-solid fa-at"></i></div>
                                    </div>
                                </div>

                                <div className='input-box'>
                                    <label>{orderDetails.fields[2].title}</label>
                                    <div className='input' ref={dropdownRef}>
                                        <div className={`select-input-box ${isDropdownOpen ? 'show-selected-box' : ''}`} onClick={() => setDropdownOpen(!isDropdownOpen)}>
                                            <div className='select-input'>
                                                <div><i class="fa-solid fa-user-plus"></i></div>
                                                <div className='selected-text'>{selectedPackage?.qty} {selectedPackage?.text}</div>
                                                <div>{selectedPackage?.price}</div>
                                            </div>

                                            {isDropdownOpen && (
                                                <ul className='select-list'>
                                                    {orderDetails?.fields?.[2]?.List?.length > 0 &&
                                                        orderDetails?.fields[2]?.List.map((List, index) => (
                                                            <li
                                                                key={index}
                                                                onClick={() => handlePackageSelect(List)}
                                                            >
                                                                <Link to={`/order/${mainSlug}GOI${List.qty}?type=${type}`}>
                                                                    <i className="fa-solid fa-user-plus"></i>
                                                                    <div className='select-text'>{List?.qty} {List?.text}</div>
                                                                    <div>{List?.price.toFixed(2)}</div>
                                                                </Link>
                                                            </li>
                                                        ))}
                                                </ul>
                                            )}
                                        </div>
                                    </div>
                                </div>

                                <button
                                    type='submit'
                                    onClick={handleSubmit}
                                >
                                    {isBtnLoading ? (
                                        <i className="fa-solid fa-spinner fa-spin"></i>
                                    ) : (
                                        <>
                                            "Continue" <i className="fa-solid fa-chevron-right"></i>
                                        </>
                                    )}
                                </button>
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
            )}

        </>
    )
}
