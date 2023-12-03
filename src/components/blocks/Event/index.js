import React from 'react';
import styles from "./Event.module.scss"
import Container from "../../UI/Container";

const Event = () => {
    return (

        <div className={styles.body} id={"Event"}>
            <Container>
                <div className={styles.bodyWrapper}>
                    <div className={styles.wrapper}>
                        <div className={styles.text}>
                            <div className={styles.title}>
                                Event
                            </div>
                            <div className={styles.images}>
                                <img src={"/images/Event/city.png"} />
                            </div>
                            <div className={styles.images_mobile}>
                                <img src={"/images/Event/city-mobile.png"} />
                            </div>
                            <div className={styles.description}>
                                This will be an annual showcase that will bring together students, university professors, film critics, and cinema enthusiasts. The showcase is planned to take place in a modern cinema with a capacity of 150 people, fully equipped for comfortable viewing according to all standards.                                </div>
                            <div className={styles.description}>
                                To ensure maximum audience coverage, we will organize seasonal selection (every 3-4 months) and have established partnerships with three film clubs and cultural venues in the community of Stockholm, Sweden. We will alternate and present seasonal winners during these film club events, each offering its unique atmosphere and audience. This approach allows us to reach diverse groups of cinema lovers. At the end of the year, we will host our own event, inviting the most outstanding works selected during the seasonal screenings.                            </div>
                        </div>
                    </div>
                </div>
            </Container>
        </div>
    );
};

export default Event;