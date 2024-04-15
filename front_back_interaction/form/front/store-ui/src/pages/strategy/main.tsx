import { Container } from "react-bootstrap";
import { StrategyOffcanvas } from "./side";
import { IStrategy, StrategyTitle} from "../../datastruct/strats";
import { StrategyGraph } from "./graph";

const strategies: Array<IStrategy> = [
  {
    title: StrategyTitle.export,
    description:'Exports',
    markdownUrl: 'strategy_md/export.md'
  }
]


export default function Strategy() {
  return (
    <Container>
      <StrategyGraph/>
      <StrategyOffcanvas name='Стратегии' strategies={strategies} />
    </Container>
  );
}