import styles from "./App.module.css";
import NavList from "./components/NavList/NavList";
import ProductList from "./components/ProductList/ProductList";
import { useState } from "react";

function App() {
  const [selectedCategory, setSelectedCategory] = useState();
  const [activeCategory, setActiveCategory] = useState();

  const onSelectCategory = (categoryName) => {
    const currentCategory = categoryName.replace("FAKE: ", "");
    setSelectedCategory(currentCategory);
    setActiveCategory(categoryName);
  };

  return (
    <div className={styles.App}>
      <header>
        <h1>Products</h1>
        <NavList
          activeCategory={activeCategory}
          onSelectCategory={onSelectCategory}
        />
      </header>
      <main>
        <ProductList selectedCategory={selectedCategory} />
      </main>
    </div>
  );
}

export default App;
