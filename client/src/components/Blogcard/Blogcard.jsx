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
    <div class="w-full md:w-1/2 xl:w-1/3 px-4">
      <div style={{ height: "490px" }} class="bg-white rounded-lg overflow-hidden mb-10">
        <img
          src={blog.img} style={{ height: "250px", objectFit: "cover" }}
          alt="image"
          class="w-full"
        />
        <div class="p-8 sm:p-9 md:p-7 xl:p-9 text-center">
          <h3 style={{ height: "80px" }} >      {option}

            <button className="link" value={blog._id} onClick={(e) => { FetchBlog(e) }}
              class="
                  font-semibold
                  text-dark text-xl
                  sm:text-[22px]
                  md:text-xl
                  lg:text-[22px]
                  xl:text-xl
                  2xl:text-[22px]
                  mb-4
                  block
                  hover:text-primary
                  "
            >

              {blog.title}
            </button>
          </h3>
          <p class="text-base text-body-color leading-relaxed mb-7">
            {blog.blog}
          </p>
          {blog.author}

        </div>
      </div>
    </div>
  )
};

export default Blogcard;

        // <div className="post">
        //     <img
        //         className="postImg"
        //         src={blog.img}
        //         alt=""
        //     />
        //     <div className="postInfo">
        //         <div className="postCats">
        //             <span className="postCat">
        //                 <Link className="link" to="/posts?cat=Music">
        //                     {blog.title}
        //                 </Link>
        //             </span>
        //             <span className="postCat">
        //                 <Link className="link" to={`/blog/${blog._id}`}>
        //                     Life
        //                 </Link>
        //             </span>
        //         </div>
        //         <span className="postTitle">
        //             <button className="link" value={blog._id} onClick={(e) => { FetchBlog(e) }}>
        //                 {blog.title}
        //             </button>
        //         </span>
        //         <hr />
        //         <span className="postDate">1 hour ago</span>
        //     </div>
        //     <p className="postDesc">
        //         {blog.blog}
        //     </p>
        //     {blog.author}
        // </div>