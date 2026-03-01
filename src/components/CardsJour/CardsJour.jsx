import React from 'react';
import styles from './CardsJour.module.css';

const CardsJour = ({jour}) => {

    return (
        <div className={styles.cardJour}>
            <p>Jour {jour.jour}</p>
            <p>{jour.lieu}</p>
            {jour.matin.map((activite) => {
                return (<>
                    <p>{activite.activite}</p>
                    <p>{activite.descr}</p>
                </>)
            })}{jour.apresMidi.map((activite) => {
                return (<>
                    <p>{activite.activite}</p>
                    <p>{activite.descr}</p>
                </>)
            })}
        </div>
    );
};

export default CardsJour;