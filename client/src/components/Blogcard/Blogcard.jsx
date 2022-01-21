import React from 'react';
import { Link } from "react-router-dom";
import './Blogcard.css'

const Blogcard = (blogs) => {
    let blog = blogs.blogs
    return <div>
        <div className="post">
            <img
                className="postImg"
                src="https://images.pexels.com/photos/1770809/pexels-photo-1770809.jpeg?auto=compress&cs=tinysrgb&dpr=3&h=750&w=1260"
                alt=""
            />
            <div className="postInfo">
                <div className="postCats">
                    <span className="postCat">
                        <Link className="link" to="/posts?cat=Music">
                            Music
                        </Link>
                    </span>
                    <span className="postCat">
                        <Link className="link" to="/posts?cat=Music">
                            Life
                        </Link>
                    </span>
                </div>
                <span className="postTitle">
                    <Link to={`blog/${blog._id}`} className="link">
                        {blog.title}
                    </Link>
                </span>
                <hr />
                <span className="postDate">1 hour ago</span>
            </div>
            <p className="postDesc">
                {blog.blog}
            </p>
        </div>
    </div>;
};

export default Blogcard;
