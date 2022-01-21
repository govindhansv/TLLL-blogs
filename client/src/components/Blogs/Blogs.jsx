import React, { useState } from 'react';
import Blogcard from '../Blogcard/Blogcard';
import './Blogs.css'

<<<<<<< HEAD
const Blogs = ({ blogs }) => {
  return <div className="m-5">
    <div style={{ display: 'flex' }}>
      
      {blogs.map((blogs,index) => (
        <div key={index}>
          <Blogcard blogs={blogs}/>
        </div>
      ))}
      
    

    </div>
=======
const Blogs = () => {

  const [blogs, setblogs] = useState([]);

  fetch('users/blogs').then(res => res.json()).then((data)=>{
    setblogs(data)
  })

  return <div className="m-5">
    {
 blogs.map((blog, index) => (        
    <div key={index} style={{ display: 'flex' }}>
      <Blogcard blog={blog}  />
     </div>
 ))
    }
   
>>>>>>> 6e14442b632a3097a9c4ef8088dfd7d191fb953e
  </div>;
};

export default Blogs;
