import React, { useEffect, useState } from 'react';
import Blogs from '../../components/Blogs/Blogs';
import './Home.css'
import axios from "axios"

const Home = () => {

  return <div>
    <div className="Home">
      <Blogs blogs={blogs} />
    </div>
  </div>;
};

export default Home;
