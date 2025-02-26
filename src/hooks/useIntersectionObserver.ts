const options = {
    root: null, // 默认为视窗
    rootMargin: '0px', // 在计算交叉度时，扩大或缩小root的边界
    threshold: 0 // 当目标元素10%的部分进入视窗时触发回调
};
// export function useIntersectionObserver;
const observer = createIntersectionObserver();
export function useIntersectionObserver() {
    return {
        observer,
    };
}
function createIntersectionObserver() {
    const observer = new IntersectionObserver((entries) => {

        entries.forEach((entry) => {
            if (entry.isIntersecting) {
                loadImage(entry.target as HTMLImageElement);
                observer.unobserve(entry.target); // 加载后取消观察
                // console.log("观察完毕");
            }
        });
    }, options);
    return observer;
}
function loadImage(targetImage: HTMLImageElement) {
    targetImage.src = targetImage.dataset?.src || "";
}