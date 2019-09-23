import { useReducer } from 'react'
import { ApolloProvider } from '@apollo/react-hooks';

import Sidebar from './components/Sidebar'
import AddButton from './components/AddButton'
import DropZone from './components/DropZone'
import {client} from '../apollo-client'
import Room from './components/Room';

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
    <ApolloProvider client={client}>
      <App.Provider value={{ state, dispatch }}>
        <DropZone>
          <Sidebar />
          <Room />
          <AddButton />
        </DropZone>
      </App.Provider>
    </ApolloProvider>
  )
}
