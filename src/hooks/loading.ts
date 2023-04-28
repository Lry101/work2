import { Props, useLoading } from 'vue-loading-overlay'
export type { ActiveLoader, PluginApi, Props } from 'vue-loading-overlay'
export { LoadingPlugin } from 'vue-loading-overlay'
export let loadConfig: Props = {
	loader: 'dots',
	isFullPage: true,
	canCancel: false,
	color: '#009688',
	// backgroundColor: "transparent",
	backgroundColor: 'rgba(238,238,238,0.8)',
	width: 150,
	height: 100,
	lockScroll: true,
	opacity: 1,
}
export const $loading = useLoading(loadConfig)
