import React from 'react';
import styles from "./Categories.module.scss"
import Container from "../../UI/Container";

const Categories = () => {
    return (
        <div className={styles.body} id={"Categories"}>
            <Container>
                <div className={styles.wrapper}>
                    <div className={styles.left}>
                        Categories
                    </div>
                    <div className={styles.right}>
                        <div className={styles.categories}>Best Short Film</div>
                        <div className={styles.categories}>Best Documentary </div>
                        <div className={styles.categories}>Best Minimalist Film</div>
                        <div className={styles.categories}>Best Art Movie</div>
                        <div className={styles.categories}>Best Director</div>
                        <div className={styles.categories}>Best Actor</div>
                        <div className={styles.categories}> Best Actress</div>
                        <div className={styles.categories}>Best Editing</div>
                        <div className={styles.categories}> Best Music</div>
                        <div className={styles.categories}>Best Screenplay</div>
                        <div className={styles.categories}>Best Sound Designer</div>
                        <div className={styles.categories}>Special Mentions</div>
                    </div>
                </div>
            </Container>
        </div>
    );
};

export default Categories;