import Guerrero from "./Guerrero";

const guerreros = [
  { id: 1, nombre: "Goku", poder: 9000, raza: "Saiyajin" },
  { id: 2, nombre: "Vegeta", poder: 8500, raza: "Saiyajin" },
  { id: 3, nombre: "Gohan", poder: 8000, raza: "Saiyajin" },
];

function App() {
  return (
    <main>
      <h1>Guerreros Z</h1>
      {guerreros.map((guerrero) => {
        return (
          <Guerrero
            key={guerrero.id}
            nombre={guerrero.nombre}
            poder={guerrero.poder}
            raza={guerrero.raza}
          />
        );
      })}
    </main>
  );
}

export default App;
