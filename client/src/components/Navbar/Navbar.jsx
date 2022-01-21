import React, { useState } from 'react';
import { Link } from 'react-router-dom'
import './Navbar.css'

const Navbar = () => {
      

    const [value,setValue] = useState();
    console.log(value);

    const refresh = ()=>{
        // it re-renders the component
        setValue({});
    }
    console.log(value);

    const Logout = ()=>{
        localStorage.clear();
        refresh()
    }
    var logout
    var profile
        let user = JSON.parse(localStorage.getItem('user'))
        
        if (user){
             logout = <a href='/' className='btn btn-danger-outline' onClick={()=>{Logout()}}>logout</a>
             profile = <li><Link to="/profile">{user.username} </Link></li>

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
                        <li>{profile}</li>
                        <li>{logout}</li>
                    </ul>
                </div>
            </nav>
        </div>
    );
};

export default Navbar;
