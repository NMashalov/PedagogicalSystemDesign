import ReactFlow, { Edge, Node, ReactFlowProvider } from 'reactflow';
import { initialNodes, initialEdges, nodeTypes} from './node-edges';
import 'reactflow/dist/style.css';
import { useState } from 'react';
 

 
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