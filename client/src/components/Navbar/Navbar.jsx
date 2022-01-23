import React, { useState } from 'react';
import { Link } from 'react-router-dom'
import './Navbar.css'

const Navbar = () => {


    const [value, setValue] = useState();
    console.log(value);

    const refresh = () => {
        // it re-renders the component
        setValue({});
    }
    console.log(value);

    const Logout = () => {
        localStorage.clear();
        refresh()
    }
    var logout
    var profile
    var myblogs
    var newblog
    let user = JSON.parse(localStorage.getItem('user'))
    var navbar

    if (user) {
        logout = <a href='/' class="text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium" onClick={() => { Logout() }}>logout</a>
        profile = <>
            <Link to="/profile"><img class="h-8 w-8 rounded-full" src={user.img} alt="" /></Link>
            <Link class="hidden sm:block text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium ml-2" to="/profile">{user.username} </Link>
        </>
        myblogs = <Link class="text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium" to="/myblogs">My Blogs </Link>
        newblog = <Link class="text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium" to="/newblog">New + </Link>

        navbar = <>
                        <Link to="/myblogs" class="text-gray-300 hover:bg-gray-700 hover:text-white block px-3 py-2 rounded-md text-base font-medium">Myblogs</Link>
                        <Link to="/newblogs" class="text-gray-300 hover:bg-gray-700 hover:text-white block px-3 py-2 rounded-md text-base font-medium">New +</Link>
         <Link to="/logout" class="text-gray-300 hover:bg-gray-700 hover:text-white block px-3 py-2 rounded-md text-base font-medium">Logout</Link>
                        </>
    }
    if (!user) {
        var login = <>
            <Link class="bg-green-600 text-white hover:bg-green-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium" to="/signup">SignUp</Link>
        <Link class="bg-blue-600 hover:bg-blue-700 text-white px-3 py-2 rounded-md text-sm font-medium mx-2 lg:py-2 lg:-mr-4" to="/login">Login</Link>
            </>
}

    return (
        <div>
            <nav class="bg-black w-full fixed top-0">
                <div class="max-w-7xl mx-auto px-2 sm:px-6 lg:px-8">
                    <div class="relative flex items-center justify-between h-16">

                        <div class="absolute inset-y-0 left-0 flex items-center sm:hidden">
                            <button type="button" class="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-white focus:outline-none" aria-controls="mobile-menu" aria-expanded="false">
                                <span class="sr-only">Open main menu</span>
                                <div >
                                    <svg class="block h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16" />
                                    </svg>
                                    <svg class="hidden h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" />
                                    </svg>
                                </div>
                            </button>
                        </div>

                        <div class="ml-8 sm:ml-0 flex-1 flex items-start sm:items-center sm:items-stretch sm:justify-start">
                            <Link to="/" class="flex">
                                <img class="hidden sm:block h-10 w-auto" src=".././logo.jpg" alt="Workflow" />
                                <img class="block sm:hidden h-8 w-auto" src=".././logo.jpg" alt="Workflow" />
                                <h1 className="text-white font-bold font-serif tracking-widest mt-1 sm:mt-2 text-lg">TLLL</h1>
                            </Link>
                            <div class="hidden sm:block sm:ml-6">
                                <div class="flex space-x-4 sm:mt-1">
                                    <Link to="/" class="text-white px-3 py-2 rounded-md text-sm font-medium" aria-current="page">Home</Link>
                                    {myblogs}
                                    {newblog}
                                    {logout}
                                </div>
                            </div>
                        </div>

                        <div class="absolute inset-y-0 right-0 flex items-center">
                            <div class="ml-3 relative">
                                <div>
                                    <button type="button" class="flex text-sm rounded-full focus:outline-none" id="user-menu-button" aria-expanded="false" aria-haspopup="true">
                                        {login}
                                        {profile}
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                {/* <div class="sm:hidden" id="mobile-menu">
                    <div class="px-2 pt-2 pb-3 space-y-1">
                    <Link to="/" class="bg-gray-900 text-white block px-3 py-2 rounded-md text-base font-medium" aria-current="page">Home</Link>

                       {navbar}
                       
                    </div>
                </div> */}
            </nav>

            {/* <nav>
                <div className="nav-wrapper  white" style={{color:'black'}}>
                    <Link to="/" className="left " style={{paddingLeft:"20px"}}><b> Live and Let Live</b></Link>
                    <ul id="nav-mobile" className="right ml-3">
                        <li><Link to="/">Home</Link></li>
                        {login}
                        {myblogs}
                        {newblog}
                        {profile}
                        {logout}
                    </ul>
                </div>
            </nav> */}
        </div>
    );
};

export default Navbar;
