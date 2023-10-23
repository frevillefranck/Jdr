import React, { useState } from "react";
import { TransitionGroup, Transition } from "react-transition-group";

const Choix1 = () => {
  const [isVisible, setIsVisible] = useState(false);

  const handleClick = () => {
    setIsVisible(!isVisible);
  };
  return (
    <div>
      <button onClick={handleClick}>Afficher/masquer</button>
      <TransitionGroup>
        <Transition
          in={isVisible}
          duration={2000}
          onEnter={() => {
            return <div style={{ opacity: 0 }} />;
          }}
          onExited={() => {
            return <div style={{ opacity: 1 }} />;
          }}
        >
          <div>Mon composant</div>
        </Transition>
      </TransitionGroup>
    </div>
  );
};

export default Choix1;
