import React, { useState } from 'react'
import { useNavigate} from 'react-router-dom';
import './Newblog.css'

 
const Newblog = () => {

const navigate = useNavigate()

let user = JSON.parse(localStorage.getItem('user'))
console.log(user);

  const [title, settitle] = useState('');
  const [blog, setblog] = useState('');
  const [img, setimg] = useState('https://images.pexels.com/photos/3293148/pexels-photo-3293148.jpeg?cs=srgb&dl=pexels-asad-photo-maldives-3293148.jpg&fm=jpg');
  var userid = user._id
  var author = user.username
  var id
  const PostData = () => {
    console.log('s');
    fetch("users/newblog", {
      method: "post",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        title, blog,img,userid,author
      })
    }).then(response => response.json())
      .then(data => {
        localStorage.setItem('myblog',JSON.stringify(data.blogdata))
        console.log(data.blogdata.title);
        id = data.blogdata.title
        navigate(`/blog/${id}`)
      })
  }

  return <div>
  <div className="lg:px-2 md:my-5">
    <div className=" bg-white rounded-md px-6 py-10  mx-auto">
      <h1 className="text-center text-2xl font-bold text-gray-500 mb-10">ADD POST</h1>
      <div className="space-y-4">
     <img className="w-screen h-60 object-cover rounded" src={img} alt="" />
        <div>
          <label for="title" className="text-lx block font-medium text-slate-700">Title</label>
          <input type="text"  onChange={((e) => { settitle(e.target.value) })} value={title} placeholder="Title.." id="title" className=" w-full my-2 outline-none py-2  px-2 text-md border-2 rounded-md" />
        </div>
        <div>
          <label for="name" className="text-lx block font-medium text-slate-700">Image Link</label>
          <input type="text"  onChange={((e) => { setimg(e.target.value) })}  placeholder="Paste image link.." id="name" className="w-full my-2 outline-none py-2 px-2 text-md border-2 rounded-md" />
        </div>
        <div>
          <label for="description" className="block mb-2 text-lx block font-medium text-slate-700">Blog</label>
          <textarea id="description"  onChange={((e) => { setblog(e.target.value) })} value={blog} cols="30" rows="10" placeholder="write blog here.." className="w-full font-medium border-2 p-4 text-gray-600  outline-none rounded-md"></textarea>
        </div>
        <button  onClick={()=>{PostData()}} className=" px-6 py-2 mx-auto block rounded-md text-lg font-semibold text-indigo-100 bg-indigo-600  ">ADD POST</button>
      </div>
    </div>
  </div>
  </div>;
};

export default Newblog;
