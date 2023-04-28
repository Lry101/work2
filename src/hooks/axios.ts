// 引入axios：
import axios, { AxiosResponse } from 'axios'

// 创建axios：
export const http = axios.create({
	baseURL: import.meta.env.VITE_BASE_URL,
	timeout: 5000,
})

// 配置拦截：
http.interceptors.response.use((response: AxiosResponse<any, any>) => {
	if (response.status == 200) {
		return response.data
	}
})

// 导出axios实例模块：
export default http
