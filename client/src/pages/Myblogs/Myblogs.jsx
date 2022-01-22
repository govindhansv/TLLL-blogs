import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Blogcard from '../../components/Blogcard/Blogcard';
import './Myblogs.css'

const Myblogs = () => {

    const [blogs, setblogs] = useState([]);
    let user = JSON.parse(localStorage.getItem('user'))

    let id = user._id
    
    fetch('users/myblogs' + id).then(res => res.json()).then((data) => {
        setblogs(data)
    })

    const navigate = useNavigate()
    const FetchBlog = (e) => {
        let blog = {
            id: e.target.value,
            blog: e.target.getAttribute("blog"),
            title: e.target.getAttribute("title"),
            img: e.target.getAttribute("img")
        }
     
                localStorage.setItem('myblog', JSON.stringify(blog))
                navigate(`/editblog`)
            }
    
    console.log(blogs);
    return <div className="m-5">
        {
            blogs.map((blog, index) => (
                <div key={index} style={{ display: 'flex' }}>
                    <Blogcard blog={blog} />
                    <button className="link" value={blog._id} img={blog.img} title={blog.title} blog={blog.blog} onClick={(e) => { FetchBlog(e) }}>edit
                    </button>                
                    </div>
            ))
        }
    </div>;
};

export default Myblogs;
