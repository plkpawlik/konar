import React from 'react';
import { Route, Switch, useLocation } from 'react-router-dom';

// global config
import config from '@/utility/config';

// layout templates
import Home from '@/layout/home';
import About from '@/layout/about';
import Contact from '@/layout/contact';
import Projects from '@/layout/projects/projects';
import News from '@/layout/news/news';
import Management from '@/layout/management';
import Tournaments from '@/layout/tournaments';
import Test3D from '@/layout/3dtest'


/*  Component schema
/*   *   *   *   *   *   *   *   *   *   */

export default function View() {
    
    // router location obiect
    const location = useLocation();


/*  Component layout
/*   *   *   *   *   *   *   *   *   *   */

return(
    <>
        <main id='view' key={ location.pathname }>
        <Switch>

            <Route exact path={ config.route.about.path } render={ () => <About /> } />

            <Route exact path={ config.route.contact.path } render={ () => <Contact /> } />

            <Route exact path={ config.route.projects.path } render={ () => <Projects /> } />

            <Route exact path={ config.route.news.path } render={ () => <News /> } />

            <Route exact path={ config.route.management.path } render={ () => <Management /> } />

            <Route exact path={ config.route.tournaments.path } render={ () => <Tournaments /> } />

            <Route exact path={ config.route.test3d.path } render={ () => <Test3D /> } />            

            <Route render={ () => <Home /> } />

        </Switch>
        </main>
    </>
)};