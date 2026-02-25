import React from 'react';
import { useState } from 'react';
import styles from './HeaderMonVoyage.module.css';

const HeaderMonVoyage = ({infoUser}) => {
    const profil = infoUser.profil;

    return (
        <div className={styles.header}>
            <div className={styles.infoVoyage}>
                <p>Mon voyage</p>
                <p>Durée : {infoUser.duree}</p>
                <p>Destination : {infoUser.destination}</p>
                <p>Type de voyage : {infoUser.type}</p>
            </div>
            <h1 className={styles.title}>Mon voyage de rêve </h1>
            <div className={styles.profil}>
                <p>Mon Profil</p>
                <p>Nombre de voyageur : {profil.nbVoyageur}</p>
                <p>Tranche d'age : {profil.tranchesAge}</p>
                <p>Véhiculé : {profil.vehicule}</p>
                <p>Niveau d'activité : {infoUser.niveauActivite}</p>
            </div>
        </div>
    );
};

export default HeaderMonVoyage;