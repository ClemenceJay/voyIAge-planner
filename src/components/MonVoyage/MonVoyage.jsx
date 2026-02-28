import React from 'react';
import { useState } from 'react';
import {useNavigate} from "react-router-dom";
import styles from './MonVoyage.module.css';
import HeaderMonVoyage from "../HeaderMonVoyage/HeaderMonVoyage.jsx";
import ListeJours from "../ListeJours/ListeJours.jsx";

const MonVoyage = ({reponseOpenAI}) => {
    const navigate = useNavigate();

    // On récupère les infos utiles fournies par l'user
    let infoUser = {};
    let planningVoyage = {};
    if (reponseOpenAI) {
        infoUser = reponseOpenAI.demandeUser;
        planningVoyage = reponseOpenAI.voyage;
    }

    return (
        <>
            {reponseOpenAI ?
            <div className={styles.voyagePage}>
                <HeaderMonVoyage infoUser={infoUser}/>
                <ListeJours planningVoyage={planningVoyage}/>
                <button className={styles.boutonRetour} onClick={() => {navigate("/")}} >Retour à l'accueil</button>
            </div> : null}
        </>
    );
};

export default MonVoyage;