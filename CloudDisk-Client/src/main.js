import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
import axios from './http'
// import VueCookies from 'vue-cookies'
import VueRouter from 'vue-router'

Vue.use(VueRouter);
// Vue.http.options.credentials = true;

// Vue.use(VueCookies);
Vue.use(ElementUI);

Vue.prototype.$axios = axios;
Vue.prototype.$http = axios;
Vue.prototype.$left = 1;
// Vue.prototype.$name = '';
// Vue.prototype.$password = '';

Vue.config.productionTip = false;

new Vue({
    router,
    store,
    render: h => h(App)
}).$mount('#app');
