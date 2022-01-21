import React, { useState } from 'react';
import Blogcard from '../Blogcard/Blogcard';
import './Blogs.css'

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
   
  </div>;
};

export default Blogs;
