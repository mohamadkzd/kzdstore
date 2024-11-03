import { Route, Routes } from "react-router-dom";
import "./App.css";
import Home from "./Pages/Home/Home";
import Store from "./Pages/Store/Store";
import Layout from "./Components/Layout/Layout";
import ProductDetail from "./Pages/ProductDetail/ProductDetail";

function App() {
  return (
    <>
      
      <Layout>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/store" element={<Store />} />
          <Route path="/productdetail/:id" element={<ProductDetail />} />
        </Routes>
      </Layout>
    </>
  );
}

export default App;
