import { useState } from 'react'
import './style.scss'
import { App } from '../../App'

const OpenModal = (state) => ({ ...state, itemModelOpened: true })

export default () => {
  const [state, setState] = useState({})
  return (
    <App.Consumer>
      {(ctx) => (
        <div className="add-button">
          <button type="button" onClick={() => setState({ opened: !state.opened })}>+</button>
          {state.opened && (
            <ul>
              <li onClick={() => ctx.dispatch(OpenModal)}>Add markdown</li>
            </ul>
          )}
        </div>
      )}
    </App.Consumer>
  )
}
