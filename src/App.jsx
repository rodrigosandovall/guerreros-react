import { useState, useEffect } from "react";
import Guerrero from "./Guerrero";

function App() {
  const [guerreros, setGuerreros] = useState([]);
  const [busqueda, setBusqueda] = useState("");
  const [nombre, setNombre] = useState("");
  const [cargando, setCargando] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const traerGuerreros = async () => {
      try {
        const respuesta = await fetch(
          "https://dragonball-api.com/api/characters",
        );
        const datos = await respuesta.json();
        setGuerreros(datos.items);
      } catch (err) {
        console.log(err);
        setError("No se pudieron cargar los guerreros 😢");
      } finally {
        setCargando(false);
      }
    };

    traerGuerreros();
  }, []);
  const guerrerosFiltrados = guerreros.filter((guerrero) =>
    guerrero.name.toLowerCase().includes(busqueda.toLocaleLowerCase()),
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

      {error && <p>{error}</p>}

      {cargando ? (
        <p>Cargando guerreros... ⏳</p>
      ) : (
        guerrerosFiltrados.map((guerrero) => (
          <Guerrero
            key={guerrero.id}
            nombre={guerrero.name}
            poder={Number(guerrero.ki.replaceAll(".", ""))}
            raza={guerrero.race}
          />
        ))
      )}
    </main>
  );
}

export default App;
