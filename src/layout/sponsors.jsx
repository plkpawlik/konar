import React from 'react';

import "/src/style/layout/sponsors.scss";

export default function Sponsors(props) {
    return (
    <div id="popup-sponsors" className={props.visibility}>
        <div className="sponsors-content">
            <img src="/sponsors_logo/Starek.png" />
            <img src="/sponsors_logo/Teltonika.svg" />
            <span className="close" onClick={ () => document.getElementById("popup-sponsors").classList.add("hidden") }>
                &times;
            </span>
        </div>
    </div>);
}

