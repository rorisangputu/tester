import { gsap } from "gsap";

export const animatePreload = () => {
  const tl = gsap.timeline({
    defaults: {
      ease: "expo.inOut",
    },
  });

  tl.fromTo(
    "[data-preload-title]",
    {
        y: 0,
        duration: 5,
        
    },
    {
        y: 50,
        duration: 0.5,
        
    }
  );

  tl.to("[data-preload-title]", {
    y:0,
  });
  tl.fromTo(
    "[data-text]",
    {
      autoAlpha: 1,
      
    },
    {
      autoAlpha: 0,
      duration: 1
    },
    "<"
  );
  return tl;
};

export const animatePage = () => {
    const tl = gsap.timeline({
        defaults: {
        ease: "power3.inOut",
        duration: 2,
        },
    });

    tl.fromTo("[data-home-content]", {
        y: 1000,
       
    }, {
        y: 0,
        
    }, "<")
  
  return tl;
};

export const revealText = () => {
    const tl = gsap.timeline();

    tl.fromTo('[data-items]', {
        autoAlpha: 0,
        y: 50,
    }, {
        autoAlpha: 1,
        y: 0,
        ease: 'expo.out',
        duration: 1,
    })
    tl.fromTo('[data-nav-items]', {
        autoAlpha: 0,
        y: -50,
    }, {
        autoAlpha: 1,
        y: 0,
        ease: 'power3.out',
        duration:2,
    }, "<")


    return tl;
}

export const textChange = () => {
  const tl = gsap.timeline();

  tl.fromTo('[data-title-first]', {
    autoAlpha: 1,
    duration: 5
  }, {
    autoAlpha: 0,
    duration: 2,
    
  })

  tl.fromTo('[data-title-second]', {
    autoAlpha: 0,
    duration: 5
  }, {
    autoAlpha: 1,
    duration: 2
  },"")

  return tl;
}
