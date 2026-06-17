import { Routes, Route, Navigate } from "react-router-dom";
import Login from "./components/Login";

function App() {
  const isLoggedIn = sessionStorage.getItem("loggedIn") === "true";

  return (
    <Routes>
      <Route path="/" element={<Navigate to="/login" />} />
      <Route path="/login" element={<Login />} />
      <Route
        path="/home"
        element={isLoggedIn ? <Home /> : <Navigate to="/login" />}
      />
      <Route
        path="/settings"
        element={isLoggedIn ? <Settings /> : <Navigate to="/login" />}
      />
    </Routes>
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