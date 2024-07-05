import { useState } from 'react'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  useEffect(() => {
    socket.on('request', ({ from }) => {
      // записываем `id` звонящего
      setCallFrom(from)
      // показываем модальное окно
      setShowModal(true)
    })
   }, [])

  return (
    
  )
}

export default App
