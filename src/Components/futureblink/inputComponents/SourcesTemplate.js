import React from 'react'
import  './SourcesTemplate.css';
export default function SourcesTemplate({image,title,des}) {
  return (
    <>
     <div className=" shadow-sm p-3 flex rounded-md">
                    <div className="p-2 rounded-md h-min text-purple-500 bg-pink-300 m-auto">
                            {image}
                        </div>
                        <div className=" flex  flex-col w-full px-2 h-min my-auto text-left">
                            <h6 className="my-1 w-full text-md">{title}</h6>
                            <p className=" text-xs w-full m-0">{des}</p>
                        </div>
                </div>
    </>
  )
}
