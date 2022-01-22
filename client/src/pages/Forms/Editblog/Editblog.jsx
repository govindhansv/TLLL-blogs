import React,{useState} from 'react';
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
        title,blog,img,id
      })
    }).then(response => response.json())
      .then(data => {
        console.log(data);
    
        localStorage.setItem('myblog',JSON.stringify(data.blog))
        navigate('/blog/editedblog')
        
      })
  }



    return  <div>
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
    </div>
};

export default Editblog;
