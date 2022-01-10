import React from 'react';

import main_logo from "/ra_logo.png";
import Sponsors from "./sponsors";

import "/src/style/layout/home.scss";

/*  Component schema
/*   *   *   *   *   *   *   *   *   *   */

export default function Tournaments() {

    

/*  Component layout
/*   *   *   *   *   *   *   *   *   *   */

return(
    <>
            <div id="wrapper">
                <Sponsors visibility="hidden" />

                {/* robot bedzie do wymiany */}
                <img src={main_logo} alt="main_logo" id="main_logo" />

                <div className="description-wrapper">
                    <p className="konar-description">
                    Międzynarodowe Zawody Robotyczne <br/> 
                    organizowane przez 
                    Koło Naukowe Robotyków „KoNaR” działające przy Politechnice Wrocławskiej.
                    International Robotic Tournament organised by Student Interest Group ”KoNaR” 
                    from Wroclaw University of Science and Technology.
                    <br/>
                    <br/>
                    Dowiedz się więcej...

                    </p>

                    <div className="buttons-container">
                        <a href="https://www.roboticarena.pl/pl/" className="btn" >ROBOTIC ARENA</a>                  
                    </div>
                </div>
            </div>
        </>
)};