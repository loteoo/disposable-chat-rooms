import { useContext } from 'react'
import Item from '../Item'
import { App } from '../../App'

export default () => {
  const { state } = useContext(App)
  const items = Object.keys(state.items).map(id => state.items[id])
  return (
    <div className="room">
      {items.map(item => <Item key={item.id} item={item} />)}
    </div>
  )
}
