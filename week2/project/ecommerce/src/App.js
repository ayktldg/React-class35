import "./App.css";
import NavList from "./components/Navlist/NavList";
import ProductList from "./components/ProductList/ProductList";
import { useState, useEffect } from "react";
import { Spinner } from "@chakra-ui/react";
import fetchData from "./helpers/fetchData";

function App() {
  const [products, setProducts] = useState([]);
  const [errorMessage, setErrorMessage] = useState();
  const [activeCategory, setActiveCategory] = useState();

  useEffect(() => {
    fetchProducts();
  }, [activeCategory]);

  const onSelectCategory = (category) => {
    setActiveCategory(category);
  };

  const fetchProducts = async () => {
    try {
      const products = activeCategory
        ? await fetchData(`category/${activeCategory}`)
        : await fetchData();
      setProducts(products);
    } catch (error) {
      setErrorMessage(error.message);
    }
  };

  return (
    <div className="App">
      <header>
        <h1>Products</h1>
        <NavList
          onSelectCategory={onSelectCategory}
          activeCategory={activeCategory}
        />
      </header>
      <main>
        {!products ? (
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
