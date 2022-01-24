import React from 'react';
// import Profileblock from '../../components/Profileblock/Profileblock';
import Singlepost from '../../components/Singlepost/Singlepost';
import './Blog.css'


 
  const Blog = () => {

    return (
      <>
        <div className="lg:my-10 rounded-md">
          <Singlepost />
          {/* <Profileblock /> */}
        </div>
      </>
    )
  }


export default Blog;
