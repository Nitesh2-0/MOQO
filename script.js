gsap.to("#page1 h1", {
      fontWeight:100,
      transform: "translateX(-100%)",
      scrollTrigger:{
            trigger:"#page1",
            scroller:"body", 
            // markers:true,
            start:"top 0",
            end:"top -200%",
            scrub:2,
            pin:true,
      }
});
    