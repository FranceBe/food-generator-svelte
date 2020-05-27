import App from './App.svelte'
import './assets/favicon.png'
import './assets/global.css'

const app = new App({
  target: document.body,
})

window.app = app

export default app
