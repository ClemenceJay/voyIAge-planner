import React from 'react';
import { useState, useRef } from 'react';
import styles from './Prompt.module.css';
import promptJsonTemplate from "../../templates/promptJsonTemplate.jsx";

const Prompt = ({setReponseOpenAI}) => {

    const [userPrompt, setUserPrompt] = useState("");
    const [displayLoading, setDisplayLoading] = useState(false);

    // Gestion de la hauteur du textarea qui se resize automatiquement
    const textareaRef = useRef(null);
    const handleInput = () => {
        const textarea = textareaRef.current;
        // D'abord on reset la hauteur puis on la réajuste en fonction du scrollHeight
        textarea.style.height = "auto";
        textarea.style.height = textarea.scrollHeight + "px"; // ajuste
    };

    const handleSubmit = async () => {
        let prompt = textareaRef.current.value;
        setUserPrompt(prompt);

        setDisplayLoading(true);

        try {
            const response = await fetch('https://api.openai.com/v1/responses', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                    'Authorization': `Bearer ${import.meta.env.VITE_OPENAI_API_KEY}`
                },
                body: JSON.stringify({
                    model: 'gpt-5-mini',
                    input: `Tu es un organisateur de voyage. Voici ce que mon utilisateur souhaite pour son voyage : ${prompt}.
                    Propose moi un voyage qui correspond à sa demande et fournit moi la réponse sous le format JSON suivant:
                    ${promptJsonTemplate}`
                })
            });

            const data = await response.json();
            let outputData = data.output;

            outputData.map((output) => {
                if (output.role === 'assistant') {
                    try {
                        const jsonString = output.content[0].text;
                        const parsedObject = JSON.parse(jsonString);
                        setReponseOpenAI(parsedObject);
                    } catch (e) {
                        console.error("Erreur parsing JSON :", e);
                    }
                }
            })

        } catch (error) {
            console.error('Erreur lors de la requête à OpenAI :', error);
        } finally {
            setDisplayLoading(false);
        }
    }

    return (
        <div className={styles.promptArea}>
            <textarea
                className={styles.textareaPrompt}
                ref={textareaRef}
                onInput={handleInput}
                rows={1}
                placeholder='Décrivez nous votre voyage de rêve...' >
            </textarea>
            {displayLoading ?
                <div className={styles.loader}></div>
                 :
                <button
                    className={styles.buttonPrompt}
                    onClick={handleSubmit}
                > Générer mon voyage</button>
            }
        </div>
    );
};

export default Prompt;