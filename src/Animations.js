import { gsap } from "gsap";
    
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const bg = document.querySelector('#bbb')

console.log(bg);

gsap.to("#aaa", {
    scrollTrigger: {
        trigger: "#aaa",
        markers: true,
        toggleActions: "restart pause reverse pause",
        start: 'top 50%',
        end: 'bottom 70%'
    },
        x: 500,
        width: 200,
    });