import type { App } from 'vue'
import router from '../router'
import axios from './axios'
import { AxiosInstance } from 'axios' // AxiosInstance--使用axios实例对象类型
import { RouteLocationRaw } from 'vue-router' // RouteRecordRaw 是路由项目的 TS 类型
import pinia from './pinia' // 引入pinia配置文件
// 引入👇loading组件库配置文件：
import { LoadingPlugin, loadConfig } from './loading'
import ArcoVue from '@arco-design/web-vue' // 引入arco UI组件库

import './styles'

// 定义运行时的方法函数：
declare module '@vue/runtime-core' {
	interface ComponentCustomProperties {
		$to: (to: RouteLocationRaw) => Promise<any> // 指定跳转类型为路由ts类型且是异步的
		$http: AxiosInstance
	}
}

export default {
	install(app: App) {
		app.use(router).use(pinia).use(LoadingPlugin, loadConfig).use(ArcoVue)
		app.config.globalProperties.$http = axios
		this.mixins(app)
	},
	mixins(app: App) {
		app.mixin({})
	},
}
