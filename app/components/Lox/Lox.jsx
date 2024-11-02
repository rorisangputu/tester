import React from "react";
import styles from './Lox.module.scss';
const Lox = () => {
    return (
        <div className={styles.Lox}>
            <p className={styles.LoxText}>
                At Laiotix, we don&apos;t just follow trends —{" "}
                <span className={styles.setTrend}>we set them.</span> Our team of
                skilled designer and strategists is dedicated to delivering{" "}
                <span className={styles.results}>exceptional results</span> through a{" "}
                <span className={styles.fearless}>fearless approach</span> to{" "}
                <span className={styles.creativity}>creativity innovation.</span>{" "}
                Whether you&apos;re looking to enhance your brand, create dynamic content, or
                build interactive experiences, we bring your{" "}
                <span className={styles.setTrend}>vision come to life</span> with{" "}
                <span className={styles.results}>precision</span> and flair.
            </p>
        </div>
    );
};

export default Lox;
