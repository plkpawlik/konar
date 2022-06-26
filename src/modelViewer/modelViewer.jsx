import React from "react";
// 3d model viewer: https://modelviewer.dev
import "https://unpkg.com/@google/model-viewer/dist/model-viewer.min.js"


export default function ModelViewer(props)
{ 

 console.log(props)
return (

    <model-viewer alt={props.alt}>
        src={props.src}
        ar ar-modes="webxr scene-viewer quick-look"
    </model-viewer>

)


}