import { useState } from 'react'
import './style.scss'
export default () => {
  const [state, setState] = useState({})
  return (
    <div className="add-button">
      <button type="button" onClick={() => setState({ opened: !state.opened })}>+</button>
      {state.opened && (
        <ul>
          <li>Add markdown</li>
        </ul>
      )}
    </div>
  )
}
