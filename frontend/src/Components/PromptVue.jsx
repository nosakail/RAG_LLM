import React from 'react';

function PromptVue({ query, setQuery, onSubmit, response }) {
    return (
        <div>
            <form onSubmit={onSubmit} style={formStyle}>
                <textarea
                    value={query}
                    onChange={(e) => setQuery(e.target.value)}
                    placeholder="Enter your text here"
                    style={textareaStyle}
                />
                <button type="submit" style={buttonStyle}>Envoyer</button>
            </form>
            <p>Result : </p>
            {response && <div style={responseStyle}>{response}</div>} {/* Afficher la réponse ici */}
        </div>
    );
}

// Styles en ligne pour le composant
const formStyle = {
    display: 'flex',
    alignItems: 'center',
    marginBottom: '20px',
};

const textareaStyle = {
    flex: 1,
    padding: '10px',
    borderRadius: '5px',
    border: '1px solid #ccc',
    marginRight: '10px',
};

const buttonStyle = {
    padding: '10px 15px',
    border: 'none',
    borderRadius: '5px',
    cursor: 'pointer',
    backgroundColor: '#007bff',
    color: 'white',
};

const responseStyle = {
    marginTop: '20px',
    padding: '10px',
    border: '1px solid #ccc',
    borderRadius: '5px',
    backgroundColor: '#f9f9f9',
};

export default PromptVue;
