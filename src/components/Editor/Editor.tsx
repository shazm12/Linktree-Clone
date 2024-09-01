import React, { useState } from 'react'
import Dnd from '../DnD/Dnd';
import AddHeaderModal from '../AddHeaderModal/AddHeaderModal';
import { useElements } from '../../context/elementsContext';
import { ADD_BUTTON_STYLES } from '../../constants/styles';
import AddLinkModal from '../AddLinkModal/AddLinkModal';
import LinkElementEditorModal from '../LinkElementEditorModal/LinkElementEditorModal';

const Editor = () => {

    const [isAddHeaderModalOpen , setIsAddHeaderModalOpen ] = useState(false);
    const [isAddLinkModalOpen, setIsAddLinkModalOpen ] = useState(false);
    const [isEditLinkModalOpen, setisEditLinkModalOpen ] = useState(false);

    

    const { addHeader, addLink } = useElements();

  

   const handleCloseAddHeaderModal = () => setIsAddHeaderModalOpen(false);

   const handleAddHeaderBtnClick = () => setIsAddHeaderModalOpen(true);

   const addHeaderElement = (content) => {
    addHeader(content);
   };

   const handleAddLinkBtnClick = () =>  setIsAddLinkModalOpen(true);

   const handleCloseAddLinkModal = () => setIsAddLinkModalOpen(false);

   const handleCloseEditLinkModal = () => setisEditLinkModalOpen(false);

   const addLinkElement = (title, description, imageURL) => {
    addLink(title,description,imageURL);
   }

   const editLinkElement = (id, title, description, imageURL ) => {
    editLink(id ,title, description, imageURL);
   }


  return (
    <div className='flex flex-col items-center h-screen border-r-2'>
     
        {/* Preview URL  */}
        <div className='flex gap-4 bg-blue-100 px-4 py-4 mt-4 border-stone-400 border rounded-lg w-max'>
            <div>
                <p className='font-semibold'>Your Profile is live:</p>
                <p className='underline'>profile.com/user</p>    
            </div>
            <div className='align-self-center'>
                <button className='bg-white px-2 py-2 font-semibold'>Copy Link</button>
            </div>
        </div>
        
        {/* Add Buttons For Different Sections */}

        <div className='flex gap-2 mt-4'>
            <button onClick={handleAddLinkBtnClick} className={ADD_BUTTON_STYLES}>Add Link</button>
            <button onClick={handleAddHeaderBtnClick} className={ADD_BUTTON_STYLES}>Add Header</button>
        </div>

        {/* DND For components Added and removed */}
        <div className="mt-4">
            <Dnd/>
        </div>      

        {/* Add Header Modal Component  */}
        <AddHeaderModal isModalOpen={isAddHeaderModalOpen} onClose={handleCloseAddHeaderModal} onAddHeader={addHeaderElement} />

        {/* Add Link Modal Component */}
        <AddLinkModal isModalOpen={isAddLinkModalOpen} onClose={handleCloseAddLinkModal} onAddLink={addLinkElement} />
        
        
    </div>
  )
}

export default Editor
