import React, { useContext } from 'react';
import './Navbar.css';
import { Link, useNavigate } from 'react-router-dom';
import {UserContext} from '../../contaxt/UserContext'


export const Navbar = () => {
    const { isLoggedIn, logout } = useContext(UserContext); 
    const navigate = useNavigate();

    const handleLogout = () => {
        logout(); 
        navigate('/login'); 
    };

    return (
        <div className='main-container'>
            <div className='logo-container'>
                <img 
                    src='https://mir-s3-cdn-cf.behance.net/projects/404/15be65201896649.Y3JvcCwzMDY4LDI0MDAsNDYzLDA.jpg' 
                    alt='logo'
                />
            </div>
            <div>
                <ul className='rounding-list'>
                    
                    {isLoggedIn ? (
                        <li><button className='logout-button' onClick={handleLogout}>Logout</button></li>
                    ) : (
                        <>
                            <Link to={'/login'}><li><button className='login-button'>Login</button></li></Link>
                            <Link to={'/'}><li><button className='signup-button'>Signup</button></li></Link>
                        </>
                    )}
                </ul>
            </div>
        </div>
    );
};
