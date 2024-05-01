import { VStack, Button, Tag, Text, Divider, Collapse, HStack,  Tab, TabList, TabPanel, TabPanels, Tabs } from "@chakra-ui/react" 
import Editor from "@monaco-editor/react";
import React, { useState} from 'react'

import { ModelForm } from "./model_form";
import { VersionTable } from "./versioning";
import { Excalidraw } from "@excalidraw/excalidraw";
import { CloseIcon } from '@chakra-ui/icons'



function Icons(){
  return (
      <HStack className='iconGroup'>
          <Text>Лого</Text>
      </HStack>
  )
}


function UsageCode() {

  const code = `
  import catboost
  import pandas as pd
  pd.read_csv()
  `;
  return (
    <Editor
          height="100px"
          width='400px'
          language="python"
          theme="vs-light"
          value={code}
        />
  );
}

function ModelCardHeader({children}){
  return (
    <HStack>
        <Text fontSize='1xl'>{children}</Text>   
        <Tag>Catboost</Tag>
        <CloseIcon/>
    </HStack>
  )
}

function Status(){}
function ModelIntroCard(){
  const [text] = useState('Text')
  return (
      <div>
        <Text>{text}</Text>
        <div className="modelImage">
            <Excalidraw/>
        </div>
    </div>
  )
}

const cardTabs = [
  {
    name: 'Info',
    comp: <ModelIntroCard/>
  },
  {
    name: 'Edit',
    comp: <ModelForm/>
  },
  {
    name: 'Code',
    comp: <UsageCode/>
  },
  {
    name: 'Aux',
    comp: <VersionTable/>
  },
  {
    name:'Status',
    comp: <Status/>  
  }
]

export function ModelCard({modelId}){
    const [tabs] = useState(cardTabs)

    return (
      <div className='modelCard'>
        <ModelCardHeader>
          {modelId}
        </ModelCardHeader>
        <Tabs variant='enclosed'>
          <TabList>
              {tabs.map(({name}) => <Tab>{name}</Tab>)}
          </TabList>
          <TabPanels>
            {tabs.map(({comp}) => <TabPanel>{comp}</TabPanel>)}   
          </TabPanels>
      </Tabs>
    </div> 
    ) 
}

