import { useState } from 'react'

export default () => {
  const [state, setState] = useState({
    a: 1,
    b: 2
  })

  return (
    <main className="container">
      <h1>Parcel + PWAs = 💖</h1>
      <input type="number" value={state.a} onChange={ev => setState({ ...state, a: parseInt(ev.target.value || 0) })} />
      <input type="number" value={state.b} onChange={ev => setState({ ...state, b: parseInt(ev.target.value || 0) })} />
      <h2>{state.a} + {state.b} = {state.a + state.b}</h2>
      <pre><code>state: {JSON.stringify(state, null, 2)}</code></pre>
    </main>
  )
}
