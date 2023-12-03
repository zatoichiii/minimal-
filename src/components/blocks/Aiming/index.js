import React from 'react';
import styles from "./Aiming.module.scss"
import Container from "../../UI/Container";

const Aiming = () => {
    return (

        <div className={styles.wrapper}>
            <Container>
                <div className={styles.title}>
                    We Are Aiming To Wath Your Project!
                </div>
                <div className={styles.button}>
                    <a href={'https://filmfreeway.com/minimalshortfilmfestival'}>
                        <img src={"/images/FFButtons/black.png"} />
                    </a>
                </div>
            </Container>
        </div>
    );
};

export default Aiming;
