import { ChakraProvider } from '@chakra-ui/react'
import { Layout } from './layout'
import  { Toaster } from 'react-hot-toast';  
import { Body } from './layout';
import { Footer } from './comps/footer';
import { ModelFS, StrategyFS } from './comps/file_system/file_system'
import { Header } from './comps/header';
import { ToolBar } from "./comps/navbar"


function App() {

  

  return (
    <ChakraProvider>
      <Layout>
        <Header/>
        <ToolBar/>
          <Body
            // sidebar={<div/>}
            sidebar={<ModelFS/>}
            result={<StrategyFS/>}
          />
        <Footer/>
      </Layout>
      <Toaster/>
    </ChakraProvider> 
  )
}

export default App
