import React, { useState } from 'react';
import {DndContext, useDraggable, useDroppable} from '@dnd-kit/core';
import {Box,HStack, Button, VStack} from '@chakra-ui/react';

function Draggable(props) {
  const {attributes, listeners, setNodeRef, transform} = useDraggable({
    id: `draggable_${props.id}`,
  });
  const style = transform ? {
    transform: `translate3d(${transform.x}px, ${transform.y}px, 0)`,
  } : undefined;

  
  return (
    <Button
      ref={setNodeRef} 
      style={style} 
      {...listeners} 
      {...attributes}
      
    >
      {props.children}
    </Button>
  );
}

function Droppable(props) {
  const {isOver, setNodeRef} = useDroppable({
    id: props.id,
  });
  const style = {
    color: isOver ? 'green' : 'grey',
  };
  
  
  return (
    <Box 
      ref={setNodeRef} 
      style={style}
      w='100%'
      h='200px'
      bgGradient='linear(to-r, gray.300, yellow.400, pink.200)'
    >
      {props.children}
    </Box>
  );
}

export function DnDTest(){
  const [isDropped, setIsDropped] = useState(false);
  const draggableMarkup = (
    <Draggable id='1'>Drag me</Draggable>
  );
  
  return (
    <DndContext onDragEnd={handleDragEnd}>
      <VStack h='500px' w='500px'> 
      {parent === null ? draggableMarkup : null}

      {containers.map((id) => (
        // We updated the Droppable component so it would accept an `id`
        // prop and pass it to `useDroppable`
        <Droppable key={id} id={id}>
          {parent === id ? draggableMarkup : 'Drop here'}
        </Droppable>
      ))}
      </VStack>
    </DndContext>
  );
  
  function handleDragEnd(event) {
    if (event.over && event.over.id === 'droppable') {
      setIsDropped(true);
    }
  }
}