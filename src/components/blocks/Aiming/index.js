import React from 'react';
import styles from "./Aiming.module.scss"
import Container from "../../UI/Container";

const Aiming = () => {
    return (

        <div className={styles.wrapper}>
            <Container>
            <div className={styles.inner}>
                <div className={styles.title}>
                WE ARE AIMING TO WATCH YOUR PROJECT!
                </div>
                <div className={styles.button}>
                    <a href={'https://filmfreeway.com/Levelupsydney'}>
                        <img src={"/images/FFButtons/blue.png"}/>
                    </a>
                </div>
            </div>
            </Container>
        </div>
    );
};

export default Aiming;
