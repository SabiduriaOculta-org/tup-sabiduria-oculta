import { useEffect, useState } from "react";
import categoriesInfo from "../data/categoriesInfo";

function Items() {
  const [categorias, setCategorias] = useState([]);

  useEffect(() => {
    fetch("https://opentdb.com/api_category.php")
      .then((response) => response.json())
      .then((data) => {
        setCategorias(data.trivia_categories);
      })
      .catch((error) => {
        console.error(error);
      });
  }, []);

  return (
    <div>
      <h1>Sabiduría Oculta</h1>
      <p>Seleccioná una categoría para comenzar tu aventura.</p>

      <div className="categories-grid">
        {categorias.map((categoria) => (
          <div
            key={categoria.id}
            className="category-card"
          >
            <h3>
              {categoriesInfo[categoria.id]?.displayName ||
                categoria.name}
            </h3>

            <p>
              {categoriesInfo[categoria.id]?.description ||
                "Descripción no disponible"}
            </p>

            <button className="play-btn">
              Jugar
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Items;