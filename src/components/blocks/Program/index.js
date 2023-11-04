import React from 'react';
import styles from "./Program.module.scss"

import Container from "../../UI/Container";





const Program = () => {
    return (

        <div className={styles.wrapper} id={"history"}>
            <Container>
                <div className={styles.container}>
                    <div className={styles.text}>
                        <div className={styles.title}>
                        THE PROGRAM
                        </div>
                        <div className={styles.description}>
                        The festival offers a rich spectrum of film screenings. In a small yet cozy auditorium, audiences can immerse themselves in the world of global cinema. The program includes full-length films, short films, avant-garde works, art-house cinema, festival pieces, and contemporary intellectual cinema. But this is not the full range of film screenings at our festival.                        </div>
                    </div>
                    <div className={styles.slider}>
                        <img src={"/images/Program/cinema.png"}/>
                    </div>


                </div>
            </Container>
        </div>
    );
};

export default Program;