import React from 'react'
import './create.css'
import { BsPerson } from 'react-icons/bs'
import { Handle, Position } from "reactflow";

export default function SourceLabel({data}) {
  return (
    <div>
        <Handle type='target' position={Position.Top} />
      <div className="Template" style={{width:'250px'}}>
                    <div className="temp-image">
                            {data.image ?data.image :<BsPerson fontSize={30}/>}
                        </div>
                        <div className="temp-data">
                            <h4 className="temp-title">{data.title}</h4>
                            <p className="temp-des">{data.description}</p>
                        </div>
                </div>
            <Handle type='source' position={Position.Bottom} id='a' />
    </div>

  )
}
