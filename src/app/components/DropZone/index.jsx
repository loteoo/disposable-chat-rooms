import './style.scss'
import { App } from '../../App'

const AddItem = item => state => ({
  ...state,
  items: {
    ...state.items,
    [item.id]: item
  }
})

const handleDragOver = (ev) => {
  ev.preventDefault()
}
const handleDrop = dispatch => ev => {
  ev.preventDefault()

  if (ev.dataTransfer.files.length > 0) {
    for (const file of ev.dataTransfer.files) {
      const pos = {
        x: ev.clientX,
        y: ev.clientY
      }
      handleFileDrop(file, dispatch, pos)
    }
  } else {
    dispatch(AddItem({
      id: Math.random().toString(36).substring(7),
      type: 'txt',
      value: ev.dataTransfer.getData('text'),
      pos: {
        x: ev.clientX,
        y: ev.clientY
      }
    }))
  }
}

const handleFileDrop = (file, dispatch, pos) => {
  const reader = new FileReader()
  reader.onload = ev => {
    console.log(ev.target.result)
    dispatch(AddItem({
      id: Math.random().toString(36).substring(7),
      type: 'txt',
      value: ev.target.result,
      pos
    }))
  }
  reader.readAsText(file)
}

export default (props) => (
  <App.Consumer>
    {({ dispatch }) => (
      <div className="drop-zone" onDragOver={handleDragOver} onDrop={handleDrop(dispatch)}>
        {props.children}
      </div>
    )}
  </App.Consumer>
)
