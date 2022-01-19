import React from 'react';
import { Link } from 'react-router-dom'

const Navbar = () => {
    return (
        <div>
            <nav>
                <div className="nav-wrapper  white">
                    <Link to="/" className="left " style={{paddingLeft:"20px"}}><b> Live and Let Live</b></Link>
                    <ul id="nav-mobile" className="right ml-3">
                        <li><Link to="/">Home</Link></li>
                        <li><Link to="/login">Login</Link></li>
                        <li><Link to="/signup">Signup</Link></li>
                    </ul>
                </div>
            </nav>
        </div>
    );
};

export default Navbar;
