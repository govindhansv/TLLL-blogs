import React, { useState } from 'react';
import './Login.css'

const Login = () => {

  const [gmail, setgmail] = useState('');
  const [password, setpassword] = useState('');

  const PostData = ()=>{
    console.log(gmail,password);
  }

    return <div>
      <div className="login">
      <span className="loginTitle">Login</span>
      <form className="loginForm">
        <label>Email</label>  
        <input className="loginInput" value={gmail} onChange={(e)=>{setgmail(e.target.value)}}  type="text" placeholder="Enter your email..." />
        <label>Password</label>
        <input className="loginInput" value={password} onChange={(e)=>{setpassword(e.target.value)}}   type="password" placeholder="Enter your password..." />
        <button className="btn btn-success m-3" onClick={()=>{PostData()}}   >Login</button>
      </form>
    </div>
  </div>;
};

export default Login;
