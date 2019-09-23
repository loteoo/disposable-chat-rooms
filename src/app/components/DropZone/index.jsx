import './style.scss'



const handleDragOver = (ev) => {
  ev.preventDefault()
}
const handleDrop = ev => {
  ev.preventDefault()

  if (ev.dataTransfer.files.length > 0) {
    for (const file of ev.dataTransfer.files) {
      const pos = {
        x: ev.clientX,
        y: ev.clientY
      }
      handleFileDrop(file, pos)
    }
  } else {
    // dispatch(AddItem({
    //   id: Math.random().toString(36).substring(7),
    //   type: 'txt',
    //   value: ev.dataTransfer.getData('text'),
    //   pos: {
    //     x: ev.clientX,
    //     y: ev.clientY
    //   }
    // }))
  }
}

const handleFileDrop = (file, pos) => {
  const reader = new FileReader()
  reader.onload = ev => {
    console.log(ev.target.result)
    // dispatch(AddItem({
    //   id: Math.random().toString(36).substring(7),
    //   type: 'txt',
    //   value: ev.target.result,
    //   pos
    // }))
  }
  reader.readAsText(file)
}

export default (props) => {
  return (
    <div className="drop-zone" onDragOver={handleDragOver} onDrop={handleDrop}>
      {props.children}
    </div>
  )
}
