import { useEffect, useState } from "react";

function Items() {
  const [categorias, setCategorias] = useState([]);
  const [cargando, setCargando] = useState(true);

  useEffect(() => {
    fetch("https://opentdb.com/api_category.php")
      .then((response) => response.json())
      .then((data) => {
        setCategorias(data.trivia_categories);
        setCargando(false);
      })
      .catch((error) => {
        console.error("Error:", error);
        setCargando(false);
      });
  }, []);

  if (cargando) {
    return <h2>Cargando categorías...</h2>;
  }

  return (
    <div>
      <h1>Sabiduría Oculta</h1>

      <p>Seleccioná una categoría:</p>

      <div className="categories-grid">
        {categorias.map((categoria) => (
          <div
            key={categoria.id}
            className="category-card"
          >
            <h3>{categoria.name}</h3>

            <p>
              Próximamente agregaremos descripción
              e imagen.
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Items;