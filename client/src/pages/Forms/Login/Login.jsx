import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './Login.css'

const Login = () => {

  const [gmail, setgmail] = useState('');
  const [password, setpassword] = useState('');

    

  const navigate = useNavigate()
  const PostData = () => {
    console.log(gmail, password);
    fetch("users/login", {
      method: "post",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        gmail,
        password
      })
    }).then(response => response.json())
      .then(data => {
        if (data.loggedIN) {
          let user = data.user
          localStorage.setItem('user',JSON.stringify(user))
          navigate('/')
        }
      })
  }

  return <div>
    <div className="login">
      <span className="loginTitle">Login</span>
      <div className="loginForm">
        <label>Email</label>
        <input className="loginInput" value={gmail} onChange={(e) => { setgmail(e.target.value) }} type="text" placeholder="Enter your email..." />
        <label>Password</label>
        <input className="loginInput" value={password} onChange={(e) => { setpassword(e.target.value) }} type="password" placeholder="Enter your password..." />
        <button className="btn btn-success m-3" onClick={() => { PostData() }}   >Login</button>
      </div>
    </div>
  </div>;
};

export default Login;
