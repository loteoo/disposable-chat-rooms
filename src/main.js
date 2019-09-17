import ReactDOM from 'react-dom'

// Import best-practices css defaults
import 'sanitize.css'
import 'sanitize.css/typography.css'
import 'sanitize.css/forms.css'

// Global styling
import './global.scss'

// import root App component
import App from './app/App'

// Initialize the app on the #app div
ReactDOM.render(<App />, document.getElementById('app'))

// Enable the service worker when running the build command
// if (process.env.NODE_ENV === 'production') {
//   navigator.serviceWorker.register(`${window.location.origin}/sw.js`)
// }
