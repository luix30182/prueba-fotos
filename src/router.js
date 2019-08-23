import Vue from 'vue';
import Router from 'vue-router';
import Form from './components/Form';
import Grid from './components/Grid';

Vue.use(Router);

export default new Router({
	mode: 'history',
	base: process.env.BASE_URL,
	routes: [
		{
			path: '/',
			name: 'home',
			component: Form
		},
		{
			path: '/grid',
			name: 'grid',
			component: Grid
		},
		{
			path: '/about',
			name: 'about',
			// route level code-splitting
			// this generates a separate chunk (about.[hash].js) for this route
			// which is lazy-loaded when the route is visited.
			component: () =>
				import(/* webpackChunkName: "about" */ './views/About.vue')
		}
	]
});
