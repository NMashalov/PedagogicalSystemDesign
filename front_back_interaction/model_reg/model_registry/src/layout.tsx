import './layout.css'
import Split from 'react-split'
import React, { useState } from 'react'
import { DndContext, DragEndEvent, DragOverlay } from '@dnd-kit/core';
import { useItemsStore } from './store';
import { ModelCard } from './comps/modelCard/model_card';
import { Workspace } from './comps/modelCard/organaiser';

interface BodyProps{
  sidebar: React.ReactNode,
  result: React.ReactNode
}

export function Body(props: BodyProps){

  const {materializedId, addMaterializedId}= useItemsStore()
  const [activeId, setActiveId] = useState(null);

  function handleDragStart(event) {
    setActiveId(event.active.id);
  }
  
 
  function handleDragEnd(event: DragEndEvent) {
    const { active, over } = event
    if (over && over.id === 'droppable') {
      addMaterializedId(active.id)
    }
    setActiveId(null);
  }

  return (
    <DndContext onDragEnd={handleDragEnd} onDragStart={handleDragStart}>
      <div className='body main'>
        <Split 
          className="wrap"
          sizes={[25, 50, 25]}
          minSize={100}
          expandToMin={false}
          gutterSize={5}
          gutterAlign="center"
          snapOffset={30}
          dragInterval={1}
          direction="horizontal"
          cursor="col-resize"
        >
          <div className='sidebar'>
            {props.sidebar}
          </div>
          <DragOverlay>
            {activeId ? 
              <div>{activeId}</div> 
            : null}
          </DragOverlay>
          <div className='hero'>
            <Workspace>
              {materializedId.map(
                (modelId) => <ModelCard modelId={modelId}/>
              )}
            </Workspace>
          </div>
          <div className='sidebar'>
            {props.result}
          </div>
        </Split>
      </div>
    </DndContext>
  )
}

type Props = {
  children?: React.ReactNode,
};

export const Layout: React.FC<Props> = ({children}) =>{
    return (
        <div className='layout'>
          {children}
        </div>
    )
}