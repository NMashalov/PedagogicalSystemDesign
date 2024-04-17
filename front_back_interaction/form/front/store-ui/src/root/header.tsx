import {Tabs, Tab, Container, Image, Stack} from "react-bootstrap";
import  {useLocation, useNavigate} from  "react-router-dom";
import { Routes, RoutesNames } from "../datastruct/pages";
import CarWheel from '../assets/car-wheel.svg'
import { useEffect, useState } from "react";
import 'bootstrap/dist/css/bootstrap.min.css';


const routeNames: RoutesNames =  {
  home: 'Главная',
  panel: "Панель",
  event: 'События',
  strategy: 'Стратегия',
  description: 'Описание',
  settings: 'Настройки',
  map: 'Карта'
}

{/* <Tab eventKey={Routes.home} title="Главная"/>
        <Tab eventKey={Routes.panel} title="Панель"/>
        <Tab eventKey={Routes.event} title="События"/>
        <Tab eventKey={Routes.strategy} title="Стратегия"/>
        
 */}

export function StoreNavbar() {
    const navigate = useNavigate()
    const [state, setState] = useState<string>(Routes.home)
    const [routes] = useState(routeNames)

    const location = useLocation();

    useEffect(() => {
      console.log(location.pathname.split('/')[1])
      setState(`/${location.pathname.split('/')[1]}`)
    },[location])
    
    return (
      <Container>
        <Stack direction="horizontal" gap={3}>
          <Image  width={30} height={30} src={CarWheel}/> 
          <h1>Store</h1>
        </Stack>
        <Tabs
          id="controlled-tab-example"
          activeKey={state}
          onSelect={(k) => {
            setState(k ?? Routes.home);
            navigate(k ?? Routes.home)
          }}
          className="mb-3"
        >
          {
            Object.entries(routes).map(
              ([key,value]) => (
                <Tab id={key} eventKey={key} title={value}/>
              )
            )
          }
        
      </Tabs>
    </Container>
    );
}