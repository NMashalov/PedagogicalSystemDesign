import  { Edge, Node, NodeTypes, EdgeTypes} from 'reactflow';
import { CassandraNode, KafkaNode,PostgresNode } from './node';
import { FlinkEdge } from './edge';

export enum WorkStatus {
    restarting='restarting',
    active='active',
    error='error'
}

    
export function setColor(status: WorkStatus){
  switch(status){
      case WorkStatus.active: return "green";
      case WorkStatus.error: return "red";
  }
}


export const extractNodeTypes: NodeTypes = { 
    kafka: KafkaNode, 
    cassandra: CassandraNode,
    postgres: PostgresNode
};

export const extractEdgeTypes: EdgeTypes = {
  flink: FlinkEdge 
}

const position = { x: 0, y: 0 };


enum ExportLayers{
  extract='extract',
  feature='feature',
  strategy='strategy',
  transfer='transfer'
}

type KafkaSystem =  {
  [key in ExportLayers] : Node[]
}

const KafkaNodes: KafkaSystem  = {
  extract: [
    {
      id: 'KafkaMobile',
      type: 'kafka',
      data: { 
          title: 'Mobile',
          status: WorkStatus.active,
          dashboard_url: '',
      },
      position,
    },
    {
      id: 'KafkaWeb',
      type: 'kafka',
      data: { 
          title: 'Web',
          status: WorkStatus.active,
          dashboard_url: '',
      },
      position,
    },
  ],
  feature: [
    {
      id: 'KafkaEvents',
      type: 'kafka',
      data: { 
          title: 'Event',
          status: WorkStatus.active,
          dashboard_url: '',
      },
      position,
    },
  ],
  strategy: [
    {
      id: 'KafkaPush',
      type: 'kafka',
      data: { 
          title: 'Push',
          status: WorkStatus.active,
          dashboard_url: '',
      },
      position,
    },
    {
      id: 'KafkaCall',
      type: 'kafka',
      data: { 
          title: 'Call',
          status: WorkStatus.active,
          dashboard_url: '',
      },
      position,
    }
  ],
  transfer: [
    {
      id: 'KafkaBus',
      type: 'kafka',
      data: { 
          title: 'Bus',
          status: WorkStatus.active,
          dashboard_url: '',
      },
      position,
    },
  ]
};

export const initialNodes: Node[] = [
  ...Object.values(KafkaNodes).flat()
]

export const initialEdges: Edge[] = [
  { id: 'MobileToEvents', source: 'KafkaMobile', target: 'KafkaEvents', type: 'flink', 
    data: {
      title: 'Mob',
      status: WorkStatus.active
    }
  },
  { id: 'WebToEvents', source: 'KafkaWeb', target: 'KafkaEvents', type: 'flink', 
    data: {
      title: 'Web',
      status: WorkStatus.active
    }
  },
  { id: 'EventsToPush', source: 'KafkaEvents', target: 'KafkaPush', type: 'flink', 
    data: {
      title: 'Any',
      status: WorkStatus.active
    }
  },
  { id: 'EventsToCall', source: 'KafkaEvents', target: 'KafkaCall', type: 'flink', 
    data: {
      title: 'Daytime',
      status: WorkStatus.active
    }
  },
  { id: 'CallToBus', source: 'KafkaCall', target: 'KafkaBus', type: 'flink', 
    data: {
      title: '',
      status: WorkStatus.active
    }
  },
  { id: 'PushToBus', source: 'KafkaPush', target: 'KafkaBus', type: 'flink', 
    data: {
      title: 'Daytime',
      status: WorkStatus.active
    }
  },
];