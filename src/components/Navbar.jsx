import React, {useState} from 'react'
import { Link } from 'react-router-dom';
import {FaBars, FaTimes} from 'react-icons/fa';
import './Navbar.css';

const Navbar = () => {
const[click, setclick] = useState(false);
const handleClick = () => setclick(!click)

  return (
    <div>
        <header>
            <nav className="navbar">
                <div className="logo">
                    
                <p className="font-bold">{"{"} <span className="innerJ font-bold">J</span> {"}"}</p>

                </div>
                <ul className={click ? "nav-menu active" : "nav-menu"}>


                    <li className="nav-item">
                    
                    <a target="_blank" href="https://drive.google.com/file/d/1JbYEc9_C1GeGlvE5yEtn7D5z16XbwRdw/view?usp=sharing">Resume</a>
                    </li>
{/* 
                    <li className="nav-item">
                        <Link to='/#projects' className='nav-link'>Projects</Link>
                    </li> */}

                    <li className="nav-item">
                    <a href="mailto:jaimemcardoso@yahoo.com">Contact</a>
                    </li>

                </ul>
                <div className="hamburger" onClick={handleClick}>
                    {click ? (<FaTimes size={20} style={{color: 'white'}} />) :(<FaBars size={20}  style={{color: 'white'}} />) }
                    
                </div>
            </nav>
        </header>

    </div>
  )
}

export default Navbar