import React from "react";
import LazyImage from '../../lazyimage/LazyImage';
import { FormatContex } from "../../img_support_check/img_check";


export default function NewsItem(props){

    const {formats}=React.useContext(FormatContex);

    console.log(formats);

    return (
        <div className="newsItemWrapper">
            <LazyImage
            className="newsItem"
            alt={props.name}
            src={props.img}
            effect="blur"
            placeholderSrc={props.placeholder}
            />
            <h3 className="newsItemTitle">{props.title}</h3>
            <p className="newsItemDescription">{props.description}</p>
        </div>

    )
}
