import React, {useEffect, useState} from 'react';
import styles from "./Header.module.scss"
import {Dropdown} from "antd";
import Container from "../../UI/Container";
import {UnorderedListOutlined} from "@ant-design/icons";

const items = [
    {
        key: '1',
        label: (
            <a href={"#aboutUS"} className={styles.burgerItem}>ABOUT US</a>
        ),
    },
    {
        key: '2',
        label: (
            <a href={"#history"} className={styles.burgerItem}>SUBMIT</a>
        ),
    },
    {
        key: '3',
        label: (
            <a href={"#values"} className={styles.burgerItem}>CATEGORIES</a>
        ),
    },
    {
        key: '4',
        label: (
            <a href={"#operates"} className={styles.burgerItem}>AWARDS AND PRIZES</a>
        ),
    },
    {
        key: '5',
        label: (
            <a href={"#awards"} className={styles.burgerItem}>RULES AND CONDITIONS</a>
        ),
    },
];

const Index = () => {
    const [scrolled, setScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY > 0) {
                setScrolled(true);
            } else {
                setScrolled(false);
            }
        };

        window.addEventListener('scroll', handleScroll);

        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);
    return (

        <div className={`${styles.headerWrapper} ${scrolled ? styles.scrolled : ""}`} >
            <Container>
            <div className={styles.inner}>
                <div className={styles.headerItems}>
                    <a href={"#aboutUS"} className={styles.headerItem}>ABOUT US</a>
                    <a href={"#history"} className={styles.headerItem}>SUBMIT</a>
                    <a href={"#values"} className={styles.headerItem}>CATEGORIES</a>
                    <a href={"#operates"} className={styles.headerItem}>AWARDS AND PRIZES</a>
                    <a href={"#awards"} className={styles.headerItem}>RULES AND CONDITIONS</a>
                </div>
                <div className={styles.burger}>
                    <Dropdown
                        menu={{
                            items,
                        }}
                        placement="bottomRight"
                    >
                        <UnorderedListOutlined style={{color: "#0000"}} />
                    </Dropdown>
                </div>
            </div>
            </Container>


        </div>
    );
};

export default Index;