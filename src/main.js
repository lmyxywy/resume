// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import VueLazyload from 'vue-lazyload'

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
    el: '#app',
    router,
    components: { App },
    template: '<App/>'
})

Vue.use(VueLazyload, {
    preLoad: 1.3,
    error: require('@/assets/error.jpg'),
    loading: require('@/assets/loading.gif'),
    attempt: 1
})

router.afterEach((to, from, next) => {
    window.scrollTo(0, 0);
})