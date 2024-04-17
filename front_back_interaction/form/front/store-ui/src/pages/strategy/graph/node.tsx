import { Handle, Position, NodeProps} from 'reactflow';
import { OverlayTrigger, Button, Tooltip, TooltipProps } from 'react-bootstrap';
import {Stack, Image,Spinner, Container} from 'react-bootstrap';
import { RefAttributes } from 'react';
import { JSX } from 'react/jsx-runtime';
import { useNavigate } from 'react-router-dom';
import { StageStatus, StrategyTitle } from '../../../datastruct/strats';
import { Routes } from '../../../datastruct/pages';


type ImgOverlayProps = {
  title: StrategyTitle,
  image: string,
  status: StageStatus
}


function ImgOverlay(props: ImgOverlayProps) {

  const navigate =useNavigate()

  const renderTooltip = (cfg: JSX.IntrinsicAttributes & TooltipProps & RefAttributes<HTMLDivElement>) => (
    <Tooltip id="button-tooltip" {...cfg}>
      <Container>
        <Stack direction="horizontal" gap={1}>
          <Button variant="success" onClick={() => navigate(`/${Routes.description}/${props.title}`)}>Описание</Button>
          <Button variant="success" onClick={() => navigate(`/${Routes.settings}/${props.title}`)}>Настройки</Button>
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
      <Container>
        <Stack direction="horizontal" gap={3}>
          <Image src={props.image} alt={props.title} style={{width:'30px',  height:'30px'}} />
          <Stack direction="horizontal">
            <div className="p-2">{props.title}</div>
            {
              props.status == StageStatus.yes  ?
                <Spinner style={{width:"15px", height:'15px'}} animation="border" variant="success" />
              : <Spinner style={{width:"15px", height:'15px'}} animation="border" variant="danger" />
            }

          </Stack>
        </Stack>
      </Container>
    </OverlayTrigger>
  );
}



export function ToolBarNode({data}: NodeProps<ImgOverlayProps>) {


  return (
      <div  style={{
        border: 'solid',
        borderWidth: '2px',
        borderRadius: '10px',
        }}>
        <Handle
          className="customHandle"
          position={Position.Left}
          type="source"
          isConnectableStart={false}
        />
        <ImgOverlay {...data}/>
        <Handle
          className="customHandle"
          position={Position.Right}
          type="target"
          isConnectableStart={false}
        />
      </div>

  );
}