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
                        <Accordion title={"No Genre Restriction"} description={"No Genre RestrictionNo Genre RestrictionNo Genre RestrictionNo Genre Restrictionv"}/>
                        <Accordion title={"No Genre Restriction"} description={"No Genre RestrictionNo Genre RestrictionNo Genre RestrictionNo Genre Restrictionv"}/>
                        <Accordion title={"No Genre Restriction"} description={"No Genre RestrictionNo Genre RestrictionNo Genre RestrictionNo Genre Restrictionv"}/>
                        <Accordion title={"No Genre Restriction"} description={"No Genre RestrictionNo Genre RestrictionNo Genre RestrictionNo Genre Restrictionv"}/>

                    </div>
                </div>
            </Container>
        </div>
    );
};

export default Rules;