import React from 'react';
import './Login.css'

const Login = () => {
    return <div>
      <div className="login">
      <span className="loginTitle">Login</span>
      <form className="loginForm">
        <label>Email</label>
        <input className="loginInput" type="text" placeholder="Enter your email..." />
        <label>Password</label>
        <input className="loginInput" type="password" placeholder="Enter your password..." />
        <button className="btn btn-success m-3">Login</button>
      </form>
    </div>
  </div>;
};

export default Login;
