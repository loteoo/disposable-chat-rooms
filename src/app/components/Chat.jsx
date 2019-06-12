import { h } from 'hyperapp'
import { css } from 'emotion'

import marked from 'marked'

export default ({room}) => (
  <section>
    {room.messages.map(message => (
      <div key={message.id} id={message.id}>
        <p>{marked(message.markdown)}</p>
        <small>by {message.author}</small>
      </div>
    ))}
  </section>
)
