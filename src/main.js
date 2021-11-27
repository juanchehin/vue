import Vue from 'vue'
import App from './App.vue'
import VueRouter from 'vue-router'
import Posts from './components/Posts.vue'

Vue.use(VueRouter);

const routes = [{
        path: '/',
        component: Posts
    }

]


const router = new VueRouter({ router: routes });


Vue.config.productionTip = false

new Vue({
    router,
    render: h => h(App),
}).$mount('#app')