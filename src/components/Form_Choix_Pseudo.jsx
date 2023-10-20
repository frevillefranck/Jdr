import React, { useState} from 'react';
import Pseudo from './Pseudo';

const Form_Choix_Pseudo = () => {
    const [pseudo, setPseudo] = useState("")

    const handleChange = (e) => {
        setPseudo(e.target.value)
    }
    const handleSubmit = (e) => {
        e.preventDefault();
    }
    console.log(pseudo)
    return (
        <div className="formChoixPseudo">
            <form onSubmit={handleSubmit}>
                <label htmlFor="">
                    Entrez votre pseudo pour l'aventure : <br />
                    <input type="text" value={pseudo} onChange={handleChange} />
                    
                </label>
            </form>
        </div>
    );
};

export default Form_Choix_Pseudo;