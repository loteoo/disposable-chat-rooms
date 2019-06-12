import { h } from 'hyperapp'
import { css } from 'emotion'

import SideBar from './components/SideBar'
import Chat from './components/Chat'
import Form from './components/Form'

const mainContent = css`
  margin-left: 16rem;
  padding: 3rem;
`


// Root view
export default state => {

  const room = state.rooms[state.currentRoom]

  return (
    <div id="top" class="page" role="document">
      <SideBar user={state.user} room={room} />
      <main role="main" class={mainContent}>

        <Chat room={room} />

        <Form inputValue={state.inputValue} />

        <footer>
          <header><h2>State view</h2></header>
          <pre>{JSON.stringify(state, null, 2)}</pre>
        </footer>

      </main>
    </div>
  )
}
