import React from "react";

export default function Project(props) {
    return (
        <div
            className="project"
            style={{
                backgroundImage: `url(${props.img})`,
                backgroundSize: `cover`,
                backgroundPosition: `center`,
                backgroundRepeat: `no-repeat`,
            }}
        >
            <h1 className="project-heading">{props.name}</h1>
            {/* <img className="project-pic" src={props.img} alt={props.name} /> */}
        </div>
    );
}
