import React from 'react';
import { Link, useNavigate } from "react-router-dom";
import './Blogcard.css'

const Blogcard = ({ blog }) => {

  let edit = JSON.parse(localStorage.getItem('edit'))
  var option
  if (edit) {
    option = <>
      <div className="flex">
        <button className="block p-1 px-2 text-white rounded text-base font-medium bg-indigo-500 hover:bg-indigo-600" value={blog._id} img={blog.img} title={blog.title} blog={blog.blog} onClick={(e) => { EditBlog(e) }}>edit</button>
        <button className="block p-1 px-2 text-white ml-2 rounded text-base font-medium bg-red-500 hover:bg-red-600" value={blog._id} onClick={(e) => { Delete(e) }}>Delete</button>
      </div>
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
    <figure className="flex bg-slate-100 rounded-xl md:p-0 dark:bg-slate-800 m-4 shadow-xl w-full">
      <img className="w-36 h-auto md:w-48 md:h-auto md:rounded-none rounded mx-auto object-cover" src={blog.img} alt="" width="384" height="512" />
      <div className="pt-6 p-8
     text-left space-y-4 w-full">
        <blockquote>
          <button className="sm:text-[22px] text-lg font-medium hover:underline underline-offset-2 cursor-pointer focus:outline-none" value={blog._id} onClick={(e) => { FetchBlog(e) }}>
            {blog.title}
          </button>
        </blockquote>
        {option}
      </div>
    </figure>
  )
};

export default Blogcard;