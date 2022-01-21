import React from 'react';
import Blogcard from '../Blogcard/Blogcard';
import './Blogs.css'

const Blogs = ({ blogs }) => {
  return <div className="m-5">
    <div style={{ display: 'flex' }}>
      
      {blogs.map((blogs,index) => (
        <div key={index}>
          <Blogcard blogs={blogs}/>
        </div>
      ))}
      
    

    </div>
  </div>;
};

export default Blogs;
