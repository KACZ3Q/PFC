import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import PFC from "../../Assets/PFC.png";
import { Button } from "../Button/Button";
import './Navbar.css'

function Navbar() {
    const[click, setClick]=useState(false);
    const[button, setButton]=useState(true);

    const handleClick=()=>setClick(!click);
    const closeMobileMenu = ()=>setClick(false)

    const showButton=()=>{
        if(window.innerWidth<=960){
            setButton(false);
        }
        else{
            setButton(true);
        }
    };

    useEffect(()=>{
        showButton();
    }, []);

    window.addEventListener('resize',showButton);

  return (
    <nav className="navbar">
      <div className="navbar-container">
        <Link to="/" className="navbar-logo" onClick={closeMobileMenu}>
        <img src={PFC} alt="logo"/>
        </Link>
        <div className="menu-icon" onClick={handleClick}>
          <i className={click ? "fa-solid fa-x" : "fa-solid fa-bars"} />
        </div>
        <ul className={click ? 'nav-menu active' : 'nav-menu'}>
            <li className="nav-item">
                <Link to='/' className="nav-links" onClick={closeMobileMenu}>
                    Home
                </Link>
            </li>
            <li className="nav-item">
                <Link to='/projects' className="nav-links" onClick={closeMobileMenu}>
                    Projects
                </Link>
            </li>
            <li className="nav-item">
                <Link to='/testimonials' className="nav-links" onClick={closeMobileMenu}>
                    Testimonials
                </Link>
            </li>
            <li className="nav-item">
                <Link to='/about-us' className="nav-links" onClick={closeMobileMenu}>
                    About Us
                </Link>
            </li>
            <li className="nav-item">
                <Link to='/contact' className="nav-links-mobile" onClick={closeMobileMenu}>
                    Contact
                </Link>
            </li>
        </ul>
        {button &&<Button buttonStyle='btn--outline'>Contact</Button>}
      </div>
    </nav>
  );
}

export default Navbar;
