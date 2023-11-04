import React, {useState} from 'react';
import styles from "./Category.module.scss"
import { Button, Modal } from 'antd';
import Container from "../../UI/Container";

const Category = () => {
    const [isModalOpen, setIsModalOpen] = useState(false);
    return (
        <div className={styles.wrapper} id={"category"}>
            <Container>
            <div className={styles.inner}>
                <div className={styles.title}>
                CATEGORIES
                </div>
                <div className={styles.description}>
                Mosaic Film Festival has more than 30 different categories. Perhaps it is your film that can become the winner in one of them!
                </div>
            
            <div className={styles.buttonBlock}>
                    <Button className={styles.button} type="primary" onClick={()=>setIsModalOpen(!isModalOpen)}>
                    All Categories
                    </Button>
                </div>
                <Modal
                    onCancel={()=>setIsModalOpen(!isModalOpen)}
                    footer={[
                        <Button className={styles.okButton} key="ok" onClick={()=>setIsModalOpen(!isModalOpen)}>
                            Ok
                        </Button>,
                    ]}
                    title="Categories"
                    open={isModalOpen}
                >
                    1.	Best Short Film
                    2.	Best Animated Film
                    3.	Best Documentary Short Film
                    4.	Best Experimental Film
                    5.	Best Student Short Film
                    6.	Best Experimental Film
                    7.	Best Art House Film
                    8.	Best Avant-Garde Film
                    9.	Best Auteur Film
                    10.	Best Contemporary Intellectual Film
                    11.	Best Interactive Film
                    12.	Best Collage Film
                    13.	Best Low-Budget Film (Short)
                    14.	Best First Short Film
                    15.	Best Director (Short)
                    16.	Best VFX
                    17.	Best LGBTQ+
                    18.	Best Music Video
                    19.	Best Original Score
                    20.	Best Actress
                    21.	Best Actor
                    22.	Best Director (Feature)
                    23.	Best Cinematography
                    24.	Best Feature Film
                    25.	Best Low-Budget Film (Feature)
                    26.	Best Documentary Feature Film
                    27.	Best Student Film (Feature)
                    28.	Best First Feature Film
                    29.	Best Film Noir
                    30.	Best Editing
                    31.	Best Short Comedy
                    32.	Best Sound Design
                </Modal>
                </div>
            </Container>
            
        </div>
    );
};

export default Category;
