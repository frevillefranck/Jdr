import React, { useState } from "react";
import Titre_Chapitre from "./components/Titre_Chapitre";
import Pdv_Attack from "./components/Pdv_Attack";
import Form_Choix_Pseudo from "./components/Form_Choix_Pseudo";
import Prologue from "./components/Prologue";

function App() {
  const [prologue, setPrologue] = useState(false);

  return (
    <div className="App">
      <Titre_Chapitre />
      <Pdv_Attack />
      <Form_Choix_Pseudo />
      {prologue && <Prologue />}
    </div>
  );
}

export default App;
