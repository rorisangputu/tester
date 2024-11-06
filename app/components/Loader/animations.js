import { gsap } from "gsap";
import gsapTrial from 'gsap-trial'
import {SplitText} from 'gsap-trial/SplitText'


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
    y: 0,
  });
  tl.fromTo(
    "[data-text]",
    {
      autoAlpha: 1,
    },
    {
      autoAlpha: 0,
      duration: 1,
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

  tl.fromTo(
    "[data-home-content]",
    {
      y: 1000,
    },
    {
      y: 0,
    },
    "<"
  );

  return tl;
};

export const revealText = () => {
  const tl = gsap.timeline();

  tl.fromTo(
    "[data-items]",
    {
      autoAlpha: 0,
      y: 50,
    },
    {
      autoAlpha: 1,
      y: 0,
      ease: "expo.out",
      duration: 1,
    }
  );
  tl.fromTo(
    "[data-nav-items]",
    {
      autoAlpha: 0,
      y: -50,
    },
    {
      autoAlpha: 1,
      y: 0,
      ease: "power3.out",
      duration: 2,
    },
    "<"
  );

  return tl;
};

export const textChange = () => {
  gsap.registerPlugin(SplitText)
  const tl = gsap.timeline();

  // Split the first title into characters
  const firstText = new SplitText("[data-title-first]", { type: "chars" });
  const secondText = new SplitText("[data-title-second]", { type: "chars" });

  // Animate the first title out
  tl.fromTo(
      firstText.chars,
      {
        autoAlpha: 0,
        rotateX: -90,
        y: 20,
      },
      {
        autoAlpha: 1,
        rotateX: 0,
        y: 0,
        duration: 0.9,
        stagger: 0.1,
        ease: "power1.out",
      }
    );

    tl.to(
      firstText.chars,
      {
        autoAlpha: 0,
        rotateX: 90,
        y: -20,
        duration: 0.3,
        stagger: 0.1,
        ease: "power1.in",
      },
      "+=3" // Start after the first text is fully visible
    );
  tl.fromTo(
    secondText.chars,
    {
      autoAlpha: 0,
      y: 20, // Start slightly below
      rotateX: 90, // Rotate in from above
    },
    {
      autoAlpha: 1,
      duration: 0.8,
      y: 0,
      rotateX: 0,
      stagger: 0.1,
      ease: "power1.out",
    },
    "<1" // Start after the first animation completes
  );


  // tl.fromTo(
  //   "[data-title-first]",
  //   {
  //     autoAlpha: 1,
  //     y: 0,
  //   },
  //   {
  //     autoAlpha: 0,
  //     duration: 2,
  //     rotateX: -90,
  //     stagger: 0.1,
  //   }
  // );

  // tl.fromTo(
  //   "[data-title-second]",
  //   {
  //     autoAlpha: 0,
  //     y: 0,
  //     //rotateX: -90,
  //     stagger: 0.1,
  //   },
  //   {
  //     autoAlpha: 1,
  //     duration: 2,
  //     //rotateX: -90,
  //   },
  //   ""
  // );

  return tl;
};
