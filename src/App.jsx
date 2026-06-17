import { Routes, Route } from "react-router-dom";
import Settings from "./pages/Settings";

function App() {
  return (
    <Routes>
      <Route path="/settings" element={<Settings />} />
    </Routes>
  );
}

export default App;
