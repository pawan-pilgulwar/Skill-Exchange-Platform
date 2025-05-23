import { Route, Routes } from "react-router-dom";
import "./App.css";
import Home from "./pages/Home";
import Skills from "./pages/Skills";
import Dashboard from "./pages/Dashboard";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/skills" element={<Skills />} />
      <Route path="/dashboard" element={<Dashboard />} />
    </Routes>
  );
}

export default App;
