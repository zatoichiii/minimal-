import React from 'react';
import styles from "./Logo.module.scss"

const Logo = () => {
    return (
        <div className={styles.logo_middle}>
            <img className={styles.logo} src={"/images/logo/logo.png"} />
        </div>

    );
};

export default Logo;
