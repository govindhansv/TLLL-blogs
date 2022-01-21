import React, { useState } from 'react';
import {useNavigate} from 'react-router-dom'
import './Signup.css'

const Signup = () => {
  const [gmail, setgmail] = useState('');
  const [password, setpassword] = useState('');
  const [username, setusername] = useState('');

  const navigate = useNavigate()
  const PostData = () => {
    console.log(gmail, password, username);
    fetch("users/signup", {  
      method: "post",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        username,
        gmail,
        password
      })
    }).then(response => response.json())
      .then(data => {
        console.log(data);
        if (data.loggedIN) {
          let user = data.user
          localStorage.setItem('user',JSON.stringify(user))          
          navigate('/')
        }
      })
  }

  return <div>
    <div className="register">
      <span className="registerTitle">Register</span>
      <div className="registerForm">
        <label>Username</label>
        <input className="registerInput" value={username} onChange={(e) => { setusername(e.target.value) }} type="text" placeholder="Enter your username..." />
        <label>Email</label>
        <input className="registerInput" type="email" value={gmail} onChange={(e) => { setgmail(e.target.value) }} placeholder="Enter your email..." />
        <label>Password</label>
        <input className="registerInput" type="password" value={password} onChange={(e) => { setpassword(e.target.value) }} placeholder="Enter your password..." />
        <button className="btn btn-success m-3" onClick={() => { PostData() }}>Register</button>
      </div>
    </div>
  </div>;
};

export default Signup;
