import React from 'react'
import styles from './Work.module.css';
import { GoArrowRight } from "react-icons/go";
import Image from 'next/image';

const Work = () => {
    return (
        <div className={styles.workContainer}>
            <div className={styles.workTextContainer}>
                <div className={styles.workText}>
                    <h1>Want to see</h1>
                    <div className={styles.workLineTwo}>
                        <GoArrowRight className={styles.workArrow} />
                        <h1>our <span className={styles.cursiveWork}>work?</span></h1>
                    </div>
                </div>
            </div>
            <div className={styles.workImages}>
                <div className={styles.imageCollage}>
                    <div className={`${styles.imageContainer} ${styles.imageOne}`}>
                        <Image src="https://images.unsplash.com/photo-1523023792609-a55619639b1a?q=80&w=1740&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                            alt="Design 1" layout="fill" objectFit="cover" />
                    </div>
                    <div className={`${styles.imageContainer} ${styles.imageTwo}`}>
                        <Image src="https://images.unsplash.com/photo-1694878981750-3b1f8d97abff?q=80&w=1722&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                            alt="Design 2" layout="fill" objectFit="cover" />
                    </div>
                    <div className={`${styles.imageContainer} ${styles.imageThree}`}>
                        <Image src="https://images.unsplash.com/photo-1586023492125-27b2c045efd7?q=80&w=1858&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                            alt="Design 3" layout="fill" objectFit="cover" />
                    </div>
                </div>
            </div>
            <hr className={styles.horizontalRule} />
        </div>
    )
}

export default Work