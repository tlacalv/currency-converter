import '../node_modules/normalize.css/normalize.css';
import "./assets/styles/main.css";
import Vue from 'vue';
import App from './App.vue';

new Vue ({
  el: '#app',
  render: h => h(App),
})