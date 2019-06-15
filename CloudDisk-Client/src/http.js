import axios from 'axios'
import {Message, Loading} from 'element-ui';
import router from './router'

let loading;        //定义loading变量

function startLoading() {    //使用Element loading-start 方法
    // console.log("loading");
    loading = Loading.service({
        lock: true,
        text: '加载中...',
        background: 'rgba(0, 0, 0, 0.7)'
    })
}

function endLoading() {    //使用Element loading-close 方法
    loading.close();
}

// 请求拦截  设置统一header
axios.interceptors.request.use(config => {
    // 加载
    startLoading();
    if (localStorage.eleToken)
        config.headers.Authorization = localStorage.eleToken
    return config
}, error => {
    return Promise.reject(error)
});

// 响应拦截  401 token过期处理
axios.interceptors.response.use(response => {
    endLoading();
    return response
}, error => {
    // 错误提醒
    endLoading();
    Message.error(error.response.data);

    const {status} = error.response
    if (status == 401) {
        // Message.error('token值无效，请重新登录');
        // // 清除token
        // localStorage.removeItem('eleToken');
        // // 页面跳转
        // router.push('/login');
    }

    return Promise.reject(error);
});

// axios.defaults.baseURL = 'http://39.96.164.104:3100';
axios.defaults.baseURL = 'http://localhost:3100';

// axios.defaults.headers.common['Authorization'] = AUTH_TOKEN;
axios.defaults.headers.post['Content-Type'] = 'application/form-data';
axios.defaults.withCredentials = true;
axios.defaults.headers.post['Access-Control-Allow-Origin'] = 'http://loacalhost:8081';
// axios.defaults.withCredentials=true;
export default axios
