import React from 'react';
import { useState } from 'react';
import {useNavigate} from "react-router-dom";
import styles from './Accueil.module.css';
import Prompt from "../Prompt/Prompt.jsx";

const Accueil = ({setReponseOpenAI, reponseOpenAI }) => {

    const [displayPrompt, setDisplayPrompt] = useState(false);
    // Le hook pour déclencher la navigation entre les pages
    const navigate = useNavigate();

    return (
        <div className={styles.accueil}>
            <p className={styles.soustitre}>Votre voyage comme vous l'avez rêvé</p>
            <div>
                <h1 className={styles.title}>Voy.IA.ge Planner</h1>
                {displayPrompt ?
                    <Prompt setReponseOpenAI={setReponseOpenAI} />
                    : <button className={styles.buttonStart} onClick={() => {setDisplayPrompt(true)}}>Créer un nouveau voyage</button>
                }

            </div>
            {reponseOpenAI && (
                <button className={styles.buttonStart} onClick={() => {navigate("/mon-voyage")}}>Reprendre mon projet</button>
            )}
        </div>
    );
};

export default Accueil;