import React from 'react'
import Logo from '../images/Logo.svg'
import { IoLogoInstagram } from "react-icons/io5";
import { FaFacebook } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { FaPinterest } from "react-icons/fa";

const Footer = () => {
    return (
        <>
            <div className='footerMain'>
                <div className='container'>
                    <div className='innerFooter d-flex'>
                        <div className='contactUS'>
                            <h5>Contact Us</h5>
                            <ul>
                                <li>
                                    <h6>Email</h6>
                                    <a href="#">
                                        <p>needhelp@Organia.com</p>
                                    </a>
                                </li>
                                <li>
                                    <h6>Phone</h6>
                                    <a href="#">
                                        <p>666 888 888</p>
                                    </a>
                                </li>
                                <li>
                                    <h6>Address</h6>
                                    <a href="#">
                                        <p>88 road, borklyn street, USA</p>
                                    </a>
                                </li>
                            </ul>
                        </div>
                        <div className='socials'>
                            <div className='futterLogo'>
                                <img src={Logo} alt="" />
                            </div>
                            <p>Simply dummy text of the printing and typesetting industry.
                                Lorem Ipsum simply dummy text of the printing </p>
                            <div className='socialsMedia'>
                                <ul className='innerSocialMedia d-flex justify-content-between'>
                                    <li>
                                        <a href="#">
                                            <span><IoLogoInstagram /></span>
                                        </a>
                                    </li>
                                    <li>
                                        <a href="#">
                                            <span><FaFacebook /></span>
                                        </a>
                                    </li>
                                    <li>
                                        <a href="#">
                                            <span><FaTwitter /></span>
                                        </a>
                                    </li>
                                    <li>
                                        <a href="#">
                                            <span><FaPinterest /></span>
                                        </a>
                                    </li>
                                </ul>
                            </div>
                        </div>
                        <div className='utilityPages'>
                            <h5>Utility Pages</h5>
                            <ul>
                                <li>
                                    <a href="#">Style Guide</a>
                                </li>
                                <li>
                                    <a href="#">404 Not Found</a>
                                </li>
                                <li>
                                    <a href="#">Password Protected</a>
                                </li>
                                <li>
                                    <a href="#">Licences</a>
                                </li>
                                <li>
                                    <a href="#">Changelog</a>
                                </li>
                            </ul>
                        </div>
                    </div>

                </div>
                <div className='copyrights'>
                    <p>Copyright © <span>Organick |</span>Designed by <span>VictorFlow</span>  Templates - Powered by <span>Webflow</span> </p>
                </div>
            </div>
        </>
    )
}

export default Footer