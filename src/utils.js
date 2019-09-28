import io from 'socket.io-client/dist/socket.io.slim'

export const socket = io.connect('http://localhost:8888')
