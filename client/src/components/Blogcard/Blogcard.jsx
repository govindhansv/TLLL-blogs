import React from 'react';
import { Link, useNavigate } from "react-router-dom";
import './Blogcard.css'

const Blogcard = ({ blog }) => {

  let edit = JSON.parse(localStorage.getItem('edit'))
  var option
  if (edit) {
    option =<>
     <button className="link" value={blog._id} img={blog.img} title={blog.title} blog={blog.blog} onClick={(e) => { EditBlog(e) }}>edit</button>
     <button className="link" value={blog._id} onClick={(e) => { Delete(e) }}>Delete</button>
    </>
  }

  const Delete = (e) => {
      let id = e.target.value
    
    fetch('users/blogs/delete' + id).then(res => res.json()).then((data) => {
      console.log(data);
      navigate(`/myblogs`)
    })
  }

  const EditBlog = (e) => {
    let blog = {
      id: e.target.value,
      blog: e.target.getAttribute("blog"),
      title: e.target.getAttribute("title"),
      img: e.target.getAttribute("img")
    }

    localStorage.setItem('myblog', JSON.stringify(blog))
    navigate(`/editblog`)
  }

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

  return (
    <figure className="md:flex bg-slate-100 rounded-xl p-8 md:p-0 dark:bg-slate-800 m-4 shadow-xl w-full">
    <img className="w-24 h-24 md:w-48 md:h-auto md:rounded-none rounded-full mx-auto object-cover" src={blog.img} alt="" width="384" height="512"/>
    <div className="pt-6 md:p-8 text-center md:text-left space-y-4 w-full">
      <blockquote>
        <button className=" text-lg font-medium hover:underline underline-offset-2 cursor-pointer focus:outline-none" value={blog._id} onClick={(e) => { FetchBlog(e) }}>
         {blog.title}
        </button>
      </blockquote>
      <figcaption className="font-medium">
        <div className="text-sky-500 dark:text-sky-400 focus:outline-none hover:underline underline-offset-2">
          {blog.author}
          </div>
          {option}
      </figcaption>
    </div>
  </figure>
    )
};

export default Blogcard;