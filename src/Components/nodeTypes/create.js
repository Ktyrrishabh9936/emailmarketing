import React, { useState } from 'react';
import './create.css';
import { Button, Modal, Flowbite } from "flowbite-react";
import custommodalTheme from './custommodalTheme';
import Sourceblock from "../futureblink/Sourceblock";
import Leadlist from "../futureblink/leadlist";
import { CgAddR } from "react-icons/cg";
const AddBlock = ({data}) => {
  const [openModal, setOpenModal] = useState(false);
  const [currentView, setCurrentView] = useState('SourceBlock');
  const handleModal =()=>{
        setCurrentView('SourceBlock');
        setOpenModal(true);
  }
  const renderView=()=>{
  switch (currentView) {
    case 'SourceBlock':
        return <Sourceblock setCurrentView={setCurrentView}/>
    case 'LeadList':
        return <Leadlist/>

    default:
        break;
}
  }
  console.log(data)
  return (
    <div>
    <Flowbite theme={{theme:custommodalTheme}} >
      <Modal show={openModal} onClose={() => setOpenModal(false)} >
        <Modal.Body>
          <div className="space-y-6">
            <p className="text-base leading-relaxed text-gray-500 dark:text-gray-400">
            {
                    renderView()
                }
            </p>
          </div>
        </Modal.Body>
        <Modal.Footer>
          <Button onClick={() => setOpenModal(false)}>I accept</Button>
          <Button color="gray" onClick={() => setOpenModal(false)}>
            Decline
          </Button>
        </Modal.Footer>
      </Modal>
      </Flowbite>
    <div className="custom-node" onClick={handleModal} >
        <CgAddR fontSize={30} style={{marginLeft:'auto',marginRight:'auto'}}/>
      <p className="title" >Add Lead Source</p>
      <p className="description "> Click to add leads from List or CRM</p>
      </div>
    </div>
  );
};

export default AddBlock;