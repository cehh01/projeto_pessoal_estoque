import './bootstrap';

import PrimeVue from 'primevue/config'

import Aura from '@primeuix/themes/aura'

import 'primeicons/primeicons.css'

import { createApp } from 'vue';

import MenuEstoque from './components/MenuEstoque.vue';

import ItensEstoque from './components/ItensEstoque.vue';


const app = createApp(PrimeVue, {
  theme: {
    preset: Aura
  }
})

app.component('menu-estoque', MenuEstoque);

app.component('itens-estoque', ItensEstoque);

app.mount('#app');