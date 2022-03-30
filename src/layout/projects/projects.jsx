import React, { useEffect, useState } from "react";
import { useRef } from "react";
import { propTypes } from "react-bootstrap/esm/Image";
import ReactDOM from "react-dom";
import Project from "./project";
import projectsData from "../../props/projects";

import "/src/style/layout/projects.scss";

/*  Component schema
/*   *   *   *   *   *   *   *   *   *   */

export default function Projects() {
    /* Button scrolls behavior implementation
/*   *   *   *   *   *   *   *   *   *   */

    let curr = useRef(null);

    const scrollHorizontal = (x) => {
        curr.current.scrollLeft += x;
    };

    /*  Component layout
/*   *   *   *   *   *   *   *   *   *   */

    return (
        <>
            <div id="projects">
                <div id="projects-carousel">
                    <ul id="projects-container" ref={(x) => (curr.current = x)}>
                        {projectsData["projects"].map((project) => (
                            <Project key={project.idx} {...project} />
                        ))}
                    </ul>
                    <div className="navigation-container">
                        <button
                            type="button"
                            className="btn"
                            onClick={() =>
                                scrollHorizontal(
                                    -document.getElementsByClassName(
                                        "project"
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
                                        "project"
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
    );
}
