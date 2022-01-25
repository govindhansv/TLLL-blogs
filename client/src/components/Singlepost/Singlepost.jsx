import React from 'react';
import { Link } from 'react-router-dom'
import './Singlepost.css'


const Singlepost = () => {
  let blog = JSON.parse(localStorage.getItem('myblog'))


  return <div>
    <div className="bg-white" >
        <img className="w-screen h-80 object-cover" src={blog.img} alt="" />
        <div className="bg-white lg:mx-48 sm:px-8 md:px-8 pb-16 mt-4 lg:pt-4 lg:shadow-md">
          <h1 className="singlePostTitle ">
            {blog.title}
          </h1>
          <div className="px-2">
            <div className="singlePostInfo px-2">
              <span>
                Author:
                <b className="singlePostAuthor">
                  <Link className="link" to="/posts?username=Safak">
                    {blog.author}
                  </Link>
                </b>
              </span>
              <span>1 day ago</span>
            </div>
            <p className="">
              {blog.blog}
            </p>
          </div>
        </div>
      </div>
  </div>;
};

export default Singlepost;
