import React from "react";
import "../styles/index.css";
import { titres } from "../content";

const Titre_Chapitre = () => {
  return (
    <div>
      <h2 className="titre">{titres.principal}</h2>
    </div>
  );
};

export default Titre_Chapitre;
