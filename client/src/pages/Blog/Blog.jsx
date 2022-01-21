import React from 'react';
import Profileblock from '../../components/Profileblock/Profileblock';
import Singlepost from '../../components/Singlepost/Singlepost';
import './Blog.css'

const Blog = ({ data }) => {
  console.log(data);
  return (
    <>
      <div>
        <Singlepost />
        <Profileblock />
      </div>
    </>
  )
};

export default Blog;
