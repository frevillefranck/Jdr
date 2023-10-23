import React, { useState } from "react";
import Prologue from "./Prologue";

const Form_Choix_Pseudo = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [pseudo, setPseudo] = useState("");
  const [boutonEstAffiche, setBoutonEstAffiche] = useState(false);
  const [pseudoEstAffiche, setPseudoEstAffiche] = useState(false);
  const styleBouton = {
    display: boutonEstAffiche ? "flex" : "none",
  };
  const styleForm = {
    display: pseudoEstAffiche ? "none" : "flex",
  };
  const handleChange = (e) => {
    setPseudo(e.target.value);
    setBoutonEstAffiche(true);
  };
  const handleSubmit = (e) => {
    e.preventDefault();
  };
  const stylePseudo = {
    display: pseudoEstAffiche ? "flex" : "none",
    opacity: pseudoEstAffiche ? "1" : "0",
  };
  const clickBoutonValider = () => {
    setPseudoEstAffiche(true);
    setIsVisible(true);
  };
  return (
    <div className="formChoixPseudo">
      <h2 style={stylePseudo}>{pseudo}</h2>

      <form onSubmit={handleSubmit} style={styleForm}>
        <label htmlFor="">
          Entrez votre pseudo pour l'aventure : <br />
          <input type="text" value={pseudo} onChange={handleChange} required />
        </label>
        <button
          className="boutonValiderPseudo"
          style={styleBouton}
          onClick={clickBoutonValider}
        >
          Valider
        </button>
      </form>
      {isVisible ? <Prologue /> : null}
    </div>
  );
};

export default Form_Choix_Pseudo;
