import React from 'react';
import { useState, useRef } from 'react';
import styles from './Prompt.module.css';

const Prompt = () => {
    const [userPrompt, setUserPrompt] = useState("");
    const [reponseOpenAI, setReponseOpenAI] = useState("");
    console.log(userPrompt);

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

        try {
            const response = await fetch('https://api.openai.com/v1/responses', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                    'Authorization': `Bearer ${import.meta.env.VITE_OPENAI_API_KEY}`
                },
                body: JSON.stringify({
                    model: 'gpt-5-mini',
                    input: prompt
                })
            });

            const data = await response.json();
            let outputData = data.output;

            outputData.map((output) => {
                if (output.role === 'assistant') {
                    setReponseOpenAI(output.content[0].text);
                }
            })

            console.log("Réponse OpenAI :", reponseOpenAI);

        } catch (error) {
            console.error('Erreur lors de la requête à OpenAI :', error);
        }
    }

    return (
        <>
            <textarea
                className={styles.textareaPrompt}
                ref={textareaRef}
                onInput={handleInput}
                rows={1}
                placeholder='Décrivez nous votre voyage de rêve...' >
            </textarea>
            <button className={styles.buttonPrompt} onClick={() => {handleSubmit()}}>
                Générer mon voyage
            </button>
        </>
    );
};

export default Prompt;