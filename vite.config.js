import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import path from 'path'
import AutoImport from 'unplugin-auto-import/vite'
import Components from 'unplugin-vue-components/vite'
import { ElementPlusResolver } from 'unplugin-vue-components/resolvers'
import viteCompression from 'vite-plugin-compression'
import { visualizer } from 'rollup-plugin-visualizer'

// https://vitejs.dev/config/
export default defineConfig({
    build: {
        rollupOptions: {
            output: {
                manualChunks: {
                    'vue-vendor': ['vue','vue-router'],
                    'util-vendor': ['element-plus','three','three-obj-mtl-loader'],
                    'echarts': ['echarts'],
                    'lodash': ['lodash-es']
                }
            }
        },
        // 开启压缩
        minify: 'esbuild',
        // 生成构建大小分析文件（Vite 内置）
        reportCompressedSize: true
    },
    plugins: [
        vue(),
        AutoImport({
            resolvers: [ElementPlusResolver()],
        }),
        Components({
            resolvers: [ElementPlusResolver()],
        }),
        viteCompression({
            threshold: 10240, // 超过 10kb 的文件才压缩
            algorithm: 'gzip',
            ext: '.gz'
        }),
        visualizer({
            // 生成的分析报告文件名和路径
            filename: './dist/stats.html', 
            // 报告格式：html（可视化最好）、json、stats等
            format: 'html', 
            // 开启 gzip 体积分析（可选，更贴近实际传输体积）
            gzipSize: true,
            // 开启 brotli 体积分析（可选）
            brotliSize: true,
            // 自动打开报告（可选）
            open: true
        })
    ],
    base: '/hby/', 
    resolve: {
        alias: {
        // 设置路径
        '~': path.resolve(__dirname, './'), 
        // 设置别名 这里的./指的是 vite.config.js 的所载目录（根目录）下面的 src
        '@': path.resolve(__dirname, './src')
        },
    },
})
