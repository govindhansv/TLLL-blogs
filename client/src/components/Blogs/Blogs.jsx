import React, { useState } from 'react';
import Blogcard from '../Blogcard/Blogcard';
import './Blogs.css'

const Blogs = () => {

  const [blogs, setblogs] = useState([]);

  fetch('users/blogs').then(res => res.json()).then((data) => {
    setblogs(data)
  })


  return (
    
      blogs.map((blog,index) => (
       <Blogcard key={index} blog={blog}/>
      ))
    

  );
};

export default Blogs;
