import { Link } from "react-router-dom";

function BottomBar() {
  return (
    <nav className="bottom-bar">
      <Link to="/">Jugar</Link>

      <Link to="/Settings">
        Configuración
      </Link>
    </nav>
  );
}

export default BottomBar;