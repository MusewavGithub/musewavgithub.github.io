import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from './Pages/Home';
import Project from "./Pages/Project";
import 'bootstrap/dist/css/bootstrap.css';
import './App.css';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/project/" element={<Project />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
