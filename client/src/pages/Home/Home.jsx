import React, { useEffect, useState } from 'react';
import Blogs from '../../components/Blogs/Blogs';
import './Home.css'
import axios from "axios"

const Home = () => {

  const [blogs, setblogs] = useState([]);

  useEffect(() => {
    const fetchPosts =  async () => {
      const res =  await axios.get("/users/blogs")
      setblogs(res.data.blogdata)
    }
    fetchPosts()
  }, [])

  return <div>
    <div className="Home">
      <Blogs blogs={blogs} />
    </div>
  </div>;
};

export default Home;
