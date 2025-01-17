import React, { useContext, useState, useEffect } from 'react';
import { NavLink } from 'react-router-dom';
import { authServices } from '../services/auth.services';
import AppContext from '../utils/AppContext';
import { services } from '../services/services.services';
import { Link } from 'react-router-dom';

export default function Header() {
    const [isActive, setIsActive] = useState(false);
    const value = useContext(AppContext);
    const servicesData = value.state.servicesData;

    useEffect(() => {
        fetchServices();
    }, [])

    const fetchServices = async () => {
        return services.getServices()
            .then(result => {
                if (result?.isSuccessful && result?.data) {
                    value.setServicesData(result.data);
                } else {
                    console.log(result);
                }
            })
            .catch(err => {
                console.log(err);
            });
    };

    const showmenu = () => {
        setIsActive(prevState => !prevState);
    };

    return (
        <>
            <header>
                <div className="s-container">
                    <div className="h-head">
                        <Link className="logo" to='/'>
                            <img src="../images/logo.svg" alt='' />
                        </Link>
                        <div className={`menu ${isActive ? 'active' : ''}`}>
                            <div className="top-row">
                                <Link className="logo" to='/'>
                                    <img src="../images/logo.svg" alt='' />
                                </Link>
                                <div className="close-icon" onClick={showmenu}>
                                    <img src="../images/close.svg" alt='' />
                                </div>
                            </div>
                            <ul>
                                <li className="service-menu">
                                    <NavLink to="/" className={({ isActive }) => (isActive ? 'active' : '')}>
                                        Services
                                    </NavLink>
                                    <div className="sub-menu">
                                        {servicesData && servicesData?.map((service, index) => (
                                            <div className="col">
                                                <h2 key={index}><img src={service.image} alt={service.title} />{service.title}</h2>
                                                {service.services.map((selectedService, index) => (
                                                    <ul>
                                                        <li key={index}><Link to={`/${selectedService.slug}`}><i className={`fa-solid ${selectedService.icon}`}></i>{selectedService.name}</Link></li>
                                                    </ul>
                                                ))}
                                            </div>
                                        ))}
                                    </div>
                                </li>
                                <li>
                                    <NavLink to="/faq" className={({ isActive }) => (isActive ? 'active' : '')}>
                                        FAQ
                                    </NavLink>
                                </li>
                                <li>
                                    <NavLink to="/blog" className={({ isActive }) => (isActive ? 'active' : '')}>
                                        Blog
                                    </NavLink>
                                </li>
                                <li><NavLink to="/contact" className={({ isActive }) => (isActive ? 'active' : '')}>
                                    Contact
                                </NavLink>
                                </li>
                                <li className="account-menu">
                                    <NavLink to={authServices.isUserLoggedIn() ? '/profile' : '/login'}
                                        className={({ isActive }) => (isActive ? 'active' : '')}>My Account</NavLink>
                                    {!authServices.isUserLoggedIn() &&
                                        <ul className="sub-menu">
                                            <li><Link to="/login"><i className="fa-solid fa-right-to-bracket"></i>Login</Link></li>
                                            <li><Link to="/register"><i className="fa-solid fa-user-plus"></i>Register</Link></li>
                                        </ul>
                                    }
                                </li>
                            </ul>
                        </div>
                        <div className="toggle-btn" onClick={showmenu}>
                            <img src="../images/menu.svg" alt='' />
                        </div>
                    </div>
                </div>
            </header >
        </>
    )
}
