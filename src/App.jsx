import { BrowserRouter, Routes, Route } from "react-router-dom";

import Layout from "./components/Layout";
import Items from "./pages/Items";
import Configuracion from "./pages/Configuracion";
import Settings from "./pages/Settings";

import "./App.css";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<Layout />}>
          <Route path="/" element={<Items />} />
          <Route path="/configuracion" element={<Configuracion />} />
          <Route path="/settings" element={<Settings />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;