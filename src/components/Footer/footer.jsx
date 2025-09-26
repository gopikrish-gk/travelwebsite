import { MdOutlineTravelExplore } from "react-icons/md";
import { ImFacebook } from "react-icons/im";
import { AiFillInstagram } from "react-icons/ai";
import { BsTwitterX } from "react-icons/bs";
import React ,{ useEffect} from "react";
import './footer.css'

import Aos from 'aos'
import 'aos/dist/aos.css'

const Footer = () =>{
    useEffect(()=>{
                        Aos.init({duration:2000})
                    },[])
    return (
        <div className="footer">
            <div className="secContainer container grid">
                <div data-aos="fade-up" data-aos-duratuon='2000'  className="logoDiV">
                    <div className="footerLogo" data-aos="fade-up" data-aos-duratuon='2000' >

                        
                        <a href="#" className="logo flex">
                            <h3 className="flex"><MdOutlineTravelExplore className="icon" />Nature Trails Travel</h3>
                           
                        </a>
                    


                </div>


                <div className="socials flex" data-aos="fade-up" data-aos-duratuon='3000' >
                    <ImFacebook className='icon'/>
                    <BsTwitterX className='icon'/>
                    <AiFillInstagram className='icon'/>
                </div>
                </div>

                <div data-aos="fade-up" data-aos-duratuon='2000'  className="footerLinks">
                    <span className="linkTitle">
                        Information
                    </span>
                    <li>
                        <a href="#">Home</a>
                    </li>
                    <li>
                        <a href="#">Explore</a>
                    </li>
                    <li>
                        <a href="#">Travel</a>
                    </li>
                    <li>
                        <a href="#">Blog</a>
                    </li>
                </div>
                <div className="footerLinks" data-aos="fade-up" data-aos-duratuon='2000' >
                    <span className="linkTitle">
                        Helpful Links
                    </span>
                    <li>
                        <a href="#">Destination</a>
                    </li>
                    <li>
                        <a href="#">Support</a>
                    </li>
                    <li>
                        <a href="#">Travel & Conditions</a>
                    </li>
                    <li>
                        <a href="#">Privacy</a>
                    </li>
                </div>
                <div data-aos="fade-up" data-aos-duratuon='2000'  className="footerLinks">
                    <span className="linkTitle">
                        Contact Us
                    </span>
                  <span className="phone">+916383003253</span>
                  <span className="email">naturetravel@gmail.com</span>
                </div>

            </div>
        </div>
    )
}

export default Footer;