import { Link } from "react-router-dom";

function Sidebar() {
  return (
    <aside className="sidebar">
      <h2>Sabiduría Oculta</h2>

      <Link to="/">Jugar</Link>

      <Link to="/Settings">
        Configuración
      </Link>
    </aside>
  );
}

export default Sidebar;