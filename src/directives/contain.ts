
import { App, Directive, DirectiveBinding, nextTick } from 'vue'
import { throttle,floor, isArray, isFunction } from 'lodash-es'
import ResizeObserver from 'resize-observer-polyfill'
interface TYPE1 extends DirectiveBinding {
    value: {
        rect: Array<Number>
        callback: Function
    }
}
interface TYPE2 extends DirectiveBinding {
    value: Array<Number>
}
function handler(el: HTMLElement, binding) {
    const { width, height, callback } = binding
    const { clientWidth, clientHeight } = el.parentElement
    const widthScale = floor(clientWidth / width, 2)
    const heightScale = floor(clientHeight / height, 2)
    const scale = widthScale < heightScale ? widthScale : heightScale
    el.style.setProperty('transform', 'scale(' + scale + ')')
    el.style.setProperty('top', (clientHeight - height) / 2 + 'px')
    el.style.setProperty('left', (clientWidth - width) / 2 + 'px')
    isFunction(callback) && callback(scale)
}
const containDirective: Directive = {
    mounted(el: HTMLElement, binding: TYPE1 | TYPE2) {
        const parent: HTMLElement | null = el.parentElement
        if (!parent) {
            throw new Error('v-contain指令所在的dom需要一个容器')
        }
        let width, height, callback
        if (isArray(binding.value)) {
            const [w, h] = binding.value
            width = w
            height = h
        } else {
            const [w, h] = binding.value.rect
            width = w
            height = h
            callback = binding.value.callback
        }
        parent.style.setProperty('position', 'relative')
        el.style.setProperty('position', 'absolute')
        el.style.setProperty('width', width + 'px')
        el.style.setProperty('height', height + 'px')
        const handleResize = throttle(() => {
            handler(el, { width, height, callback })
        }, 200)
        const resizeObserver = new ResizeObserver(handleResize)
        resizeObserver.observe(parent)
        el['data-resizeObserver'] = resizeObserver
        nextTick(() => {
            handler(el, { width, height, callback })
        })
    },
    unmounted(el) {
        el['data-resizeObserver']?.disconnect()
        el['data-resizeObserver'] = null
    }
}
export function setupContain(app: App) {
    app.directive('contain', containDirective)
}
