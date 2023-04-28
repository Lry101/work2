import { mergeConfig } from 'vite'
import baseConfig from './vite.config.base'

export default mergeConfig(
	{
		mode: 'production',
		base: './',
		build: {
			chunkSizeWarningLimit: 500,
			reportCompressedSize: true,
			manifest: true,
			minify: 'esbuild',
			outDir: 'dist',
			rollupOptions: {
				output: {
					entryFileNames: `static/js/[name].js`,
					chunkFileNames: `static/js/[name].js`,
					assetFileNames: `static/[ext]/[name].[ext]`,
				},
			},
		},
	},
	baseConfig
)
