import ReactFlow, { Edge, Node, NodeTypes, ReactFlowProvider } from 'reactflow';
 
import 'reactflow/dist/style.css';
import { ToolBarNode } from './node';
import { useState } from 'react';
 
const initialNodes : Node[]= [
    { 
      id: '1',
      position: { x: 0, y: 0 },
      type: 'ToolBarNode',
      data: { label: 'Extract' }
    },
    { 
      id: '2',
      position: { x: 0, y: 100 },
      type: 'ToolBarNode',
      data: { label: 'Filter' } 
    },
  ];
  const initialEdges : Edge[]= [
    {
      id: 'e1-2',
      source: '1',
      target: '2' 
    }
  ];


const nodeTypes: NodeTypes = {
  custom: ToolBarNode,
};

 
export function StrategyGraph(){
  const [nodes] = useState<Node[]>(initialNodes);
  const [edges] = useState<Edge[]>(initialEdges);

  return (

    <div style={{ width: '100vw', height: '100vh' }}>
      <ReactFlowProvider>   
        <ReactFlow 
          nodes={nodes} 
          edges={edges}
          fitView
          snapToGrid={true}
          nodeTypes={nodeTypes}
          snapGrid={[15, 15]}
          />
      </ReactFlowProvider>
    </div>
  )
}