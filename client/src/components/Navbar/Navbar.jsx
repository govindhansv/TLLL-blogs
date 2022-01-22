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

    if (user) {
        logout = <a href='/' className='btn btn-danger-outline' onClick={() => { Logout() }}>logout</a>
        profile = <li><Link to="/profile">{user.username} </Link></li>
        myblogs = <li><Link to="/myblogs">My Blogs </Link></li>
        newblog = <li><Link to="/newblog">New + </Link></li>

    }
    if (!user) {
        var login = <><li><Link to="/login">Login</Link></li>
            <li><Link to="/signup">Signup</Link></li></>
    }




    return (
        <div>
            <nav class="bg-gray-800">
                <div class="max-w-7xl mx-auto px-2 sm:px-6 lg:px-8">
                    <div class="relative flex items-center justify-between h-16">

                        <div class="absolute inset-y-0 left-0 flex items-center sm:hidden">
                            <button type="button" class="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-white hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white" aria-controls="mobile-menu" aria-expanded="false">
                                <span class="sr-only">Open main menu</span>
                                <svg class="block h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16" />
                                </svg>
                                <svg class="hidden h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" />
                                </svg>
                            </button>
                        </div>

                        <div class="flex-1 flex items-center justify-center sm:items-stretch sm:justify-start">
                            <div class="flex-shrink-0 flex items-center">
                                <img class="block lg:hidden h-8 w-auto" src="https://tailwindui.com/img/logos/workflow-mark-indigo-500.svg" alt="Workflow" />
                                <img class="hidden lg:block h-8 w-auto" src="https://tailwindui.com/img/logos/workflow-logo-indigo-500-mark-white-text.svg" alt="Workflow" />
                            </div>
                            <div class="hidden sm:block sm:ml-6">
                                <div class="flex space-x-4">
                                    <Link to="/" class="bg-gray-900 text-white px-3 py-2 rounded-md text-sm font-medium" aria-current="page">Dashboard</Link>
                                    <Link to="/" class="text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium">Team</Link>
                                    <Link to="/login" class="text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium">Login</Link>
                                    <Link to="/signup" class="text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium">Sign Up</Link>
                                </div>
                            </div>
                        </div>

                        <div class="absolute inset-y-0 right-0 flex items-center pr-2 sm:static sm:inset-auto sm:ml-6 sm:pr-0">
                            <div class="ml-3 relative">
                                <div>
                                    <button type="button" class="bg-gray-800 flex text-sm rounded-full focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-800 focus:ring-white" id="user-menu-button" aria-expanded="false" aria-haspopup="true">
                                        <span class="sr-only">Open user menu</span>
                                        <img class="h-8 w-8 rounded-full" src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80" alt="" />
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div class="sm:hidden" id="mobile-menu">
                    <div class="px-2 pt-2 pb-3 space-y-1">
                        <Link to="/" class="bg-gray-900 text-white block px-3 py-2 rounded-md text-base font-medium" aria-current="page">Dashboard</Link>
                        <Link to="/" class="text-gray-300 hover:bg-gray-700 hover:text-white block px-3 py-2 rounded-md text-base font-medium">Team</Link>
                        <Link to="/login" class="text-gray-300 hover:bg-gray-700 hover:text-white block px-3 py-2 rounded-md text-base font-medium">Login</Link>
                        <Link to="/signup" class="text-gray-300 hover:bg-gray-700 hover:text-white block px-3 py-2 rounded-md text-base font-medium">SignUp</Link>
                    </div>
                </div>
            </nav>

            {/* <nav>
                <div className="nav-wrapper  white" style={{color:'black'}}>
                    <Link to="/" className="left " style={{paddingLeft:"20px"}}><b> Live and Let Live</b></Link>
                    <ul id="nav-mobile" className="right ml-3">
                        <li><Link to="/">Home</Link></li>
                        {login}
                        {myblogs}
                        {newblog}
                        <li>{profile}</li>
                        <li>{logout}</li>
                    </ul>
                </div>
            </nav> */}
        </div>
    );
};

export default Navbar;
