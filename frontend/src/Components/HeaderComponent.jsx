import React from 'react';
import logo from '../imgs/logo.png'; 

function HeaderComponent() {
    return (
        <header style={headerStyle}>
            <img src={logo} alt="Logo" style={logoStyle} />
            <div style={buttonContainerStyle}>
                <button style={buttonStyle}>Chat</button>
                <button style={buttonStyle}>Import data</button>
                <button style={buttonStyle}>Document</button>
            </div>
        </header>
    );
}

// Styles en ligne pour le composant
const headerStyle = {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
    padding: '10px 20px',
    backgroundColor: '#f0f0f0',
};

const logoStyle = {
    height: '50px', // Ajustez la taille selon vos besoins
};

const buttonContainerStyle = {
    display: 'flex',
    gap: '10px',
};

const buttonStyle = {
    padding: '10px 15px',
    border: 'none',
    borderRadius: '5px',
    cursor: 'pointer',
    backgroundColor: '#007bff',
    color: 'white',
};

export default HeaderComponent;

