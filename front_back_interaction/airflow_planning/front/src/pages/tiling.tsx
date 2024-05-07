import { Mosaic, MosaicWindow} from "react-mosaic-component";

import { GraphFlow  } from "./graph";


import 'react-mosaic-component/react-mosaic-component.css';
import '@blueprintjs/core/lib/css/blueprint.css';
import '@blueprintjs/icons/lib/css/blueprint-icons.css';


export type ViewId = 'Workflow' | 'Composition' | 'New ';

const TITLE_MAP: Record<ViewId, string> = {
  Workflow: 'Workflow',
  Composition: 'Bottom Right Window',
  New: 'New'
};


export function Tile(){
  return (
        <Mosaic<ViewId>
          renderTile={(id, path) => (
            <MosaicWindow<ViewId> 
              path={path} 
              createNode={() => 'New'}
              title={TITLE_MAP[id]}>
              <GraphFlow />
            </MosaicWindow>
            )
          }
          initialValue={{
            direction: 'column',
            first: 'Workflow',
            second: 'Composition',
            splitPercentage: 80,
          }}
          className='mosaic-blueprint-theme'
          blueprintNamespace="bp5"
        />
    );
}