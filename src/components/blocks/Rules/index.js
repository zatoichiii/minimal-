import React, {useState} from 'react';
import styles from "./Rules.module.scss"
import { Button, Modal } from 'antd';
import Container from "../../UI/Container";

const Rules = () => {
    const [isModalOpen, setIsModalOpen] = useState(false);
    return (
        <div className={styles.wrapper} id={"rules"}>
            <Container>
            <div className={styles.rules}>
            <div className={styles.book}>
                <img src={"/images/Rules/book.png"}/>
            </div>
            <div className={styles.buttonBlock}>
                    <Button className={styles.button} type="primary" onClick={()=>setIsModalOpen(!isModalOpen)}>
                        SHOW RULES
                    </Button>
                </div>
                <Modal
                    onCancel={()=>setIsModalOpen(!isModalOpen)}
                    footer={[
                        <Button className={styles.okButton} key="ok" onClick={()=>setIsModalOpen(!isModalOpen)}>
                            Ok
                        </Button>,
                    ]}
                    title="More"
                    open={isModalOpen}
                >
                 • Presenting films in English or with English subtitles.<p></p>
                • Limiting the duration of short films to 40 minutes.<p></p>
                • Filmmakers are responsible for copyrights to their materials.<p></p>
                • Organizers may screen your film before an audience and possibly online.<p></p>
                • Films can be nominated for an award in a specific category, but not all nominated films will be shown. The Official Selection determines which nominated films will be screened.<p></p>
                -Organizers reserve the right to change the date and venue of the festival under special circumstances, and they do not impose restrictions on the premiere status or accessibility of your work on the internet.<p></p>
                -Technical issues with films are entirely the responsibility of the filmmakers, and malfunctions may result in the rejection of the film without a refund.<p></p>
                -By submitting an application, you agree to our terms and conditions, as well as to receiving marketing information and discounts on film festivals via electronic emails. We will never sell your information to third parties.<p></p>
                -Organizers reserve the right to update their terms and conditions.<p></p>
                </Modal>
                </div>
                <div className={styles.inner}>       
                <div className={styles.title}>
                RULES AND CONDITIONS
                </div>
                <div className={styles.description}>
                The "Mosaic Film" Festival does not guarantee that the film you submit will be accepted or shown at the festival. Even if your film is accepted, it does not guarantee winning an award. The application fee is non-refundable. The festival organizers may make changes to the program without prior notice.
The "Mosaic" Festival and related parties are not responsible for any financial losses related to travel, transportation expenses, or other costs associated with attending the festival, including changes in the program such as venue and date alterations.                </div>
            

                </div>
            </Container>
            
        </div>
    );
};

export default Rules;
