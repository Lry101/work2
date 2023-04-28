import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import path from 'path'
import svgLoader from 'vite-svg-loader'

// 引入按需加载插件：
import AutoImport from 'unplugin-auto-import/vite'
import Components from 'unplugin-vue-components/vite'
import { ArcoResolver } from 'unplugin-vue-components/resolvers'

export default defineConfig({
	// 配置按需加载插件：
	plugins: [
		vue(),
		svgLoader({
			svgoConfig: {},
		}),
		AutoImport(),
		Components({
			resolvers: [ArcoResolver()],
		}),
	],

	//   配置路径别名：
	resolve: {
		alias: {
			'@': path.join(__dirname, '../src'),
			components: path.join(__dirname, '../src/components'),
		},
		// extensions: ['.ts', '.js', '.vue'],
	},

	// ???👇
	define: {
		'process.env': {},
	},

	// 引入css文件：
	css: {
		preprocessorOptions: {
			scss: {
				// 👇引入scss变量文件：
				additionalData: `@import "@/scss/variable.scss";`,
				javascriptEnabled: true,
				modifyVars: {},
			},
		},
	},
})
