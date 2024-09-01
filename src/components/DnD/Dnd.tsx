import React, { useState } from 'react';
import { DndContext, DragEndEvent } from '@dnd-kit/core';
import { SortableContext, arrayMove } from '@dnd-kit/sortable';
import DndItem from '../DndItem/DndItem';
import { useElements } from '../../context/elementsContext';



const Dnd = () => {

    
    const { elements, setElements, renderElementOnType } = useElements();

    const handleDragEnd = (event: DragEndEvent) => {
        const { active, over } = event;
        if (active.id !== over?.id) {
            setElements((items) => {
            const oldIndex = items.findIndex((item) => item.id === active.id);
            const newIndex = items.findIndex((item) => item.id === over?.id);
            return arrayMove(items, oldIndex, newIndex);
          });
        }
    };

  return (
    <div className="w-full self-center justify-self-center py-5 h-[45rem]">
      <DndContext onDragEnd={handleDragEnd}>
        <SortableContext items={elements.map((item) => item.id)}>
          <div className="flex h-full focus:overflow-y-scroll overflow-x-hidden flex-col w-full py-5 px-10">
            {elements.map((item) => (
              <div className="my-2" key={item.id}> {/* h-24 sets a fixed height of 6rem */}
                <DndItem id={item.id}>
                  {renderElementOnType(item)}
                </DndItem>
              </div>
            ))}
          </div>
        </SortableContext>
      </DndContext>
    </div>
  )
}

export default Dnd;
