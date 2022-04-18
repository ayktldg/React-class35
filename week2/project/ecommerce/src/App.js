import "./App.css";
import NavList from "./components/NavList";
import ProductList from "./components/ProductList";
import { useState, useEffect } from "react";
import { Spinner } from "@chakra-ui/react";
import fetchData from "./helpers/fetchData";

function App() {
  const [products, setProducts] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");

  useEffect(() => {
    fetchProducts();
  }, []);

  const fetchProducts = async (endpoint = "") => {
    try {
      setIsLoading(true);
      const products = await fetchData(endpoint);
      setIsLoading(false);
      setProducts(products);
    } catch (error) {
      setIsLoading(false);
      setErrorMessage(error.message);
    }
  };

  return (
    <div className="App">
      <header>
        <h1>Products</h1>
        <NavList fetchProducts={fetchProducts} />
      </header>
      <main>
        {isLoading ? (
          <Spinner className="spinner" />
        ) : !errorMessage ? (
          <ProductList products={products} />
        ) : (
          <h3>{errorMessage}</h3>
        )}
      </main>
    </div>
  );
}

export default App;
