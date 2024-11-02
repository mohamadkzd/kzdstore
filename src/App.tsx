import { Route, Routes } from "react-router-dom";
import "./App.css";
import Home from "./Pages/Home/Home";
import Store from "./Pages/Store/Store";
import Navbar from "./Components/Navbar/Navbar";

function App() {
  return (
    <div className="">
    <Navbar/>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/store" element={<Store />} />
      </Routes>
    </div>
  );
}

export default App;