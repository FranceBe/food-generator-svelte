import App from './App.svelte';
import './assets/favicon.png'

const app = new App({
	target: document.body,
	props: {
		name: 'to myself'
	}
});

window.app = app;

export default app;
