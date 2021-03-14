import { useState } from 'react';

import './auth.scss';
import { Link } from 'react-router-dom';

const Register = () => {
  const [text, setText] = useState({
    firstName: '',
    email: '',
    password: '',
    confirmPassword: '',
  });

  const handleSubmit = (e) => {
    e.preventDefault();

    setText({ firstName: '', email: '', password: '', confirmPassword: '' });
  };

  const handleChange = (e) => {
    const { value, name } = e.target;

    setText({ [name]: value });
  };

  return (
    <section id='auth-section' className='util-mt-3'>
      <div className='util-container'>
        <div className='auth-header'>
          <Link to='/login'>
            <h2 className='inactive'>Login</h2>
          </Link>
          <div className='space'></div>
          <h2>Register</h2>
        </div>
        <div className='form-container'>
          <form onSubmit={handleSubmit}>
            <label htmlFor='first-name' className='util-mt-3'>
              First Name *
            </label>
            <input
              type='text'
              name='first-name'
              id='first-name'
              value={text.firstName}
              onChange={handleChange}
              required
            />
            <label htmlFor='email' className='util-mt-3'>
              Email Address *
            </label>
            <input
              type='email'
              name='email'
              id='email'
              value={text.email}
              onChange={handleChange}
              required
            />
            <label htmlFor='password' className='util-mt-3'>
              Password *
            </label>
            <input
              type='password'
              name='password'
              id='password'
              value={text.password}
              onChange={handleChange}
              required
            />
            <label htmlFor='confirm-password' className='util-mt-3'>
              Confirm Password *
            </label>
            <input
              type='password'
              name='confirm-password'
              id='confirm-password'
              value={text.confirmPassword}
              onChange={handleChange}
              required
            />
            <button type='submit' className='util-mt-4'>
              Register
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Register;
