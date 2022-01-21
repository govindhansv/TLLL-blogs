import React, { useState } from 'react';
import './Profile.css'

const Profile = () => {

  let user = JSON.parse(localStorage.getItem('user'))
  const [username, setusername] = useState(user.username);
  const [gmail, setgmail] = useState(user.gmail);
  const [password, setpassword] = useState('');
  const [id, setid] = useState(user._id);
  
  // const navigate = useNavigate()
  const PostData = () => {
    
    fetch("users/update", {
      method: "post",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        username,
        gmail,
        password,id
      })
    }).then(response => response.json())
      .then(data => {
        console.log(data);
        // if (data.loggedIN) {
        //   let user = data.user
        //   localStorage.setItem('user',JSON.stringify(user))
        //   navigate('/')
        // }
      })
  }



  return <div>
    <div className="settings">
      <div className="settingsWrapper">
        <div className="settingsTitle">
          <span className="settingsTitleUpdate">Update Your Account</span>
          <span className="settingsTitleDelete">Delete Account</span>
        </div>
        <div className="settingsForm">
          <label>Profile Picture</label>
          <div className="settingsPP">
            <img
              src="https://images.pexels.com/photos/6685428/pexels-photo-6685428.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500"
              alt=""
            />
            <label htmlFor="fileInput">
              <i className="settingsPPIcon far fa-user-circle"></i>{" "}
            </label>
            <input
              id="fileInput"
              type="file"
              style={{ display: "none" }}
              className="settingsPPInput"
            />
          </div>
          <label>Username</label>
          <input type="text" value={username} onChange={(e) => { setusername(e.target.value) }} placeholder="eg: Jhon " name="name" />
          <label>Email</label>
          <input type="email" value={gmail}  onChange={(e) => { setgmail(e.target.value) }} placeholder="safak@gmail.com" name="email" />
          <label>Password</label>
          <input type="password" value={password} onChange={(e) => { setpassword(e.target.value) }} placeholder="Type new Password" name="password" />
          <button className="settingsSubmitButton" onClick={()=>{PostData()}}>
            Update
          </button>
          
        </div>
      </div>
    </div>
  </div>;
};

export default Profile;
