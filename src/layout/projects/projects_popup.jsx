import React from 'react';

import "/src/style/layout/sponsors.scss";

function getName(props) {
    if(props.long_name) {
        return <h1>{props.long_name}</h1>
    }
    return <h1>{props.name}</h1>
}

export default function ProjectPopup(props) {
    
    return (
    <div id={props.id} className={props.visibility}>
        <div className="sponsors-content">
            {getName(props)}
            <h3>{props.details}</h3>
            <img src={props.sponsor_img} />
            <span className="close" onClick={ () => document.getElementById(props.id).classList.add("hidden") }>
                &times;
            </span>
            
        </div>
    </div>);
}

