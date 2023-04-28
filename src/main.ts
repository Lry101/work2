import { createApp } from 'vue'

import App from './App.vue'
import hooks from './hooks'

createApp(App).use(hooks).mount('#app')
