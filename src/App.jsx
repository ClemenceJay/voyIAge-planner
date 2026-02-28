import { useState, useEffect } from 'react'
import { Routes, Route } from "react-router-dom";
import './App.css'
import Accueil from "./components/Accueil/Accueil.jsx";
import MonVoyage from "./components/MonVoyage/MonVoyage.jsx";
import Forms from "./components/Forms/Forms.jsx";

function App() {

    const [reponseOpenAI, setReponseOpenAI] = useState(null);

    // On récupère si il y a un précédent voyage déjà dans le local storage
    useEffect(() => {
        const voyageStored = localStorage.getItem("monVoyage");
        if (voyageStored) {
            setReponseOpenAI(JSON.parse(voyageStored));
        }
    },[])

    return (
        <Routes>
            <Route path="/" element={<Accueil setReponseOpenAI={setReponseOpenAI} reponseOpenAI={reponseOpenAI}/>} />
            <Route path="/mon-voyage" element={<MonVoyage reponseOpenAI={reponseOpenAI} />} />
        </Routes>
    )
}

export default App
