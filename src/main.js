import 'normalize.css'
import 'swiper/dist/css/swiper.css'
import Vue from 'vue'
import FastClick from 'fastclick'
import App from './App.vue'

FastClick.attach(document.body)
new Vue({
  el: '#app',
  render: h => h(App)
})
