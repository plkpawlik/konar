import React from 'react';
import { Route, Switch } from 'react-router-dom';

// global config
import config from '@/utility/config';

// layout templates
import Home from '@/layout/home';
import About from '@/layout/about';
import Management from '@/layout/management';
import News from '@/layout/news';


/*  Component schema
/*   *   *   *   *   *   *   *   *   *   */

export default function View() {
    


/*  Component layout
/*   *   *   *   *   *   *   *   *   *   */

return(
    <>
        <main id='view'>
        <Switch>

            
            <Route exact path={ config.route.about.path } render={ () => <About /> } />
            
            <Route exact path={ config.route.management.path } render={ () => <Management /> } />

            <Route exact path={ config.route.news.path } render={ () => <News /> } />


            <Route render={ () => <Home /> } />


        </Switch>
        </main>
    </>
)};