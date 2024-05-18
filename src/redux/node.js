import { createSlice } from "@reduxjs/toolkit";

const addNode = (object) => {
    const newNode = {
        id: `${Number(object.id) + 1}`,
        type: "task",
        position: { x:400, y: object.position.y + 120 },
        data: { value: "" },
    };
    return newNode;
};

const addEdge = (object) => {
    const newEdge = {
        id: `${object.id}->${Number(object.id) + 1}`,
        source: `${object.id}`,
        target: `${Number(object.id) + 1}`,
    };
    return newEdge;
};

export const nodeSlice = createSlice({
        name: "nodes",
        initialState: {
            source:1,
            nodes: [
                {
                    id: "1",
                    type: "AddBlock",
                    position: { x: 700, y: 10 },
                },
            ],
            edges: [],
        },
        reducers: {
            setNodes: (state, action) => {
                let nodes = state.nodes;
                state.nodes = [...state.nodes, addNode(nodes[nodes.length - 1])];
                state.edges = [...state.edges, addEdge(nodes[nodes.length - 1])];
            },
            setSource: (state, action) => {
                const flowStart = [{
                    id: `B${state.source}`,
                    type: "source",
                    position: { x: 300*state.source, y: 150 },
                    data:{
                        title:action.payload.title,
                        description:action.payload.description,
                    }
                },
                {
                    id: `Q${state.source}`,
                    type: "sequence",
                    position: { x: 300*state.source, y: 300 },
                    data: { 
                        label: <p className="">Sequence Start Point</p>}
                },
                {
                    id: `B${state.source}-1`,
                    type: "task",
                    position: { x: 300*state.source, y: 400 },
                    data: { value: "" },
                },
            ];
            const edgeFlow = [
                {
                id: `B${state.source}->Q${state.source}`,
                source: `B${state.source}`,
                target: `Q${state.source}`,
            },
                {
                id: `Q${state.source}->B${state.source}-1`,
                source: `Q${state.source}`,
                target: `B${state.source}-1`,
            },
        ];
                state.source += 1;
                state.nodes = [...state.nodes, ...flowStart];
                state.edges = [...state.edges,...edgeFlow ];
            },
            updateNodeValue: (state, action) => {
                let nodes = [...state.nodes];
                let objectIndex = nodes.findIndex((obj) => obj.id === action.payload.id);
                if (objectIndex !== -1) {
                    state.nodes[objectIndex] = {
                        ...nodes[objectIndex],
                        data: { value: action.payload.value },
                    };
                }
            },
        },
    });
    
    // Action creators are generated for each case reducer function
    export const { setNodes,setSource ,updateNodeValue } = nodeSlice.actions;
    
    export default nodeSlice.reducer;