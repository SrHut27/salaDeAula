import React from 'react';
import { FaPhoneAlt, FaHandsHelping, FaWhatsapp } from 'react-icons/fa';
import styles from "../styles/Floating.module.css";

const FloatingBar = () => {
    return (
        <div className={styles.floatingBar}>
            <div className={styles.desktopBar}>
                <div className={styles.iconLinks}>
                    <a href="tel:+5517988117301" className={styles.iconLink}>
                        <FaPhoneAlt className={styles.icon} />
                        LIGUE PARA NÓS
                    </a>
                    <a href="#comoajudar" className={styles.iconLink}>
                        <FaHandsHelping className={styles.icon} />
                        APOIAR AGORA!
                    </a>
                    <a href="https://wa.link/hygqgj" className={styles.iconLink}>
                        <FaWhatsapp className={styles.icon} />
                        WHATSAPP
                    </a>
                </div>
            </div>
            <div className={styles.mobileBar}>
                <button className={styles.mobileButton}>
                    <a href="#comoajudar" className={styles.iconLink}>
                        <FaHandsHelping className={styles.icon} />
                        APOIAR AGORA!
                    </a>
                </button>
            </div>
        </div>
    );
};

export default FloatingBar;
