// Initial state of the app
export default {

  inputValue: '',

  user: {
    id: 'loteoo',
    name: 'loteoo'
  },
  currentRoom: 'test-room',

  rooms: {
    'test-room': {
      id: 'test-room',
      title: 'Test room',
      description: 'Testing room for testing',
      slug: 'test-room',
      messages: [
        {
          id: 'test-message',
          markdown: 'Test test YES *YES* **test test test** asdasd `asdasd asd asd` !!',
          author: 'test-user'
        }
      ]
    }
  },
  users: {
    'test-user': {
      id: 'test-user',
      name: 'some-body-that-i-used-to-know'
    }
  }
}
