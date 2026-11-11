const Guerrero = ({ nombre, poder, raza }) => {
  return (
    <article className="guerrero">
      <h2>{nombre}</h2>
      <p>Poder:{poder}</p>
      <p>Raza:{raza}</p>
    </article>
  );
};
export default Guerrero;
