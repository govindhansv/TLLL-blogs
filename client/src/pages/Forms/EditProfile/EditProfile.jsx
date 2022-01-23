import React, { useState } from 'react';
import { useNavigate } from 'react-router';


function EditProfile() {

  let user = JSON.parse(localStorage.getItem('user'))
  const [username, setusername] = useState(user.username);
  const [gmail, setgmail] = useState(user.gmail);
  const [password, setpassword] = useState('');
  const [img, setimg] = useState(user.img);
  const [id, setid] = useState(user._id);

  const navigate = useNavigate()


  const PostData = () => {


    fetch("users/update", {
      method: "post",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        username,
        gmail,
        password, id,img
      })
    }).then(response => response.json())
      .then(data => {
        console.log(data);
        let user = JSON.parse(localStorage.getItem('user'))
        console.log(user);
        user.username = username
        user.gmail = gmail
        user.password = password
        user.img = img
        localStorage.setItem('user', JSON.stringify(user))
        console.log(JSON.parse(localStorage.getItem('user')));
        navigate('/profile')

      })
  }


  return (
    <div className="settings">
      <div className="settingsWrapper">
        <div className="settingsTitle">
          <span className="settingsTitleUpdate">Update Your Account</span>
          <button className="settingsTitleDelete">Delete Account</button>
        </div>
        <div className="settingsForm">
          <label>Profile Picture</label>
          <div className="settingsPP">
            <img
              src={img}
              alt=""
            />
            <input type="text" value={img} onChange={(e) => { setimg(e.target.value) }} placeholder="profile pic link" name="email" />

            {/* <label htmlFor="fileInput">
              <i className="settingsPPIcon far fa-user-circle"></i>{" "}
            </label> */}
            {/* <input
              id="fileInput"
              type="file"
              style={{ display: "none" }}
              className="settingsPPInput"
            /> */}
          </div>
          <label>Username</label>
          <input type="text" value={username} onChange={(e) => { setusername(e.target.value) }} placeholder="eg: Jhon " name="name" />
          <label>Email</label>
          <input type="email" value={gmail} onChange={(e) => { setgmail(e.target.value) }} placeholder="safak@gmail.com" name="email" />
          <label>Password</label>
          <input type="password" value={password} onChange={(e) => { setpassword(e.target.value) }} placeholder="Type new Password" name="password" />
          <button className="settingsSubmitButton" onClick={() => { PostData() }}>
            Update
          </button>

        </div>
      </div>
    </div>
  )
}

export default EditProfile;
