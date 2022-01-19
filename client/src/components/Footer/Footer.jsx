import React from "react";
import './Footer.css'
import { Link } from 'react-router-dom'


const Footer = () => {
    return (
        <div>
            <footer class="page-footer black">
                <div class="container">
                    <div class="row">
                        <div class="col l6 s12">
                            <div className="foot-main">
                                <div className="foot-logo">
                                    <img src="../../logo-square.png" alt="" width="100px" height="100px" />
                                    <h5 class="white-text ml-5">Live and let Live </h5>
                                </div>
                            </div>
                            <p class="grey-text text-muted">The only way to deal with an unfree world is to become so absolutely free that your very existence is an act of rebellion</p>
                        </div>
                        <div class="col l4 offset-l2 s12">
                            <h5 class="white-text">Links</h5>
                            <ul>
                                <li><Link class="grey-text text-lighten-3" to="/newblog">Newblog</Link></li>
                                <li><Link class="grey-text text-lighten-3" to="/blog"></Link>Blog</li>
                            </ul>
                        </div>
                    </div>
                </div>
                <div class="footer-copyright">
                    <div class="container">
                        © 2022 gbroz company
                        <a class="grey-text text-lighten-4 right" href="/">More Links</a>
                    </div>
                </div>
            </footer>
        </div>
    );
};

export default Footer;
