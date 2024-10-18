import React from 'react';

function PromptVue({ query, setQuery, onSubmit }) {
    return (
        <form onSubmit={onSubmit}>
            <textarea
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                placeholder="Entrez votre texte ici"
            />
            <button type="submit">Envoyer</button>
        </form>
    );
}

export default PromptVue;