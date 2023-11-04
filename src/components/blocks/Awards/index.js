import React from 'react';
import styles from "./Awards.module.scss"
import Container from "../../UI/Container";

const Awards = () => {
    return (
        
        <div className={styles.body} id={"awards"}>
            <Container>
                <div className={styles.bodyWrapper}>
                <div className={styles.wrapper}>
                        <div className={styles.text}>
                            <div className={styles.title}>
                            AWARDS
                            </div>
                                <div className={styles.description}>
                                Our experts will carefully select films for the official selection from the pool of nominees. Films presented at the event will be chosen from the official selection and showcased on our website. The best of them will be honored with awards in various categories of our film festival.
                                 </div>
                        </div>
                    </div>
                    <div className={styles.images}>
                        <img  src={"/images/Award/award.png"}/>
                    </div>



                </div>
                </Container>
        </div>
    );
};

export default Awards;