import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Blogcard from '../../components/Blogcard/Blogcard';
import './Myblogs.css'

const Myblogs = () => {

    const [blogs, setblogs] = useState([]);
    let user = JSON.parse(localStorage.getItem('user'))
    let edit = true
    localStorage.setItem('edit', edit)

    let id = user._id

    fetch('users/myblogs' + id).then(res => res.json()).then((data) => {
        setblogs(data)
    })

    const navigate = useNavigate()


    console.log(blogs);
    return (
        <>
            <section class="pb-2 rounded lg:my-4 lg:mb-10 bg-white">
        <h1 className="text-center text-2xl font-bold text-gray-500 pt-5 mb-5">MY BLOGS</h1>
                <div class="container">
                    <div class="flex flex-wrap -mx-4 lg:p-4"> 

                        {
                            blogs.map((blog, index) => (
                                <>
                                    <Blogcard key={index} blog={blog} />
                                </>
                            ))
                        }
                    </div> 
                </div>
            </section>
        </>
    )
};

export default Myblogs;
