// src/components/about.js
import gsap from 'gsap'
import ScrollTrigger from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

gsap.utils.toArray('section').forEach((section) => {
    gsap.from(section, {
        opacity: 0,
        y: 60,
        duration: 1.2,
        scrollTrigger: {
            trigger: section,
            start: 'top 80%',
        },
    })
})