import { useEffect, useRef } from "react";
import styles from "./Hero.module.css";
import { GoArrowDownRight } from "react-icons/go";
import { gsap } from "gsap";
import { revealText } from "./animations";
import Lox from "../Lox/Lox";
import Work from "../Work/Work";
import Footer from "../Footer/Footer";
import Image from "next/image";

const Hero = ({ pageLoaded }) => {
    const heroRef = useRef(null);
    useEffect(() => {
        (
            async () => {
                const LocomotiveScroll = (await import('locomotive-scroll')).default;
                const locomotiveScroll = new LocomotiveScroll();
            }
        )()
    }, [])

    return (

        <div>
            <div className={styles.header}>
                <header className={styles.hero} ref={heroRef}>
                    <div className={styles.nav}>
                        <p data-nav-items className={styles.logo}>
                            LAIOTIX
                        </p>
                        <div data-nav-items className={styles.contacts}>
                            <p>+27 (0)79 863 0810</p>
                            <p>info@laiotix.com</p>
                        </div>
                    </div>
                    <div data-titles className={styles.title}>
                        <p data-title-first className={styles.heroTitle}>
                            LAIOTIX
                        </p>
                        <div className={styles.hoverDiv}>
                            <p data-title-second className={styles.heroBound}>INBOUND</p>
                            <div className={styles.hoverImages}>
                                <div className={`${styles.imageContainers} ${styles.firstImg}`}>
                                    <Image src="https://images.unsplash.com/photo-1600191763994-a5e80844476e?q=80&w=1738&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="image" fill objectFit="cover" />
                                </div>
                                <div className={`${styles.imageContainers} ${styles.sndImg}`}>
                                    <Image src="https://images.unsplash.com/photo-1600191763994-a5e80844476e?q=80&w=1738&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="image" fill objectFit="cover" />
                                </div>
                                <div className={`${styles.imageContainers} ${styles.thirdImg}`}>
                                    <Image src="https://images.unsplash.com/photo-1600191763994-a5e80844476e?q=80&w=1738&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="image" fill objectFit="cover" />
                                </div>
                                <div className={`${styles.imageContainers} ${styles.fourthImg}`}>
                                    <Image src="https://images.unsplash.com/photo-1600191763994-a5e80844476e?q=80&w=1738&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="image" fill objectFit="cover" />
                                </div>
                                <div className={`${styles.imageContainers} ${styles.fifthImg}`}>
                                    <Image src="https://images.unsplash.com/photo-1600191763994-a5e80844476e?q=80&w=1738&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="image" fill objectFit="cover" />
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className={styles.subcontainer}>
                        <div className={styles.subtitle}>
                            <p data-items>*</p>
                            <p data-items className={styles.subtext}>
                                Currently Redefining
                                <span data-items className={styles.subtextBlock}>
                                    the Future of Design
                                </span>
                            </p>
                        </div>
                        <div data-items className={styles.scroll}>
                            <GoArrowDownRight className={styles.scrollarrow} />
                            <p className={styles.scrolltext}>Scroll</p>
                        </div>
                    </div>
                </header>
                <Lox />
            </div>
            <Work />
            <Footer />
        </div>

    );
};

export default Hero;
