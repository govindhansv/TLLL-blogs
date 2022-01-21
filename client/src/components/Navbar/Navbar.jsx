import React, { useState } from 'react';
import { Link } from 'react-router-dom'
import './Navbar.css'

const Navbar = () => {
      

    const [value,setValue] = useState();

    const refresh = ()=>{
        // it re-renders the component
       setValue({});
    }

    const Logout = ()=>{
        localStorage.clear();
        refresh()
    }
    var logout
        let user = JSON.parse(localStorage.getItem('user'))
    
        if (user){
             logout = <a href='/' onClick={()=>{Logout()}}>{user.username}</a>
        }
    
    
  

    return (
        <div>
            <nav>
                <div className="nav-wrapper  white" style={{color:'black'}}>
                    <Link to="/" className="left " style={{paddingLeft:"20px"}}><b> Live and Let Live</b></Link>
                    <ul id="nav-mobile" className="right ml-3">
                        <li><Link to="/">Home</Link></li>
                        <li><Link to="/login">Login</Link></li>
                        <li><Link to="/signup">Signup</Link></li>
                        <li>{logout}</li>
                    </ul>
                </div>
            </nav>
        </div>
    );
};

export default Navbar;
