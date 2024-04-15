import { Handle, NodeToolbar, Position, useStore, NodeProps} from 'reactflow';

type NodeData = {
    value: number;
    forceToolbarVisible: boolean;
    toolbarPosition: Position;
};


const connectionNodeIdSelector = (state) => state.connectionNodeId;


export function ToolBarNode({id, data}: NodeProps<NodeData>) {
  const connectionNodeId = useStore(connectionNodeIdSelector);

  const isConnecting = !!connectionNodeId;
  const isTarget = connectionNodeId && connectionNodeId !== id;
  const label = isTarget ? 'Drop here' : 'Drag to connect';

  return (
    <div className="customNode">
        <div
            className="customNodeBody"
            style={{
            borderStyle: isTarget ? 'dashed' : 'solid',
            backgroundColor: isTarget ? '#ffcce3' : '#ccd9f6',
            }}
        >
            <NodeToolbar
                isVisible={data.forceToolbarVisible || undefined}
                position={data.toolbarPosition}
            >

            </NodeToolbar>

        {!isConnecting && (
          <Handle className="customHandle" position={Position.Right} type="source" />
        )}

        <Handle
          className="customHandle"
          position={Position.Left}
          type="target"
          isConnectableStart={false}
        />
        {label}
      </div>
    </div>
  );
}