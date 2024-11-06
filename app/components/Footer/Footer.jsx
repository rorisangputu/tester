import React from 'react'
import styles from "./Footer.module.css";
const Footer = () => {
    return (
        <div className={styles.FooterContainer}>
            <div>
                <div>
                    <p>Let&apos;s talk</p>
                    <div data-nav-items className={styles.contacts}>
                        <p>+27 (0)79 863 0810</p>
                        <p>info@laiotix.com</p>
                    </div>
                </div>
                <div>

                </div>
            </div>
        </div >
    )
}

export default Footer