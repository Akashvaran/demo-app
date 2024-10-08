import React, { useState, useContext } from 'react';
import './Login.css';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import { UserContext } from '../../../contaxt/UserContext';


export const Login = () => {
    const [formdata, setFormdata] = useState({ email: '', password: '' });
    const [loginError, setLoginError] = useState('');
    const [sucesslogin, setSucesslogin] = useState('');
    const [error, setError] = useState({});

    const { login } = useContext(UserContext);
    const Navigate = useNavigate();

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormdata((prevdata) => ({
            ...prevdata,
            [name]: value,
        }));
    };

    const formValidation = () => {
        const validationError = {};
        if (!formdata.email.trim()) {
            validationError.email = 'Email is required';
        } else if (!/^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/.test(formdata.email)) {
            validationError.email = 'Invalid email format';
        }
        if (!formdata.password.trim()) {
            validationError.password = 'Password is required';
        } else if (formdata.password.length < 6) {
            validationError.password = 'Password must be at least 6 characters long';
        }
        return validationError;
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        const validationError = formValidation();
        setError(validationError);

        if (Object.keys(validationError).length === 0) {
            try {
                const response = await axios.get('https://66c77724732bf1b79fa6a0c7.mockapi.io/data');
                const users = response.data;
                const user = users.find(
                    (user) => user.email === formdata.email && user.password === formdata.password
                );

                if (user) {
                    setSucesslogin("Login successful");
                    login();
                    Navigate('/dashboard');
                } else {
                    setLoginError('Invalid email or password');
                }
            } catch (error) {
                console.error('Error fetching user data:', error);
                setLoginError('An error occurred while logging in. Please try again.');
            }
        }
    };

    return (
        <div className='form-container'>
            <form className='login-form' onSubmit={handleSubmit}>
                {sucesslogin && <p className='success'>{sucesslogin}</p>}
                {loginError && <p className='error'>{loginError}</p>}
                <div className='input-container'>
                    <label className='label-container'>Email</label>
                    <input type='text' name='email' value={formdata.email} onChange={handleChange} />
                    {error.email && <p className='error'>{error.email}</p>}
                </div>
                <div className='input-container'>
                    <label className='label-container'>Password</label>
                    <input type='password' name='password' value={formdata.password} onChange={handleChange} />
                    {error.password && <p className='error'>{error.password}</p>}
                </div>
                <button className='login-submit' type='submit'>Submit</button>
            </form>
        </div>
    );
};

