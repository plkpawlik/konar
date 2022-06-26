import React from "react";
import { LazyLoadImage } from 'react-lazy-load-image-component';
import 'react-lazy-load-image-component/src/effects/blur.css';
import { FormatContex } from "../img_support_check/img_check";

/*

A class for LazyLoadImage , it also check 
browser image compatibiliy and choose proper 
format.

Input parameters:
src - path to image file without extension if use extension is not set
placeholder - path to placeholder image displayed when normal image is loading in the background
width - width of the image
height - height of the image
use_extension - use image path with file extension


*/

export default function LazyImage(props) 
{ 
    let img="";

    if(!(props.use_extension==='true'))
    { 
    const {formats}=React.useContext(FormatContex);

     img=props.src+"."+formats[formats.length-1];
    }
    else
    { 
        img=props.src;
    }

    
    return (
        
        <LazyLoadImage
        placeholderSrc={props.placeholder}
        {...props}
            alt={props.alt}
            src={img}
            effect="blur"
            
             
            />
        
    )


}

