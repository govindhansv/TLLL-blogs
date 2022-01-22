import React from "react";
import './Footer.css'
import { Link } from 'react-router-dom'


const Footer = () => {
    return (

        <footer class="w-auto p-1 bottom-0 h-auto relative bg-black ">
            <div class="lg:flex  lg:mt-3 md:mx-12 lg:mx-28 lg:justify-between">

                <div class=" w-full ">
                    <div className="flex content-center justify-center">
                        <Link to="/">
                        <div className="foot-logo">
                            <img src="../../logo-square.png" alt="" width="80px" height="80px" />
                            <h2 className="text-white font-bold ">Live and let Live</h2>
                        </div>
                        </Link>
                    </div>
                </div>

                {/* <div class="mb-4">
                    <h3 class="text-white font-bold mb-2">Follow Us</h3>
                    <div class="columns-2 md:columns-3 lg:columns-2">
                        <a href="" class="text-gray-200" >Telegram</a><br></br>
                        <a href="" class="text-gray-200">Instagram</a><br></br>
                    </div>
                </div> */}
            </div>

            {/* <div>
                <div class="flex justify-center mt-2">
                    <small class="text-gray-400"> Copyright &copy; 2022 All rights reserved
                    </small>
                </div>
            </div> */}

        </footer>

        // <footer className="page-footer black">
        //     <div className="container">
        //         <div className="row">
        //             <div className="col l6 s12">
        //                 <div className="foot-main">
        //                     <div className="foot-logo">
        //                         <img src="../../logo-square.png" alt="" width="100px" height="100px" />
        //                         <h5 className="white-text ">Live and let Live </h5>
        //                     </div>
        //                 </div>
        //                 <p className="grey-text text-muted">The only way to deal with an unfree world is to become so absolutely free that your very existence is an act of rebellion</p>
        //             </div>
        //             <div className="col l4 offset-l2 s12">
        //                 <h5 className="white-text">Links</h5>
        //                 <ul>
        //                     <li><Link className="grey-text text-lighten-3" to="/newblog">Newblog</Link></li>
        //                     <li><Link className="grey-text text-lighten-3" to="/blog">Blog</Link></li>
        //                     <li><Link className="grey-text text-lighten-3" to="/profile">Profile</Link></li>
        //                 </ul>
        //             </div>
        //         </div>
        //     </div>
        //     <div className="footer-copyright">
        //         <div className="container">
        //             © 2022 gbroz company
        //             <a className="grey-text text-lighten-4 right" href="/">More Links</a>
        //         </div>
        //     </div>
        // </footer>
    );
};

export default Footer;
