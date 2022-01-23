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
      </figcaption>
    </div>
  </figure>
        //  <div class="w-full xl:w-1/2 px-2">
        //   <div style={{height:"500px"}} class="bg-white rounded-lg overflow-hidden mb-10">
        //     <img
        //       src={blog.img} style={{height:"330px",objectFit:"cover"}}
        //       alt="image"
        //       class="w-full"
        //     />
        //     <div class="p-5 sm:p-9 md:p-7 xl:p-5 text-center">
        //       <h3 style={{height:"80px"}} > 
        //       <button className="link" value={blog._id} onClick={(e) => { FetchBlog(e) }}
        //           class="
        //           font-semibold
        //           text-dark text-xl
        //           sm:text-[22px]
        //           md:text-xl
        //           lg:text-[22px]
        //           xl:text-xl
        //           2xl:text-[22px]
        //           mb-4
        //           block
        //           hover:text-primary
        //           focus:outline-none
        //           "
        //           >
        //           {blog.title}
        //         </button>
        //       </h3>
        //       {/* <p class="text-base text-body-color leading-relaxed xl:mb-1 mb-1 p-2">
        //       Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has Lorem Ipsum has Lorem Ipsum has ha
        //     </p> */}
        //        {blog.author}
        //     </div>
        //   </div>
        // </div>
    )
};

export default Blogcard;