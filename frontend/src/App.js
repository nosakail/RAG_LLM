import React, { useState } from 'react';

function App() {
    const [query, setQuery] = useState('');
    const [response, setResponse] = useState('');

    const handleSubmit = async (e) => {
        e.preventDefault();
        
        // Envoyer la requête au backend
        const res = await fetch('http://localhost:8000/api/query_llm/', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({ query }),
        });
        const data = await res.json();
        setResponse(data.response || data.error);
    };

    return (
        <div className="App">
            <h1>Interroger le Modèle LLM</h1>
            <form onSubmit={handleSubmit}>
                <textarea
                    value={query}
                    onChange={(e) => setQuery(e.target.value)}
                    placeholder="Entrez votre texte ici"
                />
                <button type="submit">Envoyer</button>
            </form>
            <p>Réponse : {response}</p>
        </div>
    );
}

export default App;

