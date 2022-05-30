import { createRouter, createWebHistory } from 'vue-router';

const routes = [
	{
		path: '/',
		name: 'main',
		component: () => import('@/views/main'),
		children: [
			{
				path: '/',
				name: 'test01',
				component: () => import('@/views/test01'),
			},
			{
				path: '/axios',
				name: 'axios',
				component: () => import('@/views/axiosTest'),
			},
			{
				path: '/store',
				name: 'store',
				component: () => import('@/views/storeTest'),
			},
		],
	},
];

const router = createRouter({
	history: createWebHistory(process.env.BASE_URL),
	routes,
});

export default router;
