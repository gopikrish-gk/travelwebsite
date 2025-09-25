import React, { useState } from "react";

import { MdTravelExplore } from "react-icons/md";
import { AiFillCloseCircle } from "react-icons/ai";
import { TbGridDots } from "react-icons/tb";
import './navbar.css';


const Navbar = () =>{
    //code to toggle/show navbar
    const[active,setActive]=useState('navBar')
    const showNav =()=>{
        setActive('navBar activeNavbar')
    }
    // code to remove  bar
    const removeNav =()=>{
        setActive('navBar')
    }
//code to add background color to the header
const[transparent,setTransparent]=useState('header')
const addBg =()=>{
    if(window.scrollY >=10){
        setTransparent('header activeNavbar')
    }
    else{
         setTransparent('header')
    }
}
window.addEventListener('scroll',addBg)
    return (
        <section className="navbarSection">
            <div className={transparent}>

                <div className="logoDiv">
                    <a href="" className="logo">
                        <h1 className="flex"><MdTravelExplore className="icon"/>Nature Trails Travel</h1>
                    </a>
                </div>

                <div className={active}>
                    <ul className="navLists flex">

                        <li className="navItem">
                            <a href="#" className="navLink">Home</a>
                        </li>

                        <li className="navItem">
                            <a href="#" className="navLink">Products</a>
                        </li>

                        <li className="navItem">
                            <a href="#" className="navLink">Resources</a>
                        </li>

                        <li className="navItem">
                            <a href="#" className="navLink">Contacts</a>
                        </li>

                        <li className="navItem">
                            <a href="#" className="navLink">Blogs</a>
                        </li>

                        <div className="headerBtns flex">
                            <button className="btn loginBtn">
                                <a href="#">Login</a>
                            </button>
                            <button className="btn loginBtn">
                                <a href="#">Sign Up</a>
                            </button>
                        </div>

                    </ul>
                            <div onClick={removeNav} className="closeNavbar">
                                <AiFillCloseCircle className="icon"/>
                            </div>


                </div>

                <div onClick={showNav} className="toggleNavbar">
                    <TbGridDots className="icon"/>
                </div>
            </div>
        </section>
    )
}

export default Navbar;