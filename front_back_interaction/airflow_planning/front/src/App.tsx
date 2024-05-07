import { Alignment, Button, Navbar } from '@blueprintjs/core'
import { Tile } from './pages/tiling'

function Header(){
  return (
    <Navbar>
      <Navbar.Group align={Alignment.LEFT}>
          <Navbar.Heading>Blueprint</Navbar.Heading>
          <Navbar.Divider />
          <Button className="bp5-minimal" icon="home" text="Home" />
          <Button className="bp5-minimal" icon="document" text="Files" />
      </Navbar.Group>
  </Navbar>
  )

}


function App() {

  return (
    <>
      <Header/>
      <Tile/>
    </>
  )
}

export default App
