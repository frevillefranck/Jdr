import React, { useState } from "react";
import { prologue } from "../content";
import Choix1 from "./Choix1";
import Choix2 from "./Choix2";
const Prologue = () => {
  const [isVisible, setIsVisible] = useState(true);
  const [isVisible2, setIsVisible2] = useState(false);
  const [choix1IsVisible, setChoix1IsVisible] = useState(false);
  const [choix2IsVisible, setChoix2IsVisible] = useState(false);

  const [boutonSuivantVisible, setBoutonSuivantVisible] = useState(true);
  const clickBoutonSuivant = () => {
    if (isVisible) {
      setIsVisible(false);
      setIsVisible2(true);
    } else {
      setIsVisible(false);
      setIsVisible2(false);
      setBoutonSuivantVisible(false);
      setChoix1IsVisible(true);
      setChoix2IsVisible(true);
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
      {choix1IsVisible ? <Choix1 /> : null}
      {choix2IsVisible ? <Choix2 /> : null}
    </div>
  );
};

export default Prologue;
