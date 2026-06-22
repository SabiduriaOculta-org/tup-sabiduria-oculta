import { Routes, Route, Navigate } from "react-router-dom";

import Login from "./components/Login";
import Layout from "./components/Layout";

import Jugar from "./pages/Jugar";
import Settings from "./pages/Settings";

import "./App.css";

function App() {
  const isLoggedIn =
    sessionStorage.getItem("loggedIn") === "true";

  return (
    <Routes>

      <Route
        path="/login"
        element={<Login />}
      />

      <Route
        element={
          isLoggedIn
            ? <Layout />
            : <Navigate to="/login" />
        }
      >
        <Route
          path="/"
          element={<Jugar />}
        />

        <Route
          path="/settings"
          element={<Settings />}
        />
      </Route>

      <Route
        path="*"
        element={<Navigate to="/" />}
      />

    </Routes>
  );
}

export default App;