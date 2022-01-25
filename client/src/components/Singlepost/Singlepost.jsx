import React from 'react';
import { Link } from 'react-router-dom'
import './Singlepost.css'


const Singlepost = () => {
  let blog = JSON.parse(localStorage.getItem('myblog'))
 

  return <div>
    <div className="bg-white" >
      <div className="">
        <img
          className="w-screen h-60 object-cover"
          src={blog.img}
          alt="" 
        />
        <h1 className="singlePostTitle">
          {blog.title}
          {/* <div className="singlePostEdit">
            <i className="singlePostIcon far fa-edit"></i>
            <i className="singlePostIcon far fa-trash-alt"></i>
          </div> */}
        </h1>
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
        <p className="singlePostDesc px-2">
          {blog.blog}

        </p>
      </div>
    </div>
  </div>;
};

export default Singlepost;
