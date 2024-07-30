
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./components/Home";

function About() {
  return <h1>This is ALL ABOUT MOI.</h1>;
}

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
