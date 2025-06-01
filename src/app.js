import Lenis from '@studio-freight/lenis'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { Fancybox } from '@fancyapps/ui';
import Swup from 'swup';
import '@fancyapps/ui/dist/fancybox/fancybox.css';

gsap.registerPlugin(ScrollTrigger)

// Smooth scrolling
const lenis = new Lenis()
function raf(time) {
    lenis.raf(time)
    requestAnimationFrame(raf)
}
requestAnimationFrame(raf)

// Wait until DOM is ready
document.addEventListener('DOMContentLoaded', () => {
    // Fancybox
    Fancybox.bind('[data-fancybox="gallery"]', {
        animated: true,
        dragToClose: false,
    });

    // Swup page transitions
    const swup = new Swup()
});
