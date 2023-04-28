<template>
	<a-layout class="container-lay-main">
		<a-layout-header class="lay-header">
			<img class="logo" />
			<a-space>
				<a-button type="text" status="normal">
					<template #icon>
						<component :is="icons.IconNotification" class="arco-icon" />
					</template>
				</a-button>
				<a-dropdown position="br">
					<a-avatar class="cup">鹏</a-avatar>
					<template #content>
						<a-doption>
							<template #icon>
								<component :is="icons.IconSettings" class="arco-icon" />
							</template>
							用户设置
						</a-doption>
						<a-doption>
							<template #icon>
								<component :is="icons.IconPoweroff" class="arco-icon" />
							</template>
							退出登录
						</a-doption>
					</template>
				</a-dropdown>

			</a-space>
		</a-layout-header>
		<a-layout>
			<a-layout-sider>Sider</a-layout-sider>
			<a-layout>
				<a-layout-content>
					<router-view />
				</a-layout-content>
			</a-layout>
		</a-layout>
	</a-layout>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import * as icons from "@/hooks/icons"
export default defineComponent({
	setup() {
		return { icons };
	},
	mounted() {

	}
})
</script>

