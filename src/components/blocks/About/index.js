import React from 'react';
import styles from "./About.module.scss"
import Container from "../../UI/Container";

const About = () => {
    return (

        <div className={styles.body} id={"About"}>
            <Container>
                <div className={styles.text}>
                    <div className={styles.title}>
                        About us
                    </div>
                    <div className={styles.description}>
                        Minimal Short Film Festival is a collaboration between the cultural society Franks and the community art center Argelino Art, both influenced by the ABC art movement. As the festival plans its screenings in Stockholm, Sweden, it absorbs Scandinavian aesthetics, providing an ideal space for showcasing art grounded in simplicity and sophistication.
                    </div>

                    <div className={styles.images}>
                        <img src={"/images/About/cinema.png"} />
                    </div>

                    <div className={styles.images_mobile}>
                        <img src={"/images/About/cinema-phone.png"} />
                    </div>

                    <div className={styles.description}>
                        Within this festival, our audiences and participants enter a world where ideas are presented in the format of minimalism, liberated from symbolic intricacies and metaphors. The festival aims to establish a simple yet profound visual language, expressing art through the subtlety of form and the ability to convey the philosophy of aestheticism.
                    </div>
                    <div className={styles.description}>
                        In conclusion, we are conducting a competitive selection of films as part of the festival program. We welcome submissions from all genres, but only short films will be considered. Following the review of all entries, our jury members will determine the winners and compile a shortlist. We eagerly anticipate showcasing the diverse talents and creativity within the realm of short filmmaking at Minimal Short Film Festival.                        </div>

                </div>
            </Container>
        </div>
    );
};

export default About;