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
  );
}

export default App;