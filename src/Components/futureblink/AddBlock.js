import React from 'react'
import { BsPerson } from 'react-icons/bs'
import SourcesTemplate from './inputComponents/SourcesTemplate'
import { TiMediaFastForward } from 'react-icons/ti'
import { MdWatch } from 'react-icons/md'
import { VscTasklist } from 'react-icons/vsc'
export default function AddBlock({setCurrentView}) {
        const Template = [
                {
                        route:'ColdMail',
                        image:<BsPerson fontSize={30}/>,
                        title:"Cold Email",
                        des:'Send an email to a lead'
                },
                {
                        route:'LeadList',
                        image:<VscTasklist fontSize={30}/>,
                        title:"Task",
                        des:'Schedule a manual task'
                },
                {
                        route:'Delay',
                        image:<MdWatch fontSize={30}/>,
                        title:"Wait/Delay",
                        des:'Add a delay between Clocks'
                },
        ]
  return (
    <>
    <div className="p-2">
      <h1 className=' text-xl'>Add Block</h1>
      <p>Click on a Block to configure and add it in sequence</p>
      </div>
      <div className="">
        <h5>Outreach</h5>
        <p>
        
        <div className=" grid grid-cols-2 gap-2">
        {Template.map((temp)=>{
               return <button onClick={()=>setCurrentView(temp.route)}><SourcesTemplate {...temp} /></button>
        })}
        </div>

        </p>
      </div>
    </>
  )
}
