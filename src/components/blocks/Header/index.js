import React, { useEffect, useState } from 'react';
import styles from "./Header.module.scss"
import { Dropdown } from "antd";
import Container from "../../UI/Container";
import { UnorderedListOutlined } from "@ant-design/icons";


const items = [
    {
        key: '1',
        label: (
            <a href={"#About"} className={styles.burgerItem}>About</a>
        ),
    },
    {
        key: '2',
        label: (
            <a href={"#Event"} className={styles.burgerItem}>Event</a>
        ),
    },
    {
        key: '3',
        label: (
            <a href={"#Categories"} className={styles.burgerItem}>Categories</a>
        ),
    },
    {
        key: '4',
        label: (
            <a href={"#Rules"} className={styles.burgerItem}>Rules</a>
        ),
    },
    {
        key: '5',
        label: (
            <a href={"#https://filmfreeway.com/minimalshortfilmfestival"} className={styles.burgerItem}>Submit</a>
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
                        <a href={"#About"} className={styles.headerItem}>About us</a>
                        <a href={"#Event"} className={styles.headerItem}>Event</a>
                        <a href={"#Categories"} className={styles.headerItem}>Categories</a>
                        <a href={"#Rules"} className={styles.headerItem}>Rules</a>
                        <a href={"https://filmfreeway.com/minimalshortfilmfestival"} className={styles.headerItem}>Submit</a>
                    </div>
                    <div className={styles.burger}>
                        <Dropdown
                            menu={{
                                items,
                            }}
                            placement="bottomRight"
                        >
                            <UnorderedListOutlined style={{ color: "#000000" }} />
                        </Dropdown>
                    </div>
                </div>
            </Container>


        </div>
    );
};

export default Index;