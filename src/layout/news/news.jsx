import React, { useEffect, useState } from "react";
import { useRef } from "react";
import { propTypes } from "react-bootstrap/esm/Image";
import ReactDOM from "react-dom";
import NewsItem from "./newsItem";
import newsData from "../../props/news";

import "/src/style/layout/news.scss";


export default function News() {

    let curr = useRef(null);

    const scrollHorizontal = (x) => {
        curr.current.scrollLeft += x;
    };
    

    return(
        <>
            <div id="news">
                <div id="news-carousel">
                    <ul id="news-container" ref={(x) => (curr.current = x)}>
                        {newsData["news"].map((newsItem) => (
                            <NewsItem key={newsItem.idx} {...newsItem} />
                        ))}
                    </ul>
                    <div className="navigation-container">
                        <button
                            type="button"
                            className="btn"
                            onClick={() =>
                                scrollHorizontal(
                                    -document.getElementsByClassName(
                                        "newsItem"
                                    )[0].clientWidth
                                )
                            }
                        >
                            <b>&lt;</b>
                        </button>
                        <button
                            type="button"
                            className="btn"
                            onClick={() =>
                                scrollHorizontal(
                                    document.getElementsByClassName(
                                        "newsItem"
                                    )[0].clientWidth
                                )
                            }
                        >
                            <b>&gt;</b>
                        </button>
                    </div>
                </div>
            </div>
        </>
    )
}