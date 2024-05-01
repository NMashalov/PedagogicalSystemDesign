import { Tree, NodeRendererProps} from "react-arborist";
import { useItemsStore, useStrategyStore } from "../../store";
import { TreeItem } from "../../store";
import React, { HTMLAttributes } from "react";
import {
  Button,
  Input,
  InputGroup,

  InputRightAddon,
  Text
} from "@chakra-ui/react";


import {useDraggable} from '@dnd-kit/core';

type Props = {
  name: string
} & HTMLAttributes<HTMLDivElement>

export function Draggable(props: Props) {
  const {attributes, listeners, setNodeRef} = useDraggable({
    id: `draggable_${props.name}`,
  });

  
  return (
    <button ref={setNodeRef} {...listeners} {...attributes}>
      {props.children}
    </button>
  );
}
  


function Node({ node, style, dragHandle }:  NodeRendererProps<TreeItem>) {
  /* This node instance can do many things. See the API reference. */
  return (
      <div style={style} ref={dragHandle} >
          <Draggable name={node.data.name}>
            {node.isLeaf ? "🍁" : "🗀"}
            {node.data.name}
          </Draggable>
      </div>
  );
}



const SearchBar = (props) => {

  const {searchTerm,setTerm} = useItemsStore()

  return (
    <>
      <InputGroup borderRadius={5} size="sm">
        <Input value={searchTerm} onChange={(e)=>{setTerm(e.target.value)}} type="text" placeholder="Search..." border="1px solid #949494" />
        <InputRightAddon
          p={0}
          border="none"
        >
          <Button size="sm" borderLeftRadius={0} borderRightRadius={3.3} border="1px solid #949494">
            Search
          </Button>
        </InputRightAddon>
      </InputGroup>
    </>
  );
};



/* This is the simplest tree */
export function ModelFS() {
  const {modelTree,searchTerm} = useItemsStore()
  return (
    <div>
      <Text>Модели</Text>
      <SearchBar/>
      <div className="App">
        <Tree 
          className="Tree" 
          searchTerm={searchTerm}
          initialData={modelTree} >
            {Node}
        </Tree>
      </div>
    </div>
  );
}



export function StrategyFS() {
  const {strategyTree} = useStrategyStore()
  return (
    <div>
      <Text>Стратегии</Text>
      <div className="App">
        <Tree 
          className="Tree" 
          initialData={strategyTree} >
            {Node}
        </Tree>
      </div>
    </div>
  );
}


