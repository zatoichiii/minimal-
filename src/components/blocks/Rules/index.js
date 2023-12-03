import React, {useState} from 'react';
import styles from "./Rules.module.scss"
import Container from "../../UI/Container";
import Accordion from "../../UI/Accordion";

const Rules = () => {
    // const [count, setCount] = useState(0)
    return (
        <div className={styles.body} id={"Rules"}>
            <Container>
                {/*<div className={styles.ex}>*/}
                {/*    <div>{count}</div>*/}

                {/*    <button onClick={()=>setCount(count + 1)}>increment</button>*/}
                {/*    <button onClick={()=>setCount(count - 1)}>decrement</button>*/}

                {/*</div>*/}

                <div className={styles.wrapper}>
                    <div className={styles.left}>
                        Rules
                    </div>
                    <div className={styles.right}>
                        <div className={styles.padd}>
                        <Accordion title={"Genre Restriction"} description={"All styles and themes are accepted."}/>
                        </div>
                        <div className={styles.padd}>
                        <Accordion title={"Year Limitation"} description={"We accept every year"}/>
                        </div>
                        <div className={styles.padd}>
                        <Accordion title={"Only Short Film"} description={"Duration Maximum 60 minutes"}/>
                        </div>
                        <div className={styles.padd}>
                        <Accordion title={"Language Acceptance"} description={"Films and scripts accepted in English, Swedish.Other languages accepted if subtitled in English or Swedish."}/>
                        </div>
                        <div className={styles.padd}>
                        <Accordion title={"Submission Fees"} description={"Non-refundable and non-reimbursable."}/>
                        </div>
                        <div className={styles.padd}>
                        <Accordion title={"Usage Rights"} description={"Participants declare they hold all necessary usage rights for their submitted film. The festival is not responsible for any legal actions arising from rights infringement.Participants agree to receive marketing newsletters and discounts related to film festivals."}/>
                        </div>
                        <div className={styles.padd}>
                        <Accordion title={"Screening Fee"} description={"The festival does not pay a screening fee."}/>
                        </div>
                        <div className={styles.padd}>
                        <Accordion title={"Organizer Rights"} description={"Organizers reserve the right to change, cancel, or reschedule dates, venue, awards, and categories without consent.The festival may include new categories at its discretion."}/>
                        </div>
                        <div className={styles.padd}>
                        <Accordion title={"Promotion of Work"} description={"The goal is to promote participants' work. Participants agree to allow the festival to send press releases about their projects to distributors and festivals for promotional purposes."}/>
                        </div>
                        <div className={styles.padd}>
                        <Accordion title={"Season Selection"} description={"As a season selection festival, screenings are done through the FilmFreeway project.Participants are encouraged to keep their projects updated.- Winners of main categories are screened at the event."}/>
                        </div>
                        <div className={styles.padd}>
                        <Accordion title={"By submitting "} description={"to Minimal Short Film Festival participants accept all these conditions."}/>
                        </div>
                    </div>
                </div>
            </Container>
        </div>
    );
};

export default Rules;