import React from 'react';
import CardsJour from "../CardsJour/CardsJour.jsx";
import styles from './ListeJours.module.css';

const ListeJours = ({planningVoyage}) => {

    return (
        <div className={styles.listeJoursWrapper}>
            <div className={styles.listeJours}>
                {planningVoyage.map((infoJour) => {
                    return <CardsJour jour={infoJour} />
                })}
            </div>
        </div>
    );
};

export default ListeJours;