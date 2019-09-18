import { useState } from 'react'
import './style.scss'
export default () => {
  const [state, setstate] = useState({})
  return (
    <>
      <button type="button" onClick={() => setstate({ opened: true })}>open menu</button>
      <aside className={'sidebar' + (state.opened ? ' opened' : '')}>
        <header role="banner">
          <h1>Room title</h1>
          <button type="button" onClick={() => setstate({ opened: false })}>close menu</button>
        </header>
        <nav role="navigation">
          <ul>
            <li>
              <a href="#text">Rooms</a>
            </li>
          </ul>
        </nav>
        <footer>

        </footer>
      </aside>
    </>
  )
}
