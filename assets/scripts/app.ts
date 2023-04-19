/// <reference types="svelte" />

import '../styles/app.scss';

import App from './views/App.svelte';

const app = new App({
  target: document.body,
  props: {
    name: 'Web Ninja',
  },
});

export default app;
