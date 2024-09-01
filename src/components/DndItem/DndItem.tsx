import React from 'react';
import { useSortable } from '@dnd-kit/sortable';
import { CSS } from '@dnd-kit/utilities';

const DndItem = ({ id, children }) => {
    const { attributes, listeners, setNodeRef, transform, transition } = useSortable({ id });
    const style = {
      transform: CSS.Transform.toString(transform),
      transition,
    };
  
    return (
      <div
        ref={setNodeRef}
        style={style}
        className='flex w-[30rem] justify-center items-center flex-grow bg-white border border-slate-200 py-5 px-2 z-10'

      >
        <div         
        {...attributes}
        {...listeners}
        className='cursor-grab'
        >
          Drag
        </div>
        <div className='flex flex-grow h-full'>
          {children}
        </div>
        
      </div>
    );
}

export default DndItem
