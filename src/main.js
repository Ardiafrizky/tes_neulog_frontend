import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store/index'

import 'bootstrap/dist/css/bootstrap.min.css'
import './css/styles.css';
import './vendors/jquery/jquery.min.js'
import feather from 'feather-icons';
import 'jquery/src/jquery.js'
import './vendors/bootstrap/js/bootstrap.bundle.min.js'
import './vendors/fontawesome-free/css/all.min.css'
import './vendors/feather-icons/feather.min.js'
// import "../src/js/scripts.js";

import "./vendors/datatables/jquery.dataTables.min.js"
import "./vendors/datatables-bs4/js/dataTables.bootstrap4.min.js"
import "./assets/demo/datatables-demo.js"

// import $ from 'jquery';
import 'bootstrap/dist/js/bootstrap.min.js'
import axios from 'axios'
import VueAxios from 'vue-axios'

createApp(App).use(store).use(router).use(VueAxios.axios).mount('#app')
