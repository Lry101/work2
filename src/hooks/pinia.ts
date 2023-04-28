import { createPinia } from 'pinia'
import persisted from 'pinia-plugin-persistedstate'
let pinia = createPinia()
pinia.use(persisted)
export default pinia
