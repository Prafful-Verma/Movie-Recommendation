import React from 'react';
import * as BsIcons from "react-icons/bs";
import * as RiIcons from "react-icons/ri";
import * as IoIcons from "react-icons/io";
import * as GiIcons from "react-icons/gi";
import * as CgIcons from "react-icons/cg";

export const NavbarData = [
    {
        title : 'Home',
        path : '/',
        icon : <GiIcons.GiCrossFlare />,
        cName : 'nav-text'
    },

    {
        title : 'Login/Signup',
        path : '/login',
        icon : <CgIcons.CgLogIn />,
        cName : 'nav-text'
    },

    {
        title : 'Recommendation',
        path : '/recommendation',
        icon : <BsIcons.BsBarChart />,
        cName : 'nav-text'
    },

    {
        title : 'Favourite',
        path : '/favourite',
        icon : <RiIcons.RiStarSLine />,
        cName : 'nav-text'
    },

    {
        title : 'Support',
        path : '/support',
        icon : <IoIcons.IoMdHelpCircle />,
        cName : 'nav-text'
    },
]
