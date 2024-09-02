import React from 'react'

const LinkPreview = ({title, description, imageURL}) => {


    const handleLinkClick = () => {
        window.open(imageURL, "_blank", "noopener,noreferrer");
    }


    


  return (
    <div className="flex flex-col bg-green-100 py-4 px-4 justify-center items-center w-11/12 my-5 cursor-pointer rounded-xl shadow-xl border border-slate-400" onClick={handleLinkClick}>
        <div className="self-center flex justify-center items-center w-full">
            <img
            src={imageURL}
            alt="product image"
            className="w-1/2 h-auto"
            />
        </div>
        <div className="flex flex-col justify-center items-center gap-2 mt-2">
            <h1 className="text-center font-bold tracking-tight text-lg">{title}</h1>
            <p className="text-center text-sm">{description}</p>
        </div>
    </div>

  )
}

export default LinkPreview;
