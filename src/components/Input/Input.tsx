import React from 'react'

const Input = ({ value, placeholder, onChangeHandler}) => {
  return (
    <input type="text" className='py-2 px-2 outline-none focus:bg-slate-50 border-b-2 border-violet-500 rounded-sm mt-5 ease-in duration-300' placeholder={placeholder} value={value} onChange={onChangeHandler} />
  )
}

export default Input
