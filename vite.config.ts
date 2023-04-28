import { mergeConfig } from 'vite'

import baseConfig from './config/vite.config.base'

// https://vitejs.dev/config/
export default mergeConfig(baseConfig, {
	mode: 'dev',
	server: {
		port: 8080,
		host: '0.0.0.0',
	},
})
