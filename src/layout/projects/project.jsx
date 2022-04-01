import React from "react";
import { LazyLoadImage } from 'react-lazy-load-image-component';
import 'react-lazy-load-image-component/src/effects/blur.css';
import { FormatContex } from "../../img_support_check/img_check";

export default function Project(props) {

    const {formats}=React.useContext(FormatContex);

    console.log(formats);



    return (

        

        <div className="project">
            
            <h1 className="project-heading">{props.name}</h1>
            <LazyLoadImage
            className="project-image"
            alt={props.name}
            src={props.img+'.'+formats[formats.length-1]}
            effect="blur"
            threshold="50"
            placeholderSrc={props.placeholder}
            />
            
            {/* <img className="project-pic" src={props.img} alt={props.name} /> */}
            </div>
    );
}
