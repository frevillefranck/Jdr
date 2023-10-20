import React from "react";
import Titre_Chapitre from "./components/Titre_Chapitre";
import Pdv_Attack from "./components/Pdv_Attack";
import Pseudo from "./components/Pseudo";
import Form_Choix_Pseudo from "./components/Form_Choix_Pseudo";
function App() {
  return (
    <div className="App">
      <Titre_Chapitre />
      <Pseudo />
      <Pdv_Attack />
      <Form_Choix_Pseudo />
    </div>
  );
}

export default App;
