import React from 'react';
import { useState } from 'react';
import styles from './Accueil.module.css';
import Prompt from "../Prompt/Prompt.jsx";

const Accueil = () => {

    const [displayPrompt, setDisplayPrompt] = useState(false);

    return (
        <>
            <p className={styles.soustitre}>Votre voyage comme vous l'avez rêvé</p>
            <div>
                <h1 className={styles.title}>Voy.IA.ge Planner</h1>
                {displayPrompt ?
                    <Prompt />
                    : <button className={styles.buttonStart} onClick={() => {setDisplayPrompt(true)}}>Créer mon voyage</button>
                }

            </div>
        </>
    );
};

export default Accueil;