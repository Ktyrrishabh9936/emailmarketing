import { useState, useCallback, useMemo, useEffect } from "react";

import ReactFlow, {
    useNodesState,
    useEdgesState,
    getIncomers,
    getOutgoers,
    addEdge,
    getConnectedEdges,
} from "reactflow";
import "reactflow/dist/style.css";
import Task from "./Components/nodeTypes/Task";
import { useSelector } from "react-redux";
import Sequence from "./Components/nodeTypes/sequencePoint";
import AddBlock from "./Components/nodeTypes/create";
import SourceLabel from "./Components/nodeTypes/SourceLabel";
export default function Home() {
    const [email, setEmail] = useState("");
    const [subject, setSubject] = useState("");
    const handleSubmit = (e) => {
        e.preventDefault();
        console.log({ email, subject });
        setEmail("");
        setSubject("");
    };

    const initialNodes = useSelector((state) => state.nodes.nodes);
const initialEdges = useSelector((state) => state.nodes.edges);
const [nodes, setNodes, onNodesChange] = useNodesState(initialNodes);
const [edges, setEdges, onEdgesChange] = useEdgesState(initialEdges);
const nodeTypes = useMemo(() => ({ task: Task , AddBlock:AddBlock , sequence:Sequence,source:SourceLabel}), []);

useEffect(() => {
    setNodes(initialNodes);
    setEdges(initialEdges);
}, [initialNodes, setNodes, initialEdges, setEdges]);

const onConnect = useCallback(
    (params) => setEdges((eds) => addEdge(params, eds)),
    [setEdges]
);
    return (
        <>
        <div className="text-xl font-bold font-mono pt-4 pl-4 pb-2"><span>Email Marketing App at </span><span className=" text-sky-700">FutureBlink</span></div>
        <div style={{ height: "80vh", width: "100%", marginTop: "20px" ,backgroundColor:'#F1F1F1' }}>
            <ReactFlow
                nodes={nodes}
                edges={edges}
                onNodesChange={onNodesChange}
                onEdgesChange={onEdgesChange}
                onConnect={onConnect}
                nodeTypes={nodeTypes}
            />
            </div>
            </>
    );
}