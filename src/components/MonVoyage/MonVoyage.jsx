import React from 'react';
import { useState } from 'react';
import styles from './MonVoyage.module.css';
import HeaderMonVoyage from "../HeaderMonVoyage/HeaderMonVoyage.jsx";

const MonVoyage = ({reponseOpenAI}) => {

    // On récupère les infos utiles fournies par l'user
    let infoUser = {};
    if (reponseOpenAI) {
        infoUser = reponseOpenAI.demande_originale;
    }

    return (
        <>
            <div className={styles.voyagePage}>
                <HeaderMonVoyage infoUser={infoUser} />
            </div>
        </>
    );
};

export default MonVoyage;