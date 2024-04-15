import {  useState } from "react"
import { Offcanvas, Button, ListGroup, Badge} from "react-bootstrap"
import { IStrategy } from "../../datastruct/strats";
import { useNavigate } from "react-router-dom";



function StrategyItem(strategy: IStrategy){
    const navigate = useNavigate()
    return (
        <ListGroup.Item
            as="li"
            className="d-flex justify-content-between align-items-start"
        >
            <div className="ms-2 me-auto">
            <div className="fw-bold">{strategy.title}</div>
                {strategy.description}
            </div>
            <Badge bg="primary" pill>
                14
            </Badge>
            <Button onClick={()=>navigate(strategy.title)}>
                Описание
            </Button>
      </ListGroup.Item>
    )
}

export interface StrategyOffCanvasProps {
    name: string;
    strategies: IStrategy[];
}


export function StrategyOffcanvas(props: StrategyOffCanvasProps) {
    const [show, setShow] = useState<boolean>(true);
    // const [strategies, setStrategies] = useState<IStrategy[]>([]);
  
    const handleClose = () => setShow(false);
  
    return (
      <> 
        <Offcanvas show={show} onHide={handleClose}>
          <Offcanvas.Header closeButton>
            <Offcanvas.Title>Стратегии</Offcanvas.Title>
          </Offcanvas.Header>
          <Offcanvas.Body>
            <ListGroup as="ol" numbered>
                {props.strategies.map((strat) => <StrategyItem {...strat}/>)}
            </ListGroup>
          </Offcanvas.Body>
        </Offcanvas>
      </>
    );
  }
