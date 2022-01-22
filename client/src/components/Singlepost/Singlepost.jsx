import React from 'react';
import { Link } from 'react-router-dom'
import './Singlepost.css'


const Singlepost = () => {
  let blog = JSON.parse(localStorage.getItem('myblog'))
 

  return <div>
    <div className="singlePost container">
      <div className="singlePostWrapper">
        <img
          className="singlePostImg"
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
        <div className="singlePostInfo">
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
        <p className="singlePostDesc">
          {blog.blog}

        </p>
      </div>
    </div>
  </div>;
};

export default Singlepost;
