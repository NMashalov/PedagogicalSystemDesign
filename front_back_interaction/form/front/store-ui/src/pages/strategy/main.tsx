import { Container } from "react-bootstrap";
// import { StrategyOffcanvas } from "./description/side";
import { StrategyGraph } from "./graph/graph";



export default function Strategy() {
  return (
    <Container>
      <StrategyGraph/>
      {/* <StrategyOffcanvas name='Стратегии' strategies={strategies} /> */}
    </Container>
  );
}