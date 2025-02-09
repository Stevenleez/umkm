import React from 'react'
import { FaInstagram, FaFacebookF, FaTwitter } from "react-icons/fa";

const Footer = () => {
  return (
    <div className='footer-container'>
        <hr className='footer-separator'/>
        <div className='footer-inner'>
            <div className='footer-upper'>
                <ul className='linklist'>
                <li>Contact Us</li>
                <span className="separator">/</span>
                <li>Terms & Conditions</li>
                <span className="separator">/</span>
                <li>Privacy Policy</li>
                <span className="separator">/</span>
                <li>Terms of Service</li>
                <span className="separator">/</span>
                <li>Refund Policy</li>
                </ul>
            </div>

            <div className='footer-socials'>
                <ul className='social-list linklist'>
                    <li><FaInstagram /></li>
                    <li><FaFacebookF /></li>
                    <li><FaTwitter /></li>
                </ul>
            </div>
        </div>

        <div className='footer-lower'>
                <p>© 2021 UMKM. All Rights Reserved.</p>
        </div>
    </div>
  )
}

export default Footer;