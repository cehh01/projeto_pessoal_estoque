import './bootstrap';

import { createApp } from 'vue';

import MenuEstoque from './components/MenuEstoque.vue';

const app = createApp({});


app.component('menu-estoque', MenuEstoque);

app.mount('#app');