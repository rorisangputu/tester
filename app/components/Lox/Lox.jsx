import React, { useLayoutEffect, useRef } from "react";
import styles from './Lox.module.scss';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const Lox = () => {
  const textRefs = useRef([]);
  textRefs.current = []; // Reset refs array on each render

  const addToRefs = (el) => {
    if (el && !textRefs.current.includes(el)) {
      textRefs.current.push(el);
    }
  };

  useLayoutEffect(() => {
    textRefs.current.forEach((el) => {
      gsap.from(el, {
        scrollTrigger: {
          trigger: el,
          start: "center bottom", // Starts the animation as each line enters the viewport
          end: "bottom+=100px bottom",
          scrub: true,
        },
        translateY: "100px",            // Slide up from 50px below
        opacity: 0,       // Start with opacity 0
        duration: 0.5,
        ease: "power3.out"
      });
    });
  }, []);

  return (
    <div className={styles.Lox}>
      <div className={styles.LoxText}>
        <p className={styles.textLine} ref={addToRefs}>
          At Laiotix, we don&apos;t just follow trends —{" "}
          <span className={styles.setTrend}>we set them.</span>
        </p>
        <p className={styles.textLine} ref={addToRefs}>
          Our team of skilled designers and strategists is
        </p>
        <p ref={addToRefs}>
          dedicated to delivering{" "}
          <span className={styles.results}>exceptional results</span> through a{" "}
        </p>
        <p className={styles.textLine} ref={addToRefs}>
          <span className={styles.fearless}>fearless approach</span> to{" "}
          <span className={styles.creativity}>creativity and innovation.</span>{" "}
        </p>
        <p className={styles.textLine} ref={addToRefs}>
          Whether you&apos;re looking to enhance your brand,</p>
        <p className={styles.textLine} ref={addToRefs}>
          create dynamic content, or
          build interactive
        </p>
        <p className={styles.textLine} ref={addToRefs}>
          experiences, we bring your{" "}
          <span className={styles.setTrend}>vision to life</span> with{" "}
        </p>
        <p className={styles.textLine} ref={addToRefs}>
          <span className={styles.results}>precision</span> and flair.

        </p>
      </div>
    </div >
  );
};

export default Lox;
