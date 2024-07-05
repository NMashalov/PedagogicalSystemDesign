import { io } from 'socket.io-client'

const SERVER_URI = import.meta.env.DEV ? 'http://localhost:8000' : ''
const socket = io(SERVER_URI)
export default socket