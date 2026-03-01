import React from 'react';
import { useState } from 'react';
import styles from './HeaderMonVoyage.module.css';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faClock, faCompass } from "@fortawesome/free-regular-svg-icons";
import {faMapPin, faPeopleGroup, faChildren, faCar, faPersonWalking} from "@fortawesome/free-solid-svg-icons";

const HeaderMonVoyage = ({infoUser}) => {
    const profil = infoUser.profil;

    return (
        <div className={styles.header}>
            <div className={styles.infoVoyage}>
                <p>Mon voyage</p>
                <p><FontAwesomeIcon icon={faClock} /> {infoUser.duree}</p>
                <p><FontAwesomeIcon icon={faMapPin} /> {infoUser.destination}</p>
                <p><FontAwesomeIcon icon={faCompass} /> {infoUser.type}</p>
            </div>
            <h1 className={styles.title}>Mon voyage de rêve </h1>
            <div className={styles.profil}>
                <p>Mon Profil</p>
                <p><FontAwesomeIcon icon={faPeopleGroup} /> {profil.groupe}</p>
                <p><FontAwesomeIcon icon={faCar} /> {profil.vehicule}</p>
                <p><FontAwesomeIcon icon={faPersonWalking} /> {infoUser.niveauActivite}</p>
            </div>
        </div>
    );
};

export default HeaderMonVoyage;