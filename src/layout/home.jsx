import React from "react";
import main_logo from "/main_logo.svg";
import Sponsors from "./sponsors";
import Statute from '/regulamin.pdf';
import { LazyLoadImage } from 'react-lazy-load-image-component';
import 'react-lazy-load-image-component/src/effects/blur.css';

import "/src/style/layout/home.scss";

/*  Component schema
/*   *   *   *   *   *   *   *   *   *   */

export default function Home() {
    /*  Component layout
/*   *   *   *   *   *   *   *   *   *   */

    return (
        <>
            <div id="wrapper">
                <Sponsors visibility="hidden" />

                {/* robot bedzie do wymiany */}
                <LazyLoadImage src={main_logo} alt="main_logo" id="main_logo" effect="blur"/>

                <div className="description-wrapper">
                    <p className="konar-description">
                        Koło Naukowe Robotyków "KoNaR" <br />
                        działa przy Katedrze Cybernetyki i Robotyki, na wydziale
                        Elektroniki, Fotoniki i Mikrosystemów Politechniki
                        Wrocławskiej nieprzerwanie od 2003 roku. Zajmujemy się
                        budową małych robotów i jesteśmy organizatorami Robotic
                        Areny.
                    </p>

                    <div className="buttons-container">
                    
                        <a href={Statute} download="regulamin.pdf" className="btn" id="regulamin"> 
                            REGULAMIN 
                        </a>
                        <button
                            type="button"
                            className="btn"
                            id="sponsorzy"
                            onClick={() =>
                                document
                                    .getElementById("sponsors-popup")
                                    .classList.remove("hidden")
                            }
                        >
                            SPONSORZY
                        </button>
                    </div>
                </div>
            </div>
        </>
    );
}
