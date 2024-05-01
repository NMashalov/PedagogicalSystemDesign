import {
    BaseEdge,
    EdgeLabelRenderer,
    EdgeProps,
    getBezierPath,
    useReactFlow,
  } from 'reactflow';


import { WorkStatus, setColor } from './extract_nodes_edges';
  
type FlinkLinkrops = {
    status: WorkStatus,
    title: string
}


export  function FlinkEdge({
    id,
    sourceX,
    sourceY,
    targetX,
    targetY,
    sourcePosition,
    targetPosition,
    style,
    markerEnd,
    data
  }: EdgeProps<FlinkLinkrops>) {
    const { setEdges } = useReactFlow();
    const [edgePath, labelX, labelY] = getBezierPath({
      sourceX,
      sourceY,
      sourcePosition,
      targetX,
      targetY,
      targetPosition,
    });
  
    const onEdgeClick = () => {
      setEdges((edges) => edges.filter((edge) => edge.id !== id));
    };
  
    return (
      <>
        <BaseEdge
            path={edgePath}
            markerEnd={markerEnd}
            style={{
                ...style,
                color: setColor(data?.status ?? WorkStatus.active)
            }} 
            />
        <EdgeLabelRenderer>
          <div
            style={{
              position: 'absolute',
              transform: `translate(-50%, -50%) translate(${labelX}px,${labelY}px)`,
              fontSize: 12,
              // everything inside EdgeLabelRenderer has no pointer events by default
              // if you have an interactive element, set pointer-events: all
              pointerEvents: 'all',
            }}
            className="nodrag nopan"
          >
            <button className="edgebutton" onClick={onEdgeClick}>
              {data?.title ?? ''}
            </button>
          </div>
        </EdgeLabelRenderer>
      </>
    );
  }