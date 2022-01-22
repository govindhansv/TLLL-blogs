import React from "react";
import './Footer.css'
import { Link } from 'react-router-dom'


const Footer = () => {
    return (
        <div>

<footer class="page-footer font-small blue pt-4">

  <div class="container-fluid text-center text-md-left">

    <div class="row">

      <div class="col-md-6 mt-md-0 mt-3">

        <h5 class="text-uppercase">Footer Content</h5>
        <p>Here you can use rows and columns to organize your footer content.</p>

      </div>

      <div class="clearfix w-100 d-md-none pb-3">

      <div class="col-md-3 mb-md-0 mb-3">

        <h5 class="text-uppercase">Links</h5>

        <ul class="list-unstyled">
          <li>
            <a href="#!">Link 1</a>
          </li>
          <li>
            <a href="#!">Link 2</a>
          </li>
          <li>
            <a href="#!">Link 3</a>
          </li>
          <li>
            <a href="#!">Link 4</a>
          </li>
        </ul>

      </div>

      <div class="col-md-3 mb-md-0 mb-3">

        <h5 class="text-uppercase">Links</h5>

        <ul class="list-unstyled">
          <li>
            <a href="#!">Link 1</a>
          </li>
          <li>
            <a href="#!">Link 2</a>
          </li>
          <li>
            <a href="#!">Link 3</a>
          </li>
          <li>
            <a href="#!">Link 4</a>
          </li>
        </ul>

      </div>

    </div>
    </div>

  </div>

  <div class="footer-copyright text-center py-3">© 2020 Copyright:
    <a href="https://mdbootstrap.com/"> MDBootstrap.com</a>
  </div>

</footer>

            {/* <footer className="page-footer black">
                <div className="container">
                    <div className="row">
                        <div className="col l6 s12">
                            <div className="foot-main">
                                <div className="foot-logo">
                                    <img src="../../logo-square.png" alt="" width="100px" height="100px" />
                                    <h5 className="white-text ">Live and let Live </h5>
                                </div>
                            </div>
                            <p className="grey-text text-muted">The only way to deal with an unfree world is to become so absolutely free that your very existence is an act of rebellion</p>
                        </div>
                        <div className="col l4 offset-l2 s12">
                            <h5 className="white-text">Links</h5>
                            <ul>
                                <li><Link className="grey-text text-lighten-3" to="/newblog">Newblog</Link></li>
                                <li><Link className="grey-text text-lighten-3" to="/blog">Blog</Link></li>
                                <li><Link className="grey-text text-lighten-3" to="/profile">Profile</Link></li>
                            </ul>
                        </div>
                    </div>
                </div>
                <div className="footer-copyright">
                    <div className="container">
                        © 2022 gbroz company
                        <a className="grey-text text-lighten-4 right" href="/">More Links</a>
                    </div>
                </div>
            </footer> */}
        </div>
    );
};

export default Footer;
