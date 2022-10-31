import React from "react";
import ProjectPopup from "./projects_popup";

export default function Project(props) {
    console.log(props);
    var popup_id = `popup-project-${props.idx}`;
    return (
        <>
            <div> 
            <ProjectPopup 
                id={popup_id}
                visibility="hidden"
                {...props}
            /> 
                <div
                    className="project"
                    style={{
                        backgroundImage: `url(${props.img})`,
                        backgroundSize: `cover`,
                        backgroundPosition: `center`,
                        backgroundRepeat: `no-repeat`,
                    }}
                    onClick={() =>
                        document
                            .getElementById(popup_id)
                            .classList.remove("hidden")
                    }
                >
                    
                    <h1 className="project-heading">{props.name}</h1>
                    {/* <img className="project-pic" src={props.img} alt={props.name} /> */}
                </div>
            </div>
        </>
    );
}
