import React from 'react';

import "/src/style/layout/sponsors.scss";

export default function Sponsors(props) {
    return (
    <div id="sponsors-popup" className={props.visibility}>
        <div className="sponsors-content">
            <h1 className="sponsors-heading">Sponsorzy</h1>
            <span className="close" onClick={ () => document.getElementById("sponsors-popup").classList.add("hidden") }>
                &times;
            </span>
        </div>
    </div>);
}

