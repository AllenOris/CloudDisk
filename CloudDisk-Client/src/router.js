import Vue from 'vue'
import Router from 'vue-router'
import Index from './views/Index.vue'
import Register from './views/Register'
import Notfind from './views/404'
import Login from './views/Login'
import Home from './views/Home'
import InfoShow from './views/InfoShow'
import Myfile from './views/Myfile'
import Upload from './views/Upload'
import MyDownload from './views/MyDownload'
import Examine from './views/Examine'
import Test from './views/Test'
import Recent from './views/Recent'

Vue.use(Router);

const router = new Router({
    mode: 'history',
    base: process.env.BASE_URL,
    routes: [
        {path: '*', name: '/404', component: Notfind},
        {path: '/', redirect: '/login'},
        {path: '/register', name: 'register', component: Register},
        {path: '/login', name: 'login', component: Login},
        {
            path: '/index',
            name: 'index',
            component: Index,
            children: [
                {path: '', component: Home},
                {path: '/home', name: 'home', component: Home},
                {path: '/infoshow', name: 'infoshow', component: InfoShow},
                {path: '/myfile', name: 'myfile', component: Myfile},
                {path: '/upload', name: 'upload', component: Upload},
                {path: '/mydownload', name: 'MyDownload', component: MyDownload},
                {path: '/examine', name: 'Examine', component: Examine},
                {path: '/test', name: 'Test', component: Test},
                {path: '/recent', name: 'Recent', component: Recent},
            ]
        },
    ]
});

// 添加路由守卫
router.beforeEach((to, from, next) => {
    // const isLogin = localStorage.eleToken ? true : false;
    if (to.path == "/login" || to.path == "/register") {
        next();
    } else {
        next();
        // console.log(Vue);
        // const isLogin = this.$name.checked && this.$password.checked;
        // isLogin ? next() : next("/login");
    }
});

export default router;
