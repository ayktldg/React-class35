import "./App.css";
import allProducts from "./fake-data/all-products";
import categories from "./fake-data/all-categories";
import NavList from "./components/NavList";
import ProductList from "./components/ProductList";
import { useState } from "react";

function App() {
  const [products, setProducts] = useState(allProducts);

  const handleCategory = (categoryName) => {
    const currentCategory = categoryName.replace("FAKE: ", "");
    const filteredProducts = allProducts.filter(
      (product) => product.category === currentCategory
    );
    setProducts(filteredProducts);
  };

  return (
    <div className="App">
      <header>
        <h1>Products</h1>
        <NavList categories={categories} handleCategory={handleCategory} />
      </header>
      <main>
        <ProductList products={products} />
      </main>
    </div>
  );
}

export default App;
