import { useReducer } from 'react'
import Sidebar from './components/Sidebar'
import AddButton from './components/AddButton'

const init = {
  items: {}
}

const reducer = (state, action) => action(state);

const AddItem = (state) => ({
  ...state,
  items: {
    ...state.items,
    [item.id]: item
  }
})

const RemoveItem = (state) => {
  const { [item.id]: omit, ...rest } = state.items
  return {
    ...state,
    items: rest
  }
}



export const App = React.createContext();


export default () => {

  const [state, dispatch] = useReducer(reducer, init);

  console.log(state);


  return (
    <App.Provider value={{state, dispatch}}>
      <div className="app">
        <Sidebar />
        <AddButton />
      </div>
    </App.Provider>
  )
}
