import { useState } from "react";
import Guerrero from "./Guerrero";

const guerreros = [
  { id: 1, nombre: "Goku", poder: 9000, raza: "Saiyajin" },
  { id: 2, nombre: "Vegeta", poder: 8500, raza: "Saiyajin" },
  { id: 3, nombre: "Gohan", poder: 8000, raza: "Saiyajin" },
];

function App() {
  const [busqueda, setBusqueda] = useState("");
  const [nombre, setNombre] = useState("");

  const guerrerosFiltrados = guerreros.filter((guerrero) =>
    guerrero.nombre.toLowerCase().includes(busqueda.toLocaleLowerCase()),
  );
  return (
    <main>
      <h1>Guerreros Z</h1>

      <input
        type="text"
        placeholder="Buscar guerrero..."
        value={busqueda}
        onChange={(event) => setBusqueda(event.target.value)}
      />

      <p>Estás buscando: {busqueda}</p>

      <input
        type="text"
        placeholder="Tu nombre..."
        value={nombre}
        onChange={(event) => setNombre(event.target.value)}
      />

      {nombre ? (
        <>
          <p>¡Bienvenido al torneo, {nombre}! 🥋</p>
          <p>Tu nombre tiene {nombre.length} letras</p>
        </>
      ) : (
        <p>Escribe tu nombre para inscribirte</p>
      )}

      {guerrerosFiltrados.map((guerrero) => (
        <Guerrero
          key={guerrero.id}
          nombre={guerrero.nombre}
          poder={guerrero.poder}
          raza={guerrero.raza}
        />
      ))}
    </main>
  );
}

export default App;
