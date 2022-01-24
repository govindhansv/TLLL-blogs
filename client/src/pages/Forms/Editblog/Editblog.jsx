import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './Editblog.css'

const Editblog = () => {
  let eblog = JSON.parse(localStorage.getItem('myblog'))
  console.log(eblog);

  const [id, setid] = useState(eblog.id);
  const [title, settitle] = useState(eblog.title);
  const [blog, setblog] = useState(eblog.blog);
  const [img, setimg] = useState(eblog.img);

  const navigate = useNavigate()



  const PostData = () => {

    fetch("users/editblog", {
      method: "post",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        title, blog, img, id
      })
    }).then(response => response.json())
      .then(data => {
        console.log(data);

        localStorage.setItem('myblog', JSON.stringify(data.blog))
        navigate('/blog/editedblog')

      })
  }



  return <div>
    <div className="md:px-5 md:my-5">
      <div className=" bg-white rounded-md px-6 py-10  mx-auto">
        <h1 className="text-center text-2xl font-bold text-gray-500 mb-10">EDIT POST</h1>

      <div className="space-y-4">
      <img className="w-screen h-60 object-cover rounded" src={img} alt="" />

              <div>
                <label for="title" className="text-lx block font-medium text-slate-700">Title:</label>
                <input type="text" onChange={((e) => { settitle(e.target.value) })} value={title} placeholder="title" id="title" className="w-full my-2 outline-none py-2  px-2 text-md border-2 rounded-md" />
              </div>
              <div>
                <label for="name" className="text-lx block font-medium text-slate-700">New Img Link</label>
                <input type="text" onChange={((e) => { setimg(e.target.value) })} placeholder="img link" id="name" className="w-full my-2 outline-none py-2  px-2 text-md border-2 rounded-md" />
              </div>
              <div>
                <label for="description" className="text-lx block font-medium text-slate-700">Blog:</label>
                <textarea id="description" onChange={((e) => { setblog(e.target.value) })} value={blog} cols="30" rows="10" placeholder="whrite here.." className="w-full font-medium  p-4 text-gray-600  outline-none rounded-md my-2"></textarea>
              </div>

              <button onClick={() => { PostData() }} className=" px-6 py-2 mx-auto block rounded-md text-lg font-semibold text-indigo-100 bg-indigo-600  ">Save </button>
        </div>
      </div>
    </div>
  </div>;

};

export default Editblog;

