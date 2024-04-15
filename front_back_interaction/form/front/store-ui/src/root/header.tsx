import {Tabs, Tab, Container, Image, Stack} from "react-bootstrap";
import  {useNavigate} from  "react-router-dom";
import { Routes } from "../datastruct/pages";
import CarWheel from '../assets/car-wheel.svg'
import { useState } from "react";
import 'bootstrap/dist/css/bootstrap.min.css';

export function StoreNavbar() {
    const navigate = useNavigate()
    const [state, setState] = useState<string>(Routes.home)
    
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
        <Tab eventKey={Routes.home} title="Главная"/>
        <Tab eventKey={Routes.panel} title="Панель"/>
        <Tab eventKey={Routes.event} title="События"/>
        <Tab eventKey={Routes.strategy} title="Стратегия"/>
        <Tab eventKey={Routes.settings} title="Настройки"/>
      </Tabs>
    </Container>
    );
}