import React from 'react';
import { useState } from 'react';
import styles from "../MonVoyage/MonVoyage.module.css";

const HeaderMonVoyage = ({infoUser}) => {

    return (
        <div className={styles.header}>
            <h1 className={styles.title}>Mon voyage de rêve </h1>
            <p>{infoUser.destination}</p>
        </div>
    );
};

export default HeaderMonVoyage;