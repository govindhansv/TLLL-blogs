import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router';
import Profileblock from '../../components/Profileblock/Profileblock';
import Singlepost from '../../components/Singlepost/Singlepost';
import './Blog.css'
import axios from 'axios'


 
const Blog = () => {
  let {id} = useParams()
  const [blog, setblog] = useState({});
  useEffect(() => {
    const fetchPosts = async () => {
        const res = await axios.get('/users/blog/' + id )
      setblog(res.data)
    }
    fetchPosts()
  }, [])

  return (
    <>
      <div>
        <Singlepost blog={blog} />
        <Profileblock />
      </div>
    </>
  )
};

export default Blog;
