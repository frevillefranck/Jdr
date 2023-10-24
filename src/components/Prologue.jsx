import React, { useState } from "react";
import { prologue } from "../content";

import PremierChoix from "./PremierChoix";
const Prologue = () => {
  const [isVisible, setIsVisible] = useState(true);
  const [isVisible2, setIsVisible2] = useState(false);
  const [premierChoixIsVisible, setPremierChoixIsVisible] = useState(false);
  const [boutonSuivantVisible, setBoutonSuivantVisible] = useState(true);
  const clickBoutonSuivant = () => {
    if (isVisible) {
      setIsVisible(false);
      setIsVisible2(true);
    } else {
      setIsVisible(false);
      setIsVisible2(false);
      setBoutonSuivantVisible(false);
      setPremierChoixIsVisible(true);
    }
  };
  return (
    <div>
      <div className="prologue">
        {isVisible ? <p>{prologue.partie1}</p> : null}
        {isVisible2 ? <p>{prologue.partie2}</p> : null}
        {boutonSuivantVisible ? (
          <button className="boutonSuivant" onClick={clickBoutonSuivant}>
            Suivant
          </button>
        ) : null}
      </div>
      {premierChoixIsVisible ? <PremierChoix /> : null}
    </div>
  );
};

export default Prologue;
