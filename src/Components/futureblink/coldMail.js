import React, { useState } from 'react'
export default function ColdMail({Delay,value,setvalue,Head,parah,subhead,selectionList,onClick}) {
        const [leads,setleads] = useState('');
  return (
    <div>
      <div class="container relative mx-auto p-2 h-[80vh] ">
      { Head && <h1 className=' text-xl'>{Head}</h1>}
      {parah &&<p>{parah}</p>}
    {subhead && <label for="options" class="block mb-2 text-sm font-medium text-gray-700">{subhead}</label>}
    { selectionList && <select id="options" class="w-full p-2 border border-gray-300 rounded-md" onChange={(e)=>setvalue(e.target.value)}>
      <option value="select a Lead" unselectable='off' disabled>select a Lead</option>
      {
        selectionList.map((item)=>{
      return <option value={item}>{item}</option>
        })
      }
    </select>}
    {Delay &&<>
     <label for="value" class="block mb-2 text-sm font-medium text-gray-700">{subhead}</label>
     <input id="value"  type="text" class="w-full p-2 border border-gray-300 rounded-md" onChange={(e)=>setvalue({...value,waitvalue:e.target.value})}/>
     <label for="wait" class="block mb-2 text-sm font-medium text-gray-700">{subhead}</label>
     <select id="wait" class="w-full p-2 border border-gray-300 rounded-md" onChange={(e)=>setvalue({...value,waitdays:e.target.value})}>
      <option value="select a Lead" unselectable='off' disabled>Select a type</option>

      return <option value="days">days</option>
      return <option value="weeks">weeks</option>
      return <option value="month">month</option>
      return <option value="year">year</option>
      
    </select></>}
    <button className=' bg-sky-800 text-white absolute bottom-10 left-5 py-3 px-5' onClick={onClick}>Save</button>
  </div>
    </div>
  )
}
