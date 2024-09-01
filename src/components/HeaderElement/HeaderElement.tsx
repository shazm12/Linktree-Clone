import React, {useState, useEffect, useRef} from 'react';

const HeaderElement = ({id, content, onEditHeaderText}) => {
  const [currentValue , setCurrentValue] = useState(content);
  const [isEditing, setIsEditing] = useState(false);
  const inputRef = useRef(null);

  // Update currentValue if content changes from the parent
  useEffect(() => {
    setCurrentValue(content);
  }, [content]);


  const handleChange = (event) => {
    setCurrentValue(event.target.value);
  };

  const handleEdit = (event) => {
    if (event.key === 'Enter') {
      onEditHeaderText(id,currentValue);
      event.preventDefault(); 
      if(inputRef) inputRef.current.blur();
      setIsEditing(false);
    }
  };

  const handleInputClick = () => {
    setIsEditing(true);
  }

  const handleOnEditClick = () => {
    setIsEditing(true);
    if(inputRef) inputRef.current.focus();
  }

  return (
    <>
    <div className='flex justify-around self-center w-full py-0 my-4 flex-grow'>
          <input ref={inputRef} className='font-bold text-2xl py-1 px-2 w-1/2 text-center' onClick={handleInputClick} value={currentValue} onChange={handleChange} onKeyDown={handleEdit} readOnly={!isEditing} />
          <button className='z-1000' onClick={handleOnEditClick}>Edit</button>
      </div>
    </>
  );
};

export default HeaderElement;
