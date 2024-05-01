import { Handle, Position, NodeProps} from 'reactflow';
import { OverlayTrigger, Button, Tooltip, TooltipProps } from 'react-bootstrap';
import {Stack, Image, Container} from 'react-bootstrap';
import { RefAttributes, } from 'react';
import { JSX } from 'react/jsx-runtime';
import { useNavigate } from 'react-router-dom';
import { WorkStatus, setColor } from './extract_nodes_edges';
import KafkaImg from '../../../assets/etl/kafka.svg'
import CassandraImg from '../../../assets/etl/kafka.svg'
import FlinkImg from '../../../assets/etl/flink.svg'


interface ExtraField {
    name: string,
    link: string
}

type StageOverlayProps = {
  title: string,
  image: string,
  status: WorkStatus,
  extra_fields: ExtraField[]
}


function ImgOverlay(props: StageOverlayProps ) {

  const navigate =useNavigate()

  const renderTooltip = (cfg: JSX.IntrinsicAttributes & TooltipProps & RefAttributes<HTMLDivElement>) => (
    <Tooltip id="button-tooltip" {...cfg}>
      <Container>
        <Stack direction="horizontal">
            {
                props.extra_fields.map(
                    (field) => 
                    <Button onClick={() => navigate(field.link)}>
                        {field.name}
                    </Button>
                )
            }
        </Stack>
      </Container>
    </Tooltip>
  );

  return (
    <OverlayTrigger
    placement="top"
    delay={{ show: 250, hide: 500 }}
    overlay={renderTooltip}
    >
      <Container 
        >
        <Stack direction="horizontal" gap={3}>
          <Image src={props.image} alt={props.title} style=
            {{width:'30px',  height:'30px'}} 
        />
          <Stack direction="horizontal">
            <div className="p-2">{props.title}</div>
          </Stack>
        </Stack>
      </Container>
    </OverlayTrigger>
  );
}




export function AbstractExportNode(data: StageOverlayProps) {

    return (
      <div  style={{
        border: 'solid',
        borderWidth: '2px',
        borderRadius: '10px',
        borderTop:'1rem solid',
        borderTopColor:setColor(data.status),
        boxShadow: '0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19)',
        }}>
        <Handle
          className="customHandle"
          position={Position.Top}
          type="target"
          isConnectableStart={false}
        />
        <ImgOverlay {...data}/>
        <Handle
          className="customHandle"
          position={Position.Bottom}
          type="source"
          isConnectableStart={false}
        />
      </div>
  );
}

type BaseNodeProps = {
    title: string,
    status: WorkStatus,
    scheme_url: string,
}

type CassandraNodeProps  = BaseNodeProps & {
    scheme_url: string,
} 

export function CassandraNode({data} : NodeProps<CassandraNodeProps>){
    return (
        <AbstractExportNode 
            image={CassandraImg}
            title={data.title}
            status={data.status}
            extra_fields={[

                {
                    name: "Scheme",
                    link: data.scheme_url
                }
            ]}
        />
    )
}

type KafkaNodeProps = BaseNodeProps & {
    dashboard_url: string, 
}

export function KafkaNode({data}: NodeProps<KafkaNodeProps>){
    return (
        <AbstractExportNode
            image={KafkaImg}
            title={data.title}
            status={data.status}
            extra_fields={[
                    {
                        name: 'Dashboard',
                        link: data.dashboard_url
                    },
                ]
            }
        />
    )
}


type PostgresNodeProps = BaseNodeProps &{
    url: string
}


export function PostgresNode({data}: NodeProps<PostgresNodeProps>){
    return (
        <AbstractExportNode
            image={FlinkImg}
            title={`${data.title}`}
            status={data.status}
            extra_fields={[
                    {
                        name: 'Table',
                        link: data.url
                    },
                ]
            }
        />
    )
}