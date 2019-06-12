import { h } from 'hyperapp'
import { css } from 'emotion'


const style = css`
  position: fixed;
  top: 0;
  bottom: 0;
  left: 0;
  width: 16rem;
  padding: 1rem;
  background: var(--alt-background-color);
  display: flex;
  flex-direction: column;
  align-items: stretch;
  justify-content: space-between;
  h1 {
    font-size: 1.5rem;
  }
  nav {
    margin-bottom: auto;
    >ul {
      padding-left: 0;
    }
  }
  * {
    color: inherit;
  }
`

export default ({user, room}) => (
  <aside class={style}>
    <header role="banner">
      <h1>{room.title}</h1>
      <p>{room.description}</p>
    </header>
    <nav role="navigation">
      <ul>
        <li>
          <a href="#text">Rooms</a>
        </li>
      </ul>
    </nav>
    <footer>
      Connected as: {user.name}
    </footer>
  </aside>
)
