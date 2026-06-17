import { useEffect, useState } from "react";
import categoriesInfo from "../data/categoriesInfo";

function Items() {
  const [categorias, setCategorias] = useState([]);

  useEffect(() => {
    const cargarCategorias = async () => {
      try {
        const response = await fetch(
          "https://opentdb.com/api_category.php"
        );

        const data = await response.json();

        const categoriasConCantidad = await Promise.all(
          data.trivia_categories.map(async (categoria) => {
            const countResponse = await fetch(
              `https://opentdb.com/api_count.php?category=${categoria.id}`
            );

            const countData = await countResponse.json();

            return {
              ...categoria,
              totalPreguntas:
                countData.category_question_count
                  .total_question_count,
            };
          })
        );

        setCategorias(categoriasConCantidad);
      } catch (error) {
        console.error(error);
      }
    };

    cargarCategorias();
  }, []);

  return (
    <div>
      <h1>Sabiduría Oculta</h1>

      <p>
        Seleccioná una categoría para comenzar tu
        aventura.
      </p>

      <div className="categories-grid">
        {categorias.map((categoria) => (
          <div
            key={categoria.id}
            className="category-card"
          >
            <img
              src={categoriesInfo[categoria.id]?.image}
              alt={
                categoriesInfo[categoria.id]?.displayName ||
                categoria.name
              }
              className="category-image"
            />

            <h3>
              {categoriesInfo[categoria.id]?.displayName ||
                categoria.name}
            </h3>

            <p>
              {categoriesInfo[categoria.id]?.description ||
                "Descripción no disponible"}
            </p>

            <p className="question-count">
              {categoria.totalPreguntas} preguntas
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