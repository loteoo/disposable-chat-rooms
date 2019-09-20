import { useReducer } from 'react'
import Sidebar from './components/Sidebar'
import AddButton from './components/AddButton'
import DropZone from './components/DropZone'
import Item from './components/Item'

const init = {
  items: {}
}

const reducer = (state, action) => action(state)

// const RemoveItem = (state) => {
//   const { [item.id]: omit, ...rest } = state.items
//   return {
//     ...state,
//     items: rest
//   }
// }

export const App = React.createContext()

export default () => {
  const [state, dispatch] = useReducer(reducer, init)

  console.log(state)

  return (
    <App.Provider value={{ state, dispatch }}>
      <DropZone>
        <Sidebar />
        {Object.keys(state.items).map(id => <Item key={id} item={state.items[id]} />)}
        <AddButton />
      </DropZone>
    </App.Provider>
  )
}
