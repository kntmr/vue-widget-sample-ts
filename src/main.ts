import Vue from 'vue'
import App from './App.vue'

Vue.config.productionTip = false

const query = document.getElementById('app')?.dataset.tag

new Vue({
 render: h => h(App, {
   props: {
     query: query
   }
 }),
}).$mount('#app')
