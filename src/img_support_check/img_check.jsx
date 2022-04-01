import React from 'react';


async function getSupportedImageFormats() 
{
    let formats_supported = ["jpg"];

    const avifData = 'data:image/avif;base64,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';
	const webpData = 'data:image/webp;base64,UklGRiQAAABXRUJQVlA4IBgAAAAwAQCdASoCAAEAAQAcJaQAA3AA/v3AgAA=';

    

    const webpblob=await fetch(webpData).then((r) => {return r.blob();});
    await createImageBitmap(webpblob).then(() => formats_supported.push("webp"))
    .catch(err => console.error(err));

    const avifblob = await fetch(avifData).then((r) => {return r.blob();});
    await createImageBitmap(avifblob).then(() => formats_supported.push("avif"))
    .catch(err => console.error(err));

    return formats_supported;

}



export const FormatContex = React.createContext();

const imgs=await getSupportedImageFormats();


const ImageSupportProvider=(props)=>
{
    
   // console.log(props.children);
    return (
        <FormatContex.Provider
        value={{
            formats:imgs
        }}
        >
            {props.children}
        </FormatContex.Provider>
    );
}

export default ImageSupportProvider;