gsap.from(".aboutus .img ", {
    y: 90,
    opacity: 0,
    duration: 1,
    stagger:0.4,
    scrollTrigger: {
        triggar: "aboutus",
        scroller: "body",
        // markers:true,
        start: "top 80%",
        end: "top 55%",
        scrub:1


    }

})