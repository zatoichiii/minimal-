import React from 'react';
import styles from "./Footer.module.scss"
import Container from "../../UI/Container";

const Footer = () => {
    return (
        <div className={styles.body}>
            <Container>
                <div className={styles.wrapper}>
                    <div className={styles.text}>
                        <div className={styles.rows}>
                            <div className={styles.logo}>
                                <img  src="/images/Foot/logo.png" alt='' />
                            </div>
                            <div className={styles.row}>
                                <a href={'#About'}>About us</a>
                                <a href={'#Categories'}>Categories</a>
                            </div>
                            <div className={styles.row}>
                                <a href={'#Rules'}>Rules</a>
                                <a href={'#Event'}>Event</a>
                            </div>
                            <div className={styles.row}>
                                <div className={styles.button}>
                                    <a href={'https://filmfreeway.com/minimalshortfilmfestival'}>
                                        <img src={"/images/FFButtons/black.png"} />
                                    </a>
                                </div>
                            </div>
                        </div>

                        <div className={styles.line}></div>
                        <div className={styles.copyright}>
                            Copyright © 2024 Minimal Short Film Festival
                        </div>
                    </div>
                </div>
            </Container>
        </div>
    );
};

export default Footer;