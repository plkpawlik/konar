import React from 'react';
import Emys from '/emys.svg';

import "/src/style/layout/home.scss";

/*  Component schema
/*   *   *   *   *   *   *   *   *   *   */

export default function Home() {

    

/*  Component layout
/*   *   *   *   *   *   *   *   *   *   */

return(
    <>
        <div id="wrapper">
            {/* robot bedzie do wymiany */}
            <img src={Emys} alt="Emys" id="emys" />

            <div className="description-wrapper">
                <p className="konar-description">
                    Koło Naukowe Robotyków "KoNaR" <br />
                    działa przy Katedrze Cybernetyki i Robotyki, na wydziale Elektroniki 
                    Politechniki Wrocławskiej nieprzerwanie od 2003 roku. Zajmujemy się 
                    budową małych robotów i jesteśmy organizatorami Robotic Areny.
                </p>
                
                <div className="buttons-container">
                    <button type="button" className="btn" id="regulamin">REGULAMIN</button>
                    <button type="button" className="btn" id="sponsorzy">SPONSORZY</button>
                </div>
            </div>
        </div>
    </>
)};