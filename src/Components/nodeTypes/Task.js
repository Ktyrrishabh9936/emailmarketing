import { useState } from "react";
import { Handle, Position } from "reactflow";
import { useSelector, useDispatch } from "react-redux";
import { setNodes, updateNodeValue } from "../../redux/node";
import { Button, Modal, Flowbite } from "flowbite-react";
import { CgAddR } from "react-icons/cg";
import './Task.css'
import { BsMailbox, BsPerson } from "react-icons/bs";
import custommodalTheme from "./custommodalTheme";
import Sourceblock from "../futureblink/Sourceblock";
import Leadlist from "../futureblink/leadlist";
import AddBlock from "../futureblink/AddBlock";
import ColdMail from "../futureblink/coldMail";
import { GiWatch } from "react-icons/gi";
export default function Task({data}) {
    const initialNodes = useSelector((state) => state.nodes.nodes);
    const [value, setValue] = useState(null);
    const dispatch = useDispatch();
    const [currentView, setCurrentView] = useState('AddBlock');
  const [openModal, setOpenModal] = useState(false);
  const [ColdMailvalue,setColdMailvalue] = useState('');
  const [wait,setWait] = useState(null);
  const renderView =()=>{
    switch (currentView) {
        case 'AddBlock':
            return <AddBlock setCurrentView={setCurrentView}/>
        case 'ColdMail':
          const property = {
            image:<BsMailbox fontSize={30}/>,
            Head:'Cold Email',
            parah:'Send an email to a lead',
            subhead:'Email Template',
            selectionList:[
              'Ai Assisted - Follow Up 3',
              'Ai Assisted - Follow Up 2',
              'Ai Assisted - Follow Up 1',
              'Ai Assisted ',
              'SalesBlink Demo (Exciting Customers) ',
              'SalesBlink Demo ',
              'Web-Application - Follow Up 1',
            ],
            onClick:()=>{
              setValue({
                image:property.image,
                title:property.Head,
                description:ColdMailvalue
              })
            }
          }
            return <ColdMail  setvalue = {setColdMailvalue} {...property}/>
        case 'Delay':
          const delay = {
            image:<GiWatch fontSize={30}/>,
            Head:'Wait/Delay',
            parah:'Add a delay between Clocks',
            Delay:true,
            onClick:()=>{
              setValue({
                image:delay.image,
                title:delay.Head,
                description:`Wait ${wait.waitvalue} ${wait.waitdays}`
              })

              dispatch(setNodes());
            }
          }
            return <ColdMail  value={wait} setvalue = {setWait} {...delay}/>
        default:
            break;
    }
  }
return (
        <>
            <Handle type='target' position={Position.Top} />
                {value && <div className="Template">
                    <div className="temp-image">
                            {value.image}
                        </div>
                        <div className="temp-data">
                            <h4 className="temp-title">{value.title}</h4>
                            <p className="temp-des">{value.description}</p>
                        </div>
                </div>}
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
                  {  
                 !value && <div className="addBtn">
                        <CgAddR fontSize={60} style={{marginLeft:'auto',marginRight:'auto'}}  onClick={() =>
                        { 
                        dispatch(setNodes());
                        setOpenModal(true)
                        setCurrentView('AddBlock');
                        }}/>
                        </div>
                      }

            <Handle type='source' position={Position.Bottom} id='a' />
        </>
    );
}