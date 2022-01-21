import React, { useState } from 'react'
import { useNavigate} from 'react-router-dom';
import './Newblog.css'

 
const Newblog = () => {
const navigate = useNavigate()
  const [title, settitle] = useState('');
  const [blog, setblog] = useState('');
  const [img, setimg] = useState('');

  var id
  const PostData = () => {
    console.log('s');
    fetch("users/newblog", {
      method: "post",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        title, blog,img
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
    <div className="write">
      {/* <img
        className="writeImg"
        src="https://images.pexels.com/photos/6685428/pexels-photo-6685428.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500"
        alt=""
      /> */}

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
    </div>
  </div>;
};

export default Newblog;
