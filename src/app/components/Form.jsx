
import { h } from 'hyperapp'
import { css } from 'emotion'



const targetValue = event => event.target.value

const uuid = () => Math.random().toString(36).substring(7)

export const SetInputValue = (state, value) => ({
  ...state,
  inputValue: value
})

export const SendMessage = (state, ev) => {


  ev.preventDefault();



  return {
    ...state,
    inputValue: '',
    rooms: {
      ...state.rooms,
      [state.currentRoom]: {
        ...state.rooms[state.currentRoom],
        messages: state.rooms[state.currentRoom].messages.concat({
          id: uuid(),
          markdown: state.inputValue,
          author: state.user.name
        })
      }
    }
  }
}




export default ({inputValue}) => (
  <form method="post" onsubmit={SendMessage}>
    <input value={inputValue} oninput={[SetInputValue, targetValue]} />
  </form>
)
