import React from 'react'
import { useCallback, useState } from "react";
import ReactFlow, {
  applyEdgeChanges,
  applyNodeChanges,
  addEdge,
  MiniMap,
  Controls,
  Background,
} from "reactflow";
import "reactflow/dist/style.css";
import initialNodes from "./nodes.js";
import initialEdges from "./edges.js";

export default function Flowpage() {
  const [nodes, setNodes] = useState(initialNodes);
  const [edges, setEdges] = useState(initialEdges);

  const onNodeChange = useCallback(
    (x) => setNodes((newNode) => applyNodeChanges(x, newNode)),
    [setNodes]
  );

  const onEdgeChange = useCallback(
    (x) => setEdges((eds) => applyEdgeChanges(x, eds)),
    [setEdges]
  );

  const onEdgeConnect = useCallback(
    (x) => setEdges((eds) => addEdge({ ...x, animated: true }, eds)),
    [setEdges]
  );
  return (
    <>
      <ReactFlow
      nodes={nodes}
      edges={edges}
      onNodesChange={onNodeChange}
      onEdgesChange={onEdgeChange}
      onConnect={onEdgeConnect}
    >
      <MiniMap />
      <Controls />
      <Background />
    </ReactFlow>

    </>
  )
}
