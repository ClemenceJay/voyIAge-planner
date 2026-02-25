import React from 'react';
import { useState } from 'react';
import styles from './Accueil.module.css';
import Prompt from "../Prompt/Prompt.jsx";

const Accueil = ({setReponseOpenAI }) => {

    const [displayPrompt, setDisplayPrompt] = useState(false);

    return (
        <div className={styles.accueil}>
            <p className={styles.soustitre}>Votre voyage comme vous l'avez rêvé</p>
            <div>
                <h1 className={styles.title}>Voy.IA.ge Planner</h1>
                {displayPrompt ?
                    <Prompt setReponseOpenAI={setReponseOpenAI} />
                    : <button className={styles.buttonStart} onClick={() => {setDisplayPrompt(true)}}>Créer mon voyage</button>
                }

            </div>
        </div>
    );
};

export default Accueil;