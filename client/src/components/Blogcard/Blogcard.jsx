import React from 'react';
import { Link, useNavigate } from "react-router-dom";
import './Blogcard.css'

<<<<<<< HEAD
const Blogcard = (blogs) => {
    let blog = blogs.blogs
=======
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


>>>>>>> 6e14442b632a3097a9c4ef8088dfd7d191fb953e
    return <div>
        <div className="post">
            <img
                className="postImg"
<<<<<<< HEAD
                src="https://images.pexels.com/photos/1770809/pexels-photo-1770809.jpeg?auto=compress&cs=tinysrgb&dpr=3&h=750&w=1260"
=======
                src={blog.img}
>>>>>>> 6e14442b632a3097a9c4ef8088dfd7d191fb953e
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
<<<<<<< HEAD
                    <Link to={`blog/${blog._id}`} className="link">
                        {blog.title}
                    </Link>
=======
                    <button className="link" value={blog._id} onClick={(e) => { FetchBlog(e) }}>
                        {blog.title}
                    </button>
>>>>>>> 6e14442b632a3097a9c4ef8088dfd7d191fb953e
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
