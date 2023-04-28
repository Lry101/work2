<template>
	<div class="content">
		<h1>Home</h1>
	</div>
</template>

<script lang="ts">
import { defineComponent, ref } from 'vue'
export default defineComponent({
	setup() {
		return {
			users: ref<any[]>([])
		}
	},

	mounted() {

		// 👇axios发送请求
		// this.$http.get('/index.json').then((result: any) => {
		// 	if (result.status > 0) {
		// 		alert(result.message)
		// 		return
		// 	}
		// 	console.log(result.data);
		// 	this.users = result.data
		// })
		// this.$loading.show() // 👈使用loading
	},
})
</script>
