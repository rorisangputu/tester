import { useEffect, useRef } from "react";
import styles from "./Hero.module.scss";
import { GoArrowDownRight } from "react-icons/go";
import { gsap } from "gsap";
import { revealText } from "./animations";
import Lox from "../Lox/Lox";
import Work from "../Work/Work";

const Hero = ({ pageLoaded }) => {
    const heroRef = useRef(null);


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
                    <div className={styles.title}>
                        <p data-title-first className={styles.heroTitle}>
                            LAIOTIX
                        </p>
                        <p data-title-second data-hidden className={styles.heroBound}>INBOUND</p>
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
        </div>

    );
};

export default Hero;
