import React, { useState } from 'react'
import { setSource } from '../../redux/node';
import { useDispatch } from 'react-redux';

export default function Leadlist() {
        const [leads,setleads] = useState('');
        const dispatch = useDispatch();
  return (
    <div>
      <div class="container mx-auto p-2 h-[80vh] ">
      <h1 className=' text-xl'>Lead from List(s)</h1>
      <p>connect multiple list as source for this sequence</p>
      <p>{leads}</p>
    <label for="options" class="block mb-2 text-sm font-medium text-gray-700">Select an option:</label>
    <select id="options" class="w-full p-2 border border-gray-300 rounded-md" onChange={(e)=>setleads(e.target.value)}>
      <option value="select a Lead" unselectable='off' disabled>select a Lead</option>
      <option value="Test List">Test List</option>
      <option value="Test List Example">Test List Example</option>
      <option value="SalesBlink Demo (exciting Customers)">SalesBlink Demo (exciting Customers)</option>
      <option value="SalesBlink Demo">SalesBlink Demo</option>
      <option value="AppSectionCon 2023">AppSectionCon 2023</option>
      <option value="List Text">List Text</option>
      <option value="introduction List">introduction List</option>

    </select>
    <button onClick={()=>{
      dispatch(setSource({title:"Lead From",description:leads}))
    }}>Save</button>
  </div>
    </div>
  )
}
