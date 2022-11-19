import App from './App.svelte';

const app = new App({
	target: document.body,
	props: {
		name: 'world'
	}
});

function getConvertedData(): Promise {
	// API call will go here.
}
export default app;