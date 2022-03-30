import React from "react";

export default function NewsItem(props){


    return (
        <div className="newsItemWrapper">
            <div
                className="newsItem"
                style={{
                    backgroundImage: `url(${props.img})`,
                    backgroundSize: `cover`,
                    backgroundPosition: `center`,
                    backgroundRepeat: `no-repeat`,
                }}
            ></div>
            <h3 className="newsItemTitle">{props.title}</h3>
            <p className="newsItemDescription">{props.description}</p>
        </div>

    )
}
