import React, { useState } from 'react'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'
import './Signup.css'

export const Signup = () => {

  const [signdata, setSigndata] = useState({
    name: '',
    email: '',
    password: '',
    conformpassword: '',
  })
  const Navigate = useNavigate()
  const [error, serError] = useState({})

  const handleChange = (e) => {
    const { name, value } = e.target;
    setSigndata((pre) => ({
      ...pre,
      [name]: value,
    }))
  }
  const validation = () => {
    const validationError = {}

    if (!signdata.name.trim()) {
      validationError.name = 'Name is required';
    }

    // Email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!signdata.email) {
      validationError.email = 'Email is required';
    } else if (!emailRegex.test(signdata.email)) {
      validationError.email = 'Invalid email format';
    }

    // Password validation
    if (!signdata.password) {
      validationError.password = 'Password is required';
    } else if (signdata.password.length < 6) {
      validationError.password = 'Password must be at least 6 characters';
    }

    // Confirm password validation
    if (!signdata.conformpassword) {
      validationError.conformpassword = 'Confirm password is required';
    } else if (signdata.conformpassword !== signdata.password) {
      validationError.conformpassword = 'Passwords do not match';
    }
    return validationError
  }
  const handelformsubmit = async (e) => {
    e.preventDefault()
    const validationError = validation();
    serError(validationError)
    if (Object.keys(validationError).length === 0) {
      try {
        const response = await axios.post('https://66c77724732bf1b79fa6a0c7.mockapi.io/data', signdata);
        console.log('Form data submitted successfully:', response.data);
        Navigate('/login');
        setSigndata({
          name: '',
          email: '',
          password: '',
          conformpassword: '',
        });

      } catch (error) {
        console.error('Error submitting form data:', error);
      }
    }
  }

  return (
    <>
      <div className='signup-container'>
        <form className='signup-form' onSubmit={handelformsubmit}>
          <div className='signup-input'>
            <label className='signup-lable'>Name</label>
            <div>
              <input
                type='text'
                name='name'
                value={signdata.name}
                onChange={handleChange}
              />
            </div>
            {error.name && <p className='error'>{error.name}</p>}
          </div>
          <div className='signup-input'>
            <label className='signup-lable'>Email</label>
            <div>
              <input
                type='email'
                name='email'
                value={signdata.email}
                onChange={handleChange}
              />
            </div>
            {error.email && <p className='error'>{error.email}</p>}
          </div>
          <div className='signup-input'>
            <label className='signup-lable'>Password</label>
            <div>
              <input
                type='password'
                name='password'
                value={signdata.password}
                onChange={handleChange}
              />
            </div>
            {error.password && <p className='error'>{error.password}</p>}
          </div>
          <div className='signup-input'>
            <label className='signup-lable'>Confrim Password</label>
            <div>
              <input
                type='password'
                name='conformpassword'
                value={signdata.conformpassword}
                onChange={handleChange}
              />
            </div>
            {error.conformpassword && <p className='error'>{error.conformpassword}</p>}
          </div>
          <button className='signup-submit' type='submit'>Submit</button>
        </form>
      </div>
    </>
  )
}
