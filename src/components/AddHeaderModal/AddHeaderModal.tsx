import React, { useState } from 'react'
import Modal from '../Modal/Modal';
import Input from '../Input/Input';

const AddHeaderModal = ({ isModalOpen, onClose, onAddHeader }) => {

    const [content, setContent] = useState(null);

    const onSubmit = () => {
        onAddHeader(content);
        setContent(null);
        onClose();
    }

    const handleContentChange = (event) => {
        setContent(event.target.value);
    }


  return (
    <>
        <Modal isOpen={isModalOpen} onClose={onClose}>
            <div className='flex flex-col justify-center'>
                <h1 className='font-bold tracking-tight text-slate-800 sm:text-2xl lg:text-3xl'>Add Header</h1>
                <Input value={content} placeholder={"New Header..."} onChangeHandler={handleContentChange} />
                <button className='mt-2 py-2 font-semibold hover:bg-violet-500 hover:text-slate-200 ease-in-out duration-300' onClick={onSubmit}>Submit</button>
            </div>

        </Modal>
    </>
  )
}

export default AddHeaderModal;
