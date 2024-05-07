import React, { useCallback, useRef, useState } from 'react';
import ReactFlow, {
  useNodesState,
  useEdgesState,
  addEdge,
  useReactFlow,
  ReactFlowProvider,
  Controls,
  MiniMap,
} from 'reactflow';
import 'reactflow/dist/style.css';

import './graph.css';
import { GraphMenu,  MenuProps } from '../comps/graphMenu';
import { initialNodes } from './nodes';


let id = 1;
const getId = () => `${id++}`;

const Graph = () => {
  const reactFlowWrapper = useRef(null);
  const connectingNodeId = useRef(null);
  const [nodes, setNodes, onNodesChange] = useNodesState(initialNodes);
  const [edges, setEdges, onEdgesChange] = useEdgesState([]);
  const { screenToFlowPosition } = useReactFlow();
  // const [rfInstance, setRfInstance] = useState(null);
  const [menu, setMenu] = useState<MenuProps>(null);

  // const { setViewport } = useReactFlow();


  // const onRestore = useCallback(() => {
  //   const restoreFlow = async (flowKey: string) => {
  //     localStorage.getItem(flowKey)
  //     const flow = JSON.parse();

  //     if (flow) {
  //       const { x = 0, y = 0, zoom = 1 } = flow.viewport;
  //       setNodes(flow.nodes || []);
  //       setEdges(flow.edges || []);
  //       setViewport({ x, y, zoom });
  //     }
  //   };

  //   restoreFlow();
  // }, [setNodes, setViewport]);


  // const onSave = useCallback(() => {
  //   if (rfInstance) {
  //     const flow = rfInstance.toObject();
  //     localStorage.setItem(flowKey, JSON.stringify(flow));
  //   }
  // }, [rfInstance]);

  // const onAdd = useCallback(() => {
  //   const newNode = {
  //     id: getNodeId(),
  //     data: { label: 'Added node' },
  //     position: {
  //       x: Math.random() * window.innerWidth - 100,
  //       y: Math.random() * window.innerHeight,
  //     },
  //   };
  //   setNodes((nds) => nds.concat(newNode));
  // }, [setNodes]);


  const onConnect = useCallback(
    (params) => {
      // reset the start node on connections
      connectingNodeId.current = null;
      setEdges((eds) => addEdge(params, eds))
    },
    [],
  );

  const onConnectStart = useCallback((_, { nodeId }) => {
    connectingNodeId.current = nodeId;
  }, []);

  const onNodeContextMenu = useCallback(
    (event, node) => {
      // Prevent native context menu from showing
      event.preventDefault();

      // Calculate position of the context menu. We want to make sure it
      // doesn't get positioned off-screen.
      const pane = ref.current.getBoundingClientRect();
      setMenu({
        id: node.id,
        top: event.clientY,
        left: event.clientX,
        right: pane.width - event.clientX,
        bottom: pane.height - event.clientY,
      });
    },
    [setMenu],
  );

  const onConnectEnd = useCallback(
    (event) => {
      if (!connectingNodeId.current) return;

      const targetIsPane = event.target.classList.contains('react-flow__pane');

      if (targetIsPane) {
        // we need to remove the wrapper bounds, in order to get the correct position
        const id = getId();
        const newNode = {
          id,
          position: screenToFlowPosition({
            x: event.clientX,
            y: event.clientY,
          }),
          data: { label: `Node ${id}` },
          origin: [0.5, 0.0],
        };

        setNodes((nds) => nds.concat(newNode));
        setEdges((eds) =>
          eds.concat({ id, source: connectingNodeId.current, target: id }),
        );
      }
    },
    [screenToFlowPosition],
  );
  const [menuOn,setMenuOn] = useState(false)


  const onPaneClick = useCallback(() => setMenu(null), [setMenu]);


  return (
    <div className="wrapper" ref={reactFlowWrapper}>
      <ReactFlow
        nodes={nodes}
        edges={edges}
        onNodesChange={onNodesChange}
        onEdgesChange={onEdgesChange}
        onConnect={onConnect}
        onConnectStart={onConnectStart}
        onContextMenu={()=>setMenuOn(true)}
        onConnectEnd={onConnectEnd}
        onPaneClick={onPaneClick }
        onNodeContextMenu={onNodeContextMenu}
        fitView
        fitViewOptions={{ padding: 2 }}
        nodeOrigin={[0.5, 0]}
      />
      <Controls />
      {menuOn && <GraphMenu onClick={onPaneClick} {...menu}/>}
      <MiniMap pannable zoomable/>
    </div>
  );
};

export function GraphCompositionFlow(){
  return (
    <div className='dndflow'>
      <ReactFlowProvider>
        <Graph/>
      </ReactFlowProvider>
    </div>
  )
}



