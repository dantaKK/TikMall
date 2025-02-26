// directives/lazy.js
// 提升了网页性能和用户体验。只在需要的时候加载图片资源，可以减少初始页面加载时间，节省带宽。
import type { DirectiveBinding } from 'vue';
import { useIntersectionObserver } from '@/hooks/useIntersectionObserver';

export default {
    mounted(el: HTMLElement, binding: DirectiveBinding) {
        // 确保绑定的值是字符串类型，这里假设它是一个图片的URL
        if (typeof binding.value === 'string') {
            el.dataset.src = binding.value;
        }
        const { observer }: any = useIntersectionObserver();
        observer.observe(el);
    },
    unmounted(el: any) {
        // 当元素卸载时，取消观察
        const { observer }: any = useIntersectionObserver();
        if (observer) {
            observer.unobserve(el);
        }
    }
};