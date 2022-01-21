import React, { useState } from 'react'
import { Link } from 'react-router-dom';
import './Newblog.css'

 
const Newblog = () => {

  const [title, settitle] = useState('');
  const [blog, setblog] = useState('');

var ff 
  const PostData = () => {
    fetch("users/newblog", {
      method: "post",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        title, blog
      })
    }).then(response => response.json())
      .then(data => {
        console.log('cvc');
        console.log(data);
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
        <div className="writeFormGroup">
          <textarea
            onChange={((e) => { setblog(e.target.value) })} value={blog}
            name="blog"
            className="writeInput writeText"
            placeholder="Tell your story..."
            type="text"
            autoFocus={true}
          />
        </div>
        <button className="writeSubmit" type="submit" onClick={PostData}>
          <Link to={`/blog/${ff}`}>Publish</Link> </button>
      </div>
    </div>
  </div>;
};

export default Newblog;
