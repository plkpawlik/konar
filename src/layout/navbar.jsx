import React, { useState } from 'react';
import { NavLink as Link } from 'react-router-dom';

// global config
import config from '@/utility/config';

// icons
import DoubleArrowIcon from '@mui/icons-material/DoubleArrow';
import HomeIcon from '@mui/icons-material/Home';
import InfoIcon from '@mui/icons-material/Info';
import PeopleIcon from '@mui/icons-material/People';
import AnnouncementIcon from '@mui/icons-material/Announcement';


/*  Component schema
/*   *   *   *   *   *   *   *   *   *   */

export default function Navbar() {


/*  Component layout
/*   *   *   *   *   *   *   *   *   *   */

return(
    <>
        <nav id='navbar'>

            <header className='logo'>
                <span className='text'>KONAR</span>
                <DoubleArrowIcon />
            </header>


            <Link className='link' exact to={ config.route.home.path } >
                <HomeIcon />
                <span className='text'>{ config.route.home.display }</span>
            </Link>

            <Link className='link' exact to={ config.route.about.path } >
                <InfoIcon />
                <span className='text'>{ config.route.about.display }</span>
            </Link>

            <Link className='link' exact to={ config.route.management.path } >
                <PeopleIcon />
                <span className='text'>{ config.route.management.display }</span>
            </Link>

            <Link className='link' exact to={ config.route.news.path } >
                <AnnouncementIcon />
                <span className='text'>{ config.route.news.display }</span>
            </Link>


        </nav>
    </>
)};