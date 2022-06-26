import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import { LazyLoadImage } from 'react-lazy-load-image-component';
import 'react-lazy-load-image-component/src/effects/blur.css';

// global config
import config from '@/utility/config';


const KoNaR_logo = '/KoNaR_logo_horizontal_small_transparent.png';

const KoNaR_low='/KoNaR_logo_horizontal_small_transparent_low.png';

/*  Component schema
/*   *   *   *   *   *   *   *   *   *   */

export default function Navbar() {

    // navbar moblie toggle state
    const [ expand, setExpand ] = useState( false );


/*  Component layout
/*   *   *   *   *   *   *   *   *   *   */

return(
    <>
        <nav id='navbar'>

            <button className={`toggler ${ expand ? 'expand' : '' }`} onClick={ () => setExpand( prev => !prev ) }>
            </button>

            <LazyLoadImage className="logo" placeholderSrc={KoNaR_low} src={KoNaR_logo} alt="Konar" threshold="10" visibleByDefault="true"/>
            
            <section className={`links ${ expand ? 'expand' : '' }`}>

                <NavLink className='nav-link' exact to={ config.route.home.path }>
                    { config.route.home.display }
                </NavLink>

                <NavLink className='nav-link' exact to={ config.route.about.path }>
                    { config.route.about.display }
                </NavLink>

                <NavLink className='nav-link' exact to={ config.route.projects.path }>
                    { config.route.projects.display }
                </NavLink>

                <NavLink className='nav-link' exact to={ config.route.news.path }>
                    { config.route.news.display }
                </NavLink>

                <NavLink className='nav-link' exact to={ config.route.tournaments.path }>
                    { config.route.tournaments.display }
                </NavLink>

                <NavLink className='nav-link' exact to={ config.route.management.path }>
                    { config.route.management.display }
                </NavLink>

                <NavLink className='nav-link' exact to={ config.route.contact.path }>
                    { config.route.contact.display }
                </NavLink>

                <NavLink className='nav-link' exact to={ config.route.test3d.path }>
                    { config.route.test3d.display }
                </NavLink>
            </section>

        </nav>
    </>
)};