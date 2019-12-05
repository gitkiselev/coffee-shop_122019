import React from 'react';
//import {Col} from 'reactstrap';
import {BrowserRouter as Router, Link} from 'react-router-dom';

import logo from '../MainPage/Logo.svg';


const Footer = () =>{
    return(
        <footer>
        <div className="container">
            <div className="row">
                <div className="col-lg-5 offset-lg-4">
                    <ul className="footer">
                    <Router>
                        <li className="footer__item">
                            <Link to="/">
                                <img src={logo} alt="logo" />
                            </Link>
                        </li>
                        <li className="footer__item">
                            <Link to="/OurCoffee">Our coffee</Link>
                        </li>
                        <li className="footer__item">
                            <Link to="/ItemPage">For your pleasure</Link>
                        </li>
                        </Router>
                    </ul>
                </div>
            </div>
            <img className="beanslogo" src={logo} alt="Beans logo" />
        </div>
    </footer>
    )
};

export default Footer;