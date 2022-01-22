import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './Login.css'

const Login = () => {

  const [gmail, setgmail] = useState('');
  const [password, setpassword] = useState('');

  var err = 'Incorrect Gmail or Password'
  let error = JSON.parse(localStorage.getItem('err'))


  const navigate = useNavigate()
  const PostData = () => {
    localStorage.setItem('err',JSON.stringify(''))

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
        }else{
          localStorage.setItem('err',JSON.stringify(err))
          navigate('/login')

        }

      })
  }

  return <div>
<div class="w-full min-h-screen bg-gray-50 flex flex-col sm:justify-center items-center pt-6 sm:pt-0">
  <div class="w-full sm:max-w-md p-5 mx-auto">
    <h2 class="mb-12 text-center text-5xl font-extrabold">Login</h2>
    <h1 className='text-danger'>  {error}</h1>
      <div class="mb-4">
        <label class="block mb-1" for="email">Email-Address</label>
        <input id="email" type="text" value={gmail} onChange={(e) => { setgmail(e.target.value) }} name="email" class="py-2 px-3 border border-gray-300 focus:border-red-300 focus:outline-none focus:ring focus:ring-red-200 focus:ring-opacity-50 rounded-md shadow-sm disabled:bg-gray-100 mt-1 block w-full" />
      </div>
      <div class="mb-4">
        <label class="block mb-1" for="password">Password</label>
        <input id="password" type="password" value={password} onChange={(e) => { setpassword(e.target.value) }}  name="password" class="py-2 px-3 border border-gray-300 focus:border-red-300 focus:outline-none focus:ring focus:ring-red-200 focus:ring-opacity-50 rounded-md shadow-sm disabled:bg-gray-100 mt-1 block w-full" />
      </div>
      <div class="mt-6 flex items-center justify-between">
        <div class="flex items-center">
          <input id="remember_me" type="checkbox" class="border border-gray-300 text-red-600 shadow-sm focus:border-red-300 focus:ring focus:ring-red-200 focus:ring-opacity-50" />
          <label for="remember_me" class="ml-2 block text-sm leading-5 text-gray-900"> Remember me </label>
        </div>
        <a href="#" class="text-sm"> Forgot your password? </a>
      </div>
      <div class="mt-6">
        <button onClick={() => { PostData() }}  class="w-full inline-flex items-center justify-center px-4 py-2 bg-red-600 border border-transparent rounded-md font-semibold capitalize text-white hover:bg-red-700 active:bg-red-700 focus:outline-none focus:border-red-700 focus:ring focus:ring-red-200 disabled:opacity-25 transition">Sign In</button>
      </div>
      <div class="mt-6 text-center">
        <button  class="underline">Sign up for an account</button>
      </div>
  </div>
</div>
    {/* <div className="login">
      <span className="loginTitle">Login</span>
      <div className="loginForm">
        <label>Email</label>
        <input className="loginInput" value={gmail} onChange={(e) => { setgmail(e.target.value) }} type="text" placeholder="Enter your email..." />
        <label>Password</label>
        <input className="loginInput" value={password} onChange={(e) => { setpassword(e.target.value) }} type="password" placeholder="Enter your password..." />
        <button className="btn btn-success m-3" onClick={() => { PostData() }}   >Login</button>
      </div>
    </div> */}
  </div>;
};

export default Login;
