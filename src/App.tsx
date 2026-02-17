import { Routes, Route } from "react-router-dom";
import Home from "./pages/home";
import DateCalculatorForm from "./components/DateCalculatorForm";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/calcular" element={<DateCalculatorForm />} />
    </Routes>
  );
}

export default App;
