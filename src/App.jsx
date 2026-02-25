import { useState, useEffect } from 'react'
import { Routes, Route, useNavigate } from "react-router-dom";
import './App.css'
import Accueil from "./components/Accueil/Accueil.jsx";
import MonVoyage from "./components/MonVoyage/MonVoyage.jsx";
import Forms from "./components/Forms/Forms.jsx";

function App() {

    const [reponseOpenAI, setReponseOpenAI] = useState(null);

    // Le hook pour déclencher la navigation entre les pages
    const navigate = useNavigate();

    // Affichage de la page MonVoayage dès que la réponse d'OpenAI est dispo
    useEffect(() => {
        if (reponseOpenAI) {
            navigate("/mon-voyage");
        }
    }, [reponseOpenAI, navigate])

    return (
        <Routes>
            <Route path="/" element={<Accueil setReponseOpenAI={setReponseOpenAI} />} />
            <Route path="/mon-voyage" element={<MonVoyage reponseOpenAI={reponseOpenAI} />} />
        </Routes>
    )
}

export default App
