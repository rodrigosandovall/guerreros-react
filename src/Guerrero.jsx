import { useState } from "react";

const Guerrero = ({ nombre, poder, raza }) => {
  const [poderActual, setPoderActual] = useState(poder);

  return (
    <article className="guerrero">
      <h2>{nombre}</h2>
      <p>Poder: {poderActual}</p>
      <p>Raza: {raza}</p>
      <button onClick={() => setPoderActual(poderActual + 1000)}>
        Entrenar 💪
      </button>
      <button
        onClick={() => {
          const nuevoPoder = poderActual - 500;
          if (nuevoPoder < 0) {
            setPoderActual(0);
          } else {
            setPoderActual(nuevoPoder);
          }
        }}
      >
        Descansar
      </button>
    </article>
  );
};

export default Guerrero;
