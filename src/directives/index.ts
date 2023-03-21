import type { App } from 'vue'
import { setupContain } from './contain'

export const setupGlobDirectives = (app: App) => {
    setupContain(app)
}