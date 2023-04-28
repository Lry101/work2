import { createRouter, createWebHistory } from 'vue-router'
import type { RouteRecordRaw } from 'vue-router'
import Layout from '@/pages/layout.vue'

const routes: Array<RouteRecordRaw> = [
	{
		path: '/',
		name: 'layout',
		component: Layout,
		children: [
			{
				path: '/',
				name: 'home',
				component: () => import('@/pages/home.vue'),
			},
		],
	},
]

const router = createRouter({
	history: createWebHistory(import.meta.env.BASE_URL),
	routes,
})

export default router
