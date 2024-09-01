import React, { useState } from 'react'
import { useElements } from '../../context/elementsContext';
import Modal from '../Modal/Modal';
import Input from '../Input/Input';
const LinkElementEditorModal = ({ initalTitleData, initialDescriptionData, initialImageURLData, isModalOpen, onClose, onEditLink }) => {
  
  const [title, setTitle] = useState(initalTitleData);
  const [description, setDescription] = useState(initialDescriptionData);
  const [imageURL, setImageURL] = useState(initialImageURLData);



  const handleTitleChange = (event) => {
    setTitle(event.target.value);
  }

  const handleDescriptionChange = (event) => {
    setDescription(event.target.value);
  }

  const handleImageURLChange = (event) => {
    setImageURL(event.target.value);
  }
  
  const onSubmit = () => {
    onEditLink(title, description, imageURL);
    onClose();
  }
  
  return (
    <>
      <Modal isOpen={isModalOpen} onClose={onClose}>
          <div className=''>
            <h2 className="font-bold tracking-tight text-slate-800 text-3xl">Edit Link</h2>
            <div className='flex flex-col sm:flex-col lg:flex-row gap-8 mt-5'>
              <div className='justify-self-center self-center h-auto lg:w-3/5'>
                  {imageURL ? 
                  (
                    <img src={imageURL} loading='lazy' className='h-auto shadow-lg rounded-lg' alt='image' />
                  ):
                  ( <p className='text-center sm:py-4 lg:py-2'>Image Preview</p> )
                  }
              </div>
              <div className='flex flex-col flex-grow gap-2'>
                <Input value={title} onChangeHandler={handleTitleChange} placeholder={"Title..."} />
                <Input value={description} onChangeHandler={handleDescriptionChange} placeholder={"Description..."} />
                <Input value={imageURL} onChangeHandler={handleImageURLChange} placeholder={"Image URL..."} />
                <button className='mt-2 py-2 font-semibold hover:bg-violet-500 hover:text-slate-200 ease-in-out duration-300' onClick={onSubmit}>Submit</button>
              </div>
            </div>
          </div>
        </Modal>

  

    </>
  )
}

export default LinkElementEditorModal;
