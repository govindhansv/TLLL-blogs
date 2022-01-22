import React from 'react';
import { Link, useNavigate } from "react-router-dom";
import './Blogcard.css'

const Blogcard = ({ blog }) => {

    const navigate = useNavigate()
    const FetchBlog = (e) => {
        let id = e.target.value
        console.log(e.target.value);
        fetch("users/blog", {
            method: "post",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({
                id
            })
        }).then(response => response.json())
            .then(data => {
                localStorage.setItem('myblog', JSON.stringify(data.blogdata))
                id = data.blogdata.title
                navigate(`/blog/${id}`)
            })
    }


    return <div>
        <div className="post">
            <img
                className="postImg"
                src={blog.img}
                alt=""
            />
            <div className="postInfo">
                <div className="postCats">
                    <span className="postCat">
                        <Link className="link" to="/posts?cat=Music">
                            {blog.title}
                        </Link>
                    </span>
                    <span className="postCat">
                        <Link className="link" to={`/blog/${blog._id}`}>
                            Life
                        </Link>
                    </span>
                </div>
                <span className="postTitle">
                    <button className="link" value={blog._id} onClick={(e) => { FetchBlog(e) }}>
                        {blog.title}
                    </button>
                </span>
                <hr />
                <span className="postDate">1 hour ago</span>
            </div>
            <p className="postDesc">
                {blog.blog}
            </p>
            {blog.author}
        </div>
        
    </div>;
};

export default Blogcard;
