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
            <section class="shadow-xl pb-2 pt-2 bg-[#F3F4F6] lg:mb-10">
                <div class="container">
                    <div class="flex flex-wrap -mx-4">

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
