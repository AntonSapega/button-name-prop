import VueRouter from 'vue-router'
import Home from './pages/Home.vue'
import FirstPage from './pages/FirstPage.vue'
import SecondPage from './pages/SecondPage.vue'
import ThirdPage from './pages/ThirdPage.vue'

export default new VueRouter({
	routes: [
		{
			path: '',
			component: Home
		},
		
		{
			path: '/first',
			component: FirstPage
		},
		
		{
			path: '/second',
			component: SecondPage
		},
		
		{
			path: '/third',
			component: ThirdPage
    }
	],
	mode: 'history'
})