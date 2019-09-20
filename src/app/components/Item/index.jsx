import './style.scss'
export default ({ item }) => {
  return (
    <div className="item" style={{
      transform: `translate(${item.pos.x}px, ${item.pos.y}px)`
    }}>
      {item.value}
    </div>
  )
}
