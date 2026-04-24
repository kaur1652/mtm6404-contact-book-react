import { Routes, Route } from "react-router-dom";
import Home from "./pages/home";
import Details from "./pages/details";
import Add from "./pages/add";
import Edit from "./pages/edit";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/contact/:id" element={<Details />} />
      <Route path="/add" element={<Add />} />
      <Route path="/edit/:id" element={<Edit />} />
    </Routes>
  );
}

export default App;