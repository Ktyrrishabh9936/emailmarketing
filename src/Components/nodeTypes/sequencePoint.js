import React from 'react';
import { Handle, Position } from "reactflow";
const Sequence = ({ data }) => {
  return (<>
        <Handle type='target' color='gray' style={{color:'blue'}} position={Position.Top} />
    <div style={{padding:'14px',border: '2px solid #ddd',borderRadius:'13px',backgroundColor:'#ffff',width:'250px'}}>
      <p style={{margin:'5px 10px'}} >{data.label}</p>
    </div>
            <Handle type='source' position={Position.Bottom} id='a' />
  </>
  );
};

export default Sequence;