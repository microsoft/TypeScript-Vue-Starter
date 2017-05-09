import Vue from 'vue';
import VueRouter, { RouteConfig } from 'vue-router';
import TodoApp from './components/TodoApp.vue';
import { RouteViews } from './models';

const viewNames = ['completed', 'active', '*'];
const routes = viewNames.map((view): RouteConfig => ({
    path: '/' + view,
    component: TodoApp,
    props: {
        currentView: view === '*' ? 'all' : view,
    },
}));

const router = new VueRouter({
    routes,
});

Vue.use(VueRouter);
const app = new Vue({
    el: '#app',
    template: '<router-view></router-view>',
    router,
    mixins: [VueRouter],
});
