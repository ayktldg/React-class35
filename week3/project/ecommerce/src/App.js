import "./App.css";
import Home from "./pages/Home/Home";
import ProductDetail from "./pages/ProductDetail/ProductDetail";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Favourites from "./pages/Favourites/Favourites";
import { FavouritesProvider } from "./context/FavouritesContext";

function App() {
  return (
    <div className="App">
      <FavouritesProvider>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/favourites" element={<Favourites />} />
            <Route path="/products/:productId" element={<ProductDetail />} />
          </Routes>
        </BrowserRouter>
      </FavouritesProvider>
    </div>
  );
}

export default App;
