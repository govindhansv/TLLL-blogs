import React, { useState } from 'react';
import {useNavigate} from 'react-router-dom'
import './Signup.css'

const Signup = () => {
  const [gmail, setgmail] = useState('');
  const [password, setpassword] = useState('');
  const [username, setusername] = useState('');

  var lerr ='Email Already Used try with new one'
  let loginerror = JSON.parse(localStorage.getItem('lerr'))


  const navigate = useNavigate()
  const PostData = () => {
    localStorage.setItem('lerr',JSON.stringify(''))

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
        }else{
          localStorage.setItem('lerr',JSON.stringify(lerr))
        }
      })
  }

  return <div>

<div className="w-full min-h-screen bg-gray-50 flex flex-col sm:justify-center items-center pt-6 sm:pt-0">
  <div className="w-full sm:max-w-md p-5 mx-auto">
    <h2 className="mb-12 text-center text-5xl font-extrabold">Welcome</h2>
    <h1 className='text-danger'>{loginerror}</h1>
      <div className="mb-4">
        <label className="block mb-1" for="email">Name</label>
        <input id="email" type="text"  value={username} onChange={(e) => { setusername(e.target.value) }} name="name" className="py-2 px-3 border border-gray-300 focus:border-red-300 focus:outline-none focus:ring focus:ring-red-200 focus:ring-opacity-50 rounded-md shadow-sm disabled:bg-gray-100 mt-1 block w-full" />
      </div>
      <div className="mb-4">
        <label className="block mb-1" for="email">Email-Address</label>
        <input id="email" type="text" value={gmail} onChange={(e) => { setgmail(e.target.value) }} name="email" className="py-2 px-3 border border-gray-300 focus:border-red-300 focus:outline-none focus:ring focus:ring-red-200 focus:ring-opacity-50 rounded-md shadow-sm disabled:bg-gray-100 mt-1 block w-full" />
      </div>
      <div className="mb-4">
        <label className="block mb-1" for="password">Password</label>
        <input id="password" type="password" value={password} onChange={(e) => { setpassword(e.target.value) }}  name="password" className="py-2 px-3 border border-gray-300 focus:border-red-300 focus:outline-none focus:ring focus:ring-red-200 focus:ring-opacity-50 rounded-md shadow-sm disabled:bg-gray-100 mt-1 block w-full" />
      </div>
      <div className="mt-6 flex items-center justify-between">
        <div className="flex items-center">
          <input id="remember_me" type="checkbox" className="border border-gray-300 text-red-600 shadow-sm focus:border-red-300 focus:ring focus:ring-red-200 focus:ring-opacity-50" />
          <label for="remember_me" className="ml-2 block text-sm leading-5 text-gray-900"> Remember me </label>
        </div>
        <a href="#" className="text-sm"> Forgot your password? </a>
      </div>
      <div className="mt-6">
        <a href="/"  onClick={() => { PostData() }} className="w-full inline-flex items-center justify-center px-4 py-2 bg-red-600 border border-transparent rounded-md font-semibold capitalize text-white hover:bg-red-700 active:bg-red-700 focus:outline-none focus:border-red-700 focus:ring focus:ring-red-200 disabled:opacity-25 transition">Sign In</a>
      </div>
      <div className="mt-6 text-center">
        <a href="#" className="underline">Sign up for an account</a>
      </div>
  </div>
</div>
  </div>;
};

export default Signup;
