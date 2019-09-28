export const RemoveItem = itemId => state => {
  // eslint-disable-next-line no-unused-vars
  const { [itemId]: omit, ...rest } = state.items
  return {
    ...state,
    items: rest
  }
}

export const AddItem = item => state => ({
  ...state,
  items: {
    ...state.items,
    [item.id]: item
  }
})

export const AddItems = items => state => ({
  ...state,
  items: items.reduce((items, item) => ({ ...items, [item.id]: item }), state.items)
})
