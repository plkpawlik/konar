import React from 'react';
import { HashRouter as Router } from 'react-router-dom';

// context
import { StoreProvider } from '@/context/store';

// layout
import Main from '@/layout/main';


/*  Component schema
/*   *   *   *   *   *   *   *   *   *   */

export default function App() {

    

/*  Component layout
/*   *   *   *   *   *   *   *   *   *   */

return(
    <>
        <StoreProvider>

            <Router>
                
                <Main />

            </Router>



        </StoreProvider> 
    </>
)};