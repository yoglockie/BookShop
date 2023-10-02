import React from 'react'
import {BiLogoFacebook as Facebook,
    BiLogoInstagram as Instagram,
    BiLogoYoutube as Youtube,
    BiLogoTwitter as Twitter} from 'react-icons/bi';
import './Footer.css';
const Footer = () => {
    return (
        <div>
            <footer>
                <div class="footer">
                    <div class="row">
                        <a href="#"><Facebook/></a>
                        <a href="#"><Instagram/></a>
                        <a href="#"><Youtube/></a>
                        <a href="#"><Twitter/></a>
                    </div>

                    <div class="row">
                        <ul>
                            <li><a href="#">Contact us</a></li>
                            <li><a href="#">Our Services</a></li>
                            <li><a href="#">Privacy Policy</a></li>
                            <li><a href="#">Terms & Conditions</a></li>
                            <li><a href="#">Career</a></li>
                        </ul>
                    </div>

                    <div class="row">
                        BOOKSHOP Copyright © 2023 Bookshop - All rights reserved || Designed By: Hardik and Lokesh
                    </div>
                </div>
            </footer>
        </div>
    )
}

export default Footer
