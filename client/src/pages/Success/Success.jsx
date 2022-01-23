import React from 'react';

function Success() {
  return <div style={{height:"100vh" ,width:"100vw"}}>
       <div id='loginview' className='w-screen  bg-white items-center flex justify-center min-h-screen fixed top-0' hidden>
        You are successfully loggined. 
        <a className='text-green-800 font-bold' href='/'>Explore TLLL</a>
      </div>
  </div>;
}

export default Success;
