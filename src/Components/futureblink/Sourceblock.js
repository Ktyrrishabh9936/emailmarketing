import React from 'react'
import { BsPerson } from 'react-icons/bs'
import SourcesTemplate from './inputComponents/SourcesTemplate'
export default function Sourceblock({setCurrentView}) {
        const Template = [
                {
                        route:'LeadList',
                        image:<BsPerson fontSize={30}/>,
                        title:"Lead from List(s)",
                        des:'connect multiple list as source for this sequence'
                },
                {
                        route:'LeadList',
                        image:<BsPerson fontSize={30}/>,
                        title:"Segment by Events",
                        des:'create asegments of leadswho have engaged with email previously'
                },
                {
                        route:'LeadList',
                        image:<BsPerson fontSize={30}/>,
                        title:"Segment of List",
                        des:'create a segment of leads which match salesBlink variables'
                },
                {
                        route:'LeadList',
                        image:<BsPerson fontSize={30}/>,
                        title:"Lead from CRM integration",
                        des:'Pulls lead from your CRM integrations'
                },
        ]
  return (
    <>
    <div className="p-2">
      <h1 className=' text-xl'>Add a Source Block</h1>
      <p>pick a block & configure,any new keads that match rules will be added to sequence automatically</p>
      </div>
      <div className="">
        <h5>Sources</h5>
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
