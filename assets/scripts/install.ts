/// <reference types="svelte" />

import '../styles/app.scss';

import Install from './views/Install.svelte';

const app = new Install({
  target: document.body,
});

export default app;
