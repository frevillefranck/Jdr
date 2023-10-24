import React, { useState } from "react";

const PremierChoix = () => {
  const [choix1IsVisible, setChoix1IsVisible] = useState(true);
  const [choix2IsVisible, setChoix2IsVisible] = useState(true);

  const clickBoutonChoix1 = () => {
    setChoix2IsVisible(false);
    setChoix1IsVisible(false);
  };
  const clickBoutonChoix2 = () => {
    setChoix1IsVisible(false);
    setChoix2IsVisible(false);
  };
  return (
    <div>
      <div className="premierChoix">
        {choix1IsVisible ? (
          <div className="choix">
            <p>
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Dolor
              obcaecati aperiam tempora eius necessitatibus et repellat laborum
              maxime sunt ab officiis deserunt veniam voluptas ullam, sint nobis
              doloribus ut. Reprehenderit?
            </p>
            <button className="boutonChoix" onClick={clickBoutonChoix1}>
              Faire ce choix
            </button>
          </div>
        ) : null}
        {choix2IsVisible ? (
          <div className="choix">
            <p>
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Dolor
              obcaecati aperiam tempora eius necessitatibus et repellat laborum
              maxime sunt ab officiis deserunt veniam voluptas ullam, sint nobis
              doloribus ut. Reprehenderit?
            </p>
            <button className="boutonChoix" onClick={clickBoutonChoix2}>
              Faire ce choix
            </button>
          </div>
        ) : null}
      </div>
    </div>
  );
};

export default PremierChoix;
