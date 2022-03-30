import React from "react";
import { LazyLoadImage } from 'react-lazy-load-image-component';
import 'react-lazy-load-image-component/src/effects/blur.css';

export default function NewsItem(props){


    return (
        <div className="newsItemWrapper">
            <LazyLoadImage
            className="newsItem"
            alt={props.name}
            src={props.img}
            effect="blur"
            />
            <h3 className="newsItemTitle">{props.title}</h3>
            <p className="newsItemDescription">{props.description}</p>
        </div>

    )
}
