import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import path from 'path'
import AutoImport from 'unplugin-auto-import/vite'
import Components from 'unplugin-vue-components/vite'
import { ElementPlusResolver } from 'unplugin-vue-components/resolvers'

// https://vitejs.dev/config/
export default defineConfig({
    plugins: [
        vue(),
        AutoImport({
            resolvers: [ElementPlusResolver()],
        }),
        Components({
            resolvers: [ElementPlusResolver()],
        }),
    ],
    resolve: {
        // https://cn.vitejs.dev/config/#resolve-alias
        alias: {
        // 设置路径
        '~': path.resolve(__dirname, './'), // 这个 __dirname 也不报错了 ************
        // 设置别名 这里的./指的是 vite.config.js 的所载目录（根目录）下面的 src
        '@': path.resolve(__dirname, './src')
        },
        // https://cn.vitejs.dev/config/#resolve-extensions
        // extensions: ['.mjs', '.js', '.ts', '.jsx', '.tsx', '.json', '.vue']
    },
})
