import React, { useState } from 'react'
import { useNavigate} from 'react-router-dom';
import './Newblog.css'

 
const Newblog = () => {

// const navigate = useNavigate()

// let user = JSON.parse(localStorage.getItem('user'))
// console.log(user);

//   const [title, settitle] = useState('');
//   const [blog, setblog] = useState('');
//   const [img, setimg] = useState('');
//   var userid = user._id
//   var author = user.username
//   var id
//   const PostData = () => {
//     console.log('s');
//     fetch("users/newblog", {
//       method: "post",
//       headers: {
//         "Content-Type": "application/json"
//       },
//       body: JSON.stringify({
//         title, blog,img,userid,author
//       })
//     }).then(response => response.json())
//       .then(data => {
//         localStorage.setItem('myblog',JSON.stringify(data.blogdata))
//         console.log(data.blogdata.title);
//         id = data.blogdata.title
//         navigate(`/blog/${id}`)
//       })
//   }

  return <div>
    
<form>
  <div className="bg-indigo-50 min-h-screen md:px-20 pt-6">
    <div className=" bg-white rounded-md px-6 py-10 max-w-2xl mx-auto">
      <h1 className="text-center text-2xl font-bold text-gray-500 mb-10">ADD POST</h1>
      <div className="space-y-4">
        <div>
          <label for="title" className="text-lx font-serif">Title:</label>
          <input type="text" placeholder="title" id="title" className="ml-2 outline-none py-1 px-2 text-md border-2 rounded-md" />
        </div>
        <div>
          <label for="description" className="block mb-2 text-lg font-serif">Description:</label>
          <textarea id="description" cols="30" rows="10" placeholder="whrite here.." className="w-full font-serif  p-4 text-gray-600 bg-indigo-50 outline-none rounded-md"></textarea>
        </div>
        <div>
          <label for="name" className="text-lx font-serif">Name:</label>
          <input type="text" placeholder="name" id="name" className="ml-2 outline-none py-1 px-2 text-md border-2 rounded-md" />
        </div>
        <div>
          <label for="email" className="text-lx font-serif">Email:</label>
          <input type="text" placeholder="name" id="email" className="ml-2 outline-none py-1 px-2 text-md border-2 rounded-md" />
        </div>
        <button className=" px-6 py-2 mx-auto block rounded-md text-lg font-semibold text-indigo-100 bg-indigo-600  ">ADD POST</button>
      </div>
    </div>
  </div>
</form>
    {/* <div className="write">
      <img
        className="writeImg"
        src="https://images.pexels.com/photos/6685428/pexels-photo-6685428.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500"
        alt=""
      />

      <div className="writeForm">
        <div className="writeFormGroup">

          <label htmlFor="fileInput">
            <i className="writeIcon fas fa-plus"></i>
          </label>
          <input onChange={((e) => { settitle(e.target.value) })} value={title}
            name="title"
            className="writeInput"
            placeholder="Title"
            type="text"
            autoFocus={true}
          />
            </div>
            
            <div>

          <input onChange={((e) => { setimg(e.target.value) })} value={img}
            name="img"
            className="writeInput"
            placeholder="image link"
            type="text"
            />
            </div>

        <div className="writeFormGroup">
          <textarea
            onChange={((e) => { setblog(e.target.value) })} value={blog}
            name="blog"
            className="writeInput writeText"
            placeholder="Tell your story..."
            type="text"
          />
        </div>
        <button className="writeSubmit"  onClick={()=>{PostData()}}> Publish </button>
      </div>
    </div> */}
  </div>;
};

export default Newblog;
