import React,{useState} from 'react';
import * as FaIcons from "react-icons/fa";
import * as AiIcons from "react-icons/ai";
import * as GiIcons from "react-icons/gi";
import { Link } from 'react-router-dom';
import { NavbarData } from './NavbarData';
import  './Navbar.css';
import {IconContext} from 'react-icons'

function Navbar() {
    const [sidebar, setsidebar] = useState(false)

    const showSiidebar = () => setsidebar(!sidebar)
    
    return (
        <div>
        <IconContext.Provider value={{color:'#fff'}}>
            <div className='navbar'>
                <Link to='#' className='menu-bars'>
                    <FaIcons.FaBars onClick={showSiidebar} />
                </Link>
                <h1><GiIcons.GiCrossMark />XAVIOR<GiIcons.GiCrossMark /></h1>
            </div>
            <nav className={sidebar ? 'nav-menu active' : 'nav-menu'}>
                <ul className='nav-menu-items' onClick={showSiidebar}>
                    <li className='navbar-toggle'>
                        <Link to='#' className='menu-bars'>
                            <AiIcons.AiOutlineCloseCircle />
                        </Link>
                    </li>
                    {
                        NavbarData.map((item, index) => {
                        return(
                            <li key={index} className={ item.cName}>
                                <Link to={item.path}>
                                    {item.icon}
                                    <span>{item.title}</span>
                                </Link>
                            </li>
                        )
                    })}
                </ul>
            </nav>
        </IconContext.Provider>
        </div>
    );
}

export default Navbar;