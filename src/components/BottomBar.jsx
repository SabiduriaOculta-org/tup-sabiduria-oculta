import { Link } from "react-router-dom";

function BottomBar() {
  return (
    <nav className="bottom-bar">
      <Link to="/">Items</Link>

      <Link to="/configuracion">
        Configuración
      </Link>
    </nav>
  );
}

export default BottomBar;