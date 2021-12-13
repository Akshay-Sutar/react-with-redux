import "./App.css";
import Header from "./containers/Header";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import ProductListing from "./containers/ProductListing";
import ProductDetails from "./containers/ProductDetails";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/" element={<ProductListing />} exact></Route>
          <Route path="/product/:id" element={<ProductDetails />} exact></Route>
          <Route>404 not found</Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
