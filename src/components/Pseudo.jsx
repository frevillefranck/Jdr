import React, { useState } from 'react';

const Pseudo = () => {
    const [pseudo, setPseudo] = useState("")
    const handleChange = (e) => {
        setPseudo(e.target.value)
    }
    const handleSubmit = (e) => {
        e.preventDefault();
    }
    const [pseudoEstAffiche, setPseudoEstAffiche] = useState(false)
    const stylePseudo = {
        opacity: pseudoEstAffiche ? "1" : "0",
    
    }
    return (
        <div className='pseudo'>
            <h2 style={stylePseudo}>{pseudo}</h2>
            
            <button onClick={() => setPseudoEstAffiche(true)}>Valider</button>
        </div>
    );
};

export default Pseudo;