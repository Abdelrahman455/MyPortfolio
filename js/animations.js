export function animate() {
  anime({
    targets: "#navcomp",
    translateX: 400,
    direction: "reverse",
    duration: 1000,
    opacity: ["100", "0"],
    delay: 400
  })
  anime({
    targets: "#logo",
    translateY: -50,
    direction: "reverse",
    duration: 1000,
    delay: 400,
    opacity: ["100", "0"]
  })
  anime({
    targets: "#scroll",
    translateY: -60,
    loop: true,
    direction: "alternate",
    duration: 4500,
    delay: 100
  })
  anime({
    targets: "#carouselheader",
    translateX: -1000,
    duration: 1500,
    delay: 600,
    direction: "reverse",
    opacity: ["100", "0"]
  })


  window.onscroll = function() { animat() };

  function animat() {
    if (document.body.scrollTop > 600 || document.documentElement.scrollTop > 600) {
      //animated
      anime({
        targets: "#progresstxt",
        inerrHtml: ['0', "100"],
        duration: 1500,
        delay: 600,
        round: 1,
        direction:"alternate"
      })
    }
  }
  
  anime({
    targets:"#imgani",
    borderRadius:["50%","0%"],
    loop:true,
    direction:"alternate",
    duration:2500
  })
}