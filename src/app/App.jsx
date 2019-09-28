import { useReducer, useEffect } from 'react'

import Sidebar from './components/Sidebar'
import AddButton from './components/AddButton'
import DropZone from './components/DropZone'
import Room from './components/Room'
import { socket } from '../utils'

import { AddItems } from './actions'

const init = {
  items: []
}

const reducer = (state, action) => action(state)

export const App = React.createContext()

export default () => {
  const [state, dispatch] = useReducer(reducer, init)

  console.log(state)

  useEffect(() => {
    socket.emit('load items', 'message hello', items => dispatch(AddItems(items)))
  }, [])

  return (
    <App.Provider value={{ state, dispatch }}>
      <DropZone>
        <Sidebar />
        <Room />
        <AddButton />
      </DropZone>
    </App.Provider>
  )
}
