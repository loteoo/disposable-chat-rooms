import './style.scss'
export default ({ item }) => {
  return (
    <div className="item" style={{
      transform: `translate(${item.x}px, ${item.y}px)`
    }}>
      {item.value}
    </div>
  )
}

const ItemView = ({item}) => {
  if (item.type === 'text') {
    return <TextItem item={item} />
  }
}
