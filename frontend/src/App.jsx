import React, { useState } from 'react';
import HeaderComponent from './Components/HeaderComponent'; 
import PromptVue from './Components/PromptVue'; 

function App() {
    const [query, setQuery] = useState('');
    const [response, setResponse] = useState('');

    const handleSubmit = async (e) => {
        e.preventDefault();
        
        console.log("Envoi de la requête avec le prompt :", query);
        const res = await fetch('http://localhost:8000/api/query_llm/', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({ query }),
        });

        console.log("Statut de la réponse :", res.status);
        const data = await res.json();
        console.log("Données reçues :", data);
        setResponse(data.response || data.error);
    };

    return (
        <div className="App">
            <HeaderComponent /> {/* Utiliser le nouveau composant d'en-tête */}
            <h1>Interroger le Modèle LLM</h1>
            <PromptVue query={query} setQuery={setQuery} onSubmit={handleSubmit} />
            <p>Réponse : {response}</p>
        </div>
    );
}

export default App;
