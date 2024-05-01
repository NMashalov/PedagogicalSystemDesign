import ELK from 'elkjs/lib/elk.bundled.js';
import { ElkExtendedEdge, ElkNode } from 'elkjs/lib/elk.bundled.js';
const elk = new ELK();

const options = {
    'elk.direction': 'DOWN',
    'elk.algorithm': 'layered',
    'elk.layered.spacing.nodeNodeBetweenLayers': '100',
    'elk.spacing.nodeNode': '80',
};

  
export const getLayoutedElements = (nodes: ElkNode[], edges:  ElkExtendedEdge[]) => {
    const isHorizontal = options?.['elk.direction'] === 'RIGHT';
    const graph = {
        id: 'root',
        layoutOptions: options,
        children: nodes.map((node) => ({
        ...node,
        // Adjust the target and source handle positions based on the layout
        // direction.
        targetPosition: isHorizontal ? 'left' : 'top',
        sourcePosition: isHorizontal ? 'right' : 'bottom',

        // Hardcode a width and height for elk to use when layouting.
        width: 150,
        height: 50,
        })),
        edges: edges as unknown as ElkExtendedEdge[],
    };

    return elk
        .layout(graph)
        .then((layoutedGraph) => ({
            nodes: layoutedGraph.children?.map(
                (node) => ({
                ...node,
                position: { x: node.x, y: node.y },
            })),
            edges: layoutedGraph.edges,
            })
        )
        .catch(undefined);
};