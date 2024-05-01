import { initialNodes, initialEdges } from './extract_nodes_edges';
import {useCallback, useLayoutEffect } from 'react';
import ReactFlow, {
  ReactFlowProvider,
  useNodesState,
  useEdgesState,
  useReactFlow,
  Background,
  Controls,
  Edge,
  Node
} from 'reactflow';


import {getLayoutedElements} from './elk'

import 'reactflow/dist/style.css';
import { extractEdgeTypes, extractNodeTypes } from './extract_nodes_edges';
import { ElkExtendedEdge, ElkNode } from 'elkjs';


// Elk has a *huge* amount of options to configure. To see everything you can
// tweak check out:
//
// - https://www.eclipse.org/elk/reference/algorithms.html
// - https://www.eclipse.org/elk/reference/options.html



function ExtractGraph() {
  const [nodes, setNodes] = useNodesState(initialNodes);
  const [edges, setEdges] = useEdgesState(initialEdges);
  const { fitView } = useReactFlow();

  const onLayout = useCallback(
    () => {
      getLayoutedElements(nodes as ElkNode[], edges as unknown as ElkExtendedEdge[]).then(
        (props) => {
        setNodes(props?.nodes as Node<unknown>[] ); 
        setEdges(props?.edges as Edge[] |undefined ?? []);
      });
    },
    [nodes, edges]
  );

  // Calculate the initial layout on mount.
  useLayoutEffect(() => {
    onLayout();
    fitView();
  }, [nodes, edges]);

  return (
        <ReactFlow
          nodes={nodes}
          edges={edges}
          nodeTypes={extractNodeTypes}
          edgeTypes={extractEdgeTypes}
          fitView
        >
          <Background />
          <Controls />
        </ReactFlow>
  );
}

export function ExtractFlow(){
    return (
    <div style={{ 
      width: '80%',
      height: '1200px',
      marginLeft: '200px', 
      boxShadow: '0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19)',
    }}>
      <ReactFlowProvider> 
        <ExtractGraph/>
      </ReactFlowProvider>
    </div>
  )
}