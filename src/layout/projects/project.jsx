import React from "react";
import { LazyLoadImage } from 'react-lazy-load-image-component';
import 'react-lazy-load-image-component/src/effects/blur.css';

export default function Project(props) {
    return (
       
        <div className="project">
            <h1 className="project-heading">{props.name}</h1>
            <LazyLoadImage
            className="project-image"
            alt={props.name}
            src={props.img}
            effect="blur"
            threshold="50"
            placeholderSrc={"./low"+props.img}
            />
            
            {/* <img className="project-pic" src={props.img} alt={props.name} /> */}
            </div>
    );
}
