import { Outlet, } from "react-router-dom";
import { Container, Row } from "react-bootstrap";
import { StoreNavbar } from "./header";

import 'bootstrap/dist/css/bootstrap.min.css';


export const Core = () => {
    return (
        <Container >
            <Row className="justify-content-md-center">
                <StoreNavbar />
                <Outlet />
            </Row>
        </Container>
    )
}