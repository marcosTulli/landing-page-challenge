import React from "react";
import clock from "../../../assets/Ic_Hour.svg";
import office from "../../../assets/Ic_HomeOffice.svg";
import workshop from "../../../assets/Ic_Workshops.svg";
import snack from "../../../assets/Ic_DrinkSnacks.svg";
import laptop from "../../../assets/Ic_laptop.svg";
import brain from "../../../assets/Ic_brain.svg";

const Benefits = () => {
  return (
    <div>
      <h2>
        Entre nuestros beneficios se encuentran <span>;)</span>
      </h2>
      <ul>
        <li>
          <h3>Flexibilidad horaria</h3>
          <img src={clock} alt="flexibilidad horaria" />
        </li>
        <li>
          <h3>Home Office</h3>
          <img src={office} alt="Home Office" />
        </li>
        <li>
          <h3>Capacitaciones y Workshops</h3>
          <img src={workshop} alt="Capacitaciones y Workshops" />
        </li>
        <li>
          <h3>Snacks, frutas y bebidas gratis</h3>
          <img src={snack} alt="Snacks, frutas y bebidas gratis" />
        </li>
        <li>
          <h3>Semana remota</h3>
          <img src={laptop} alt="Semana remota" />
        </li>
        <li>
          <h3>Trabajar en ultimas tecnologias</h3>
          <img src={brain} alt="Trabajar en ultimas tecnologias" />
        </li>
      </ul>
    </div>
  );
};

export default Benefits;
