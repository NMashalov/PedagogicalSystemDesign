import  { Edge, Node, NodeTypes} from 'reactflow';
import { ToolBarNode } from './node';
import { StageStatus, StrategyTitle } from '../../../datastruct/strats';

import ExtractImg from '../../../assets/play.svg'
import FilterImg from '../../../assets/filter.svg'
import FormImg from  '../../../assets/envelope.svg'

export const nodeTypes: NodeTypes = {
    'toolbar': ToolBarNode,
  };

export const initialNodes : Node[]= [
    { 
      id: '1',
      position: { x: 0, y: 0 },
      type: 'toolbar',
      data: { 
        title: StrategyTitle.export,
        image: ExtractImg,
        status: StageStatus.yes
     }
    },
    { 
      id: '2',
      position: { x: 0, y: 100 },
      type: 'toolbar',
      data: { 
        title: StrategyTitle.filter,
        image: FilterImg,
        status: StageStatus.yes
     } 
    },
    {
        id: '3',
        position: { x: 0, y: 200 },
        type: 'toolbar',
        data:{
            title: StrategyTitle.form,
            image: FormImg,
            status: StageStatus.no
        }
    }
];

export const initialEdges : Edge[]= [
    {
      id: 'e1-2',
      source: '1',
      target: '2' 
    },
    {
        id: 'e1-2',
        source: '2',
        target: '3' 
    },
];