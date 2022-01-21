import React, { useEffect, useState } from 'react';
import Blogs from '../../components/Blogs/Blogs';
import './Home.css'
import axios from "axios"

const Home = () => {

<<<<<<< HEAD
  const [blogs, setblogs] = useState([]);

  useEffect(() => {
    const fetchPosts =  async () => {
      const res =  await axios.get("/users/blogs")
      setblogs(res.data.blogdata)
    }
    fetchPosts()
  }, [])

=======
>>>>>>> 6e14442b632a3097a9c4ef8088dfd7d191fb953e
  return <div>
    <div className="Home">
      <Blogs blogs={blogs} />
    </div>
  </div>;
};

export default Home;
