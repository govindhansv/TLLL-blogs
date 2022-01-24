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
    <div className="py-3 px-3 flex flex-col bg-white">
      <div className="settingsWrapper">
        <h1 className="text-center text-2xl font-bold text-gray-500 mb-8 mt-3">EDIT PROFILE</h1>
        <div className="settingsForm">
          <label className="text-lx block font-medium text-slate-700">Profile Picture</label>
          <div className="settingsPP">
            <img className="rounded-full h-24 w-24 object-cover m-5" src={img} alt="profile pic" />
            <input className="w-full my-2 outline-none py-2  px-2 text-md border-2 rounded-md" type="text" value={img} onChange={(e) => { setimg(e.target.value) }} placeholder="profile pic link" name="email" />
          </div>
          <label className="text-lx block font-medium text-slate-700">Username</label>
          <input className="w-full my-2 outline-none py-2  px-2 text-md border-2 rounded-md" type="text" value={username} onChange={(e) => { setusername(e.target.value) }} placeholder="eg: Jhon " name="name" />
          <label className="text-lx block font-medium text-slate-700">Email</label>
          <input className="w-full my-2 outline-none py-2  px-2 text-md border-2 rounded-md" type="email" value={gmail} onChange={(e) => { setgmail(e.target.value) }} placeholder="safak@gmail.com" name="email" />
          <label className="text-lx block font-medium text-slate-700">Password</label>
          <input className="w-full my-2 outline-none py-2  px-2 text-md border-2 rounded-md" type="password" value={password} onChange={(e) => { setpassword(e.target.value) }} placeholder="Type new Password" name="password" />
          <button className="px-6 py-2 my-4 mx-auto block rounded-md text-lg font-semibold text-indigo-100 bg-indigo-600 " onClick={() => { PostData() }}>
            Update
          </button>
        </div>
      </div>
    </div>
  )
}

export default EditProfile;
