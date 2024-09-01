import React from 'react'
import { useElements } from '../../context/elementsContext';
import HeaderPreview from '../HeaderPreview/HeaderPreview';
import LinkPreview from '../LinkPreview/LinkPreview';

const Preview = () => {
  const { elements } = useElements();



  return (
  <div className="h-3/4 py-2 px-2 w-11/12 xl:w-1/2 bg-indigo-300 rounded-lg border-4 border-slate-500 overflow-y-auto">
    <div className="flex flex-col justify-center items-center mt-5">
      <img src="https://plus.unsplash.com/premium_photo-1678566153919-86c4ba4216f1?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="profile image" className="h-[5rem] w-[5rem] rounded-[20rem]" />
      <p className="font-semibold tracking-tighter">@User</p>
      <div className="flex flex-col justify-center items-center mt-2 h-full w-full">
        {elements.map((element, index) => {
          if (element.type === "Header") {
            return <HeaderPreview key={index} text={element.content} />;
          } else if (element.type === "Link") {
            return (
              <LinkPreview key={index} title={element.title} description={element.description} imageURL={element.imageURL} />
            );
          }
        })}
      </div>
    </div>
  </div>

  )
}

export default Preview;
