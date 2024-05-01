import { Mosaic, MosaicWindow} from "react-mosaic-component";

import 'react-mosaic-component/react-mosaic-component.css';
import '@blueprintjs/core/lib/css/blueprint.css';
import '@blueprintjs/icons/lib/css/blueprint-icons.css';
import { GraphFlow  } from "./graph";
export type ViewId = 'a' | 'b' | 'c' | 'new';

const TITLE_MAP: Record<ViewId, string> = {
  a: 'Left Window',
  b: 'Top Right Window',
  c: 'Bottom Right Window',
  new: 'New Window',
};


export function Tile(){
  return (
        <Mosaic<ViewId>
            renderTile={(id, path) => (
            <MosaicWindow<ViewId> path={path} createNode={() => 'new'} title={TITLE_MAP[id]}>
              <GraphFlow />
            </MosaicWindow>
            )}
          initialValue={{
            direction: 'column',
            first:{
              direction: 'row',
              first: 'b',
              second: 'c',
            },
            second: 'a',
            splitPercentage: 80,
          }}
        />
    );
}