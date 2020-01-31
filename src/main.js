import App from './App.svelte';
import mock from './../data/data.json'

const app = new App({
	target: document.body,
	props: {
		labels: mock.labels,
		data: mock.table
	}
});

export default app;