import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const Profile = () => {

  let user = JSON.parse(localStorage.getItem('user'))
  console.log(user);
  const navigate = useNavigate()


  return <div>
      <section class="relative block h-500-px">
        <img className="w-full h-80 object-cover" src="https://images.unsplash.com/photo-1642888374476-0c7f99a644ca?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1375&q=80" alt="" />
      </section>

      <section class="relative sm:px-12 md:px-16 lg:px-32 mx-6">
        <div class=" flex flex-col min-w-0 break-words bg-white w-full shadow-xl rounded-lg -mt-80">

          <div class=" w-full flex justify-center h-24 my-5">
            <img alt="" src={user.img} class="object-cover shadow-xl rounded-full border-none absolute h-24 w-24" />
          </div>
          
          <div class="w-full text-center sm:mt-0">
            <button className=" bg-pink-500 active:bg-pink-600 uppercase text-white font-bold hover:shadow-md shadow text-xs px-2 py-2 rounded outline-none focus:outline-none sm:mr-2 mb-1 ease-linear transition-all duration-150" onClick={() => { navigate('/edit-profile') }} >Edit Profile</button>
            <button className=" bg-pink-500 mx-2 active:bg-pink-600 uppercase text-white font-bold hover:shadow-md shadow text-xs px-3 py-2 rounded outline-none focus:outline-none sm:mr-2 mb-1 ease-linear transition-all duration-150" onClick={() => { navigate('/myblogs') }} >My blogs</button>
            <button className=" bg-pink-500 active:bg-pink-600 uppercase text-white font-bold hover:shadow-md shadow text-xs px-3 py-2 rounded outline-none focus:outline-none sm:mr-2 mb-1 ease-linear transition-all duration-150" onClick={() => { navigate('/newblog') }} >New Blog</button>
          </div>

          <div class="text-center mt-2">
            <h3 class="text-4xl font-semibold leading-normal mb-2 text-blueGray-700 mb-2">
              {user.username}
            </h3>
            <div class="text-sm leading-normal mt-0 mb-2 text-blueGray-400 font-bold lowercase">
              {user.gmail}
            </div>
          </div>
        </div>
      </section>
  </div>;
};

export default Profile;
