import React from 'react'
import Editor from '../../components/Editor/Editor';
import { ElementsProvider } from '../../context/elementsContext';
import Preview from '../../components/Preview/Preview';

const Home = () => {
  return (
    <ElementsProvider>
        <div className='bg-slate-100 flex h-screen overflow-hidden'>
        <div className="w-3/4">
        <Editor />
        </div>
        <div className="w-1/2 flex flex-col flex-grow items-center mt-10">
            <div className="flex justify-self-end self-end mb-10 mr-16">
              <button className='bg-white py-2 px-5 rounded-3xl border border-slate-400'>Share</button>
            </div>
            <Preview />
        </div>
        </div>
    </ElementsProvider>
  )
}

export default Home;
