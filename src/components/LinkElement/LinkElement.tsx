import React, { useState } from 'react'
import LinkElementEditorModal from '../LinkElementEditorModal/LinkElementEditorModal';

const LinkElement = ({id, title, description, imageURL, onEditLinkElement}) => {

    
    const [isEditLinkModalOpen, setisEditLinkModalOpen ] = useState(false);
    
    const handleCloseEditLinkModal = () => setisEditLinkModalOpen(false);
    
    const handleOnEditClick = () => {
        setisEditLinkModalOpen(true);
    };

    const handleEditElement = (title, description, imageURL) => {
        onEditLinkElement(id, title, description, imageURL);
    }
    
    const shortenTitle = (title) => title.length > 20 ? title.substring(0, 20) + "..." : title;


    const shortenDescription = (description) => description.length > 40 ? description.substring(0, 40) + "..." : description;
    
    

    return (
        <>
        <div className="flex h-24 justify-around flex-grow px-2">
        <div className="flex mx-2 gap-5 items-center">
            <div className="w-1/2 h-full mx-3 overflow-hidden">
            <img
                src={imageURL}
                className="w-full h-full object-contain"
                loading="lazy"
                alt="image"
            />
            </div>
            <div>
            <p className="font-bold tracking-tight text-[1.2rem]">{shortenTitle(title)}</p>
            <p>{shortenDescription(description)}</p>
            </div>
        </div>
        <button className="z-1000" onClick={handleOnEditClick}>Edit</button>
        </div>
        {/* Link Editor Modal Component */}
        <LinkElementEditorModal initalTitleData={title} initialDescriptionData={description} initialImageURLData={imageURL} isModalOpen={isEditLinkModalOpen} onClose={handleCloseEditLinkModal} onEditLink={handleEditElement} />
      </>

  )
}

export default LinkElement;
