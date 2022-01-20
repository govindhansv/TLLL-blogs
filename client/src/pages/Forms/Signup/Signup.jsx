import React from 'react';
import './Signup.css'

const Signup = () => {
  return <div>
      <div className="register">
      <span className="registerTitle">Register</span>
      <form className="registerForm">
        <label>Username</label>
        <input className="registerInput" type="text" placeholder="Enter your username..." />
        <label>Email</label>
        <input className="registerInput" type="text" placeholder="Enter your email..." />
        <label>Password</label>
        <input className="registerInput" type="password" placeholder="Enter your password..." />
        <button className="btn btn-success m-3">Register</button>
      </form>
    </div>
  </div>;
};

export default Signup;
