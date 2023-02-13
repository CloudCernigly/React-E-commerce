import { useState, useEffect } from "react";
import { getData } from "./Api";
import ProductList from "./components/ProductList";
import Cart from "./components/Cart";

const App = () => {
  const [data, setData] = useState([]);
  const [cartProducts, setCartProducts] = useState([]);
  

  const handleProductClick = (product) => {
    const newCart = [...cartProducts, product];
    setCartProducts(newCart);
  };
  useEffect(() => {
    const loadData = async () => {
      const result = await getData();
      setData(result);
    };
    loadData();
  }, []);

  return (
    <div className="container">
      <Cart cart={cartProducts} />
      <ProductList products={data} incrementCart={handleProductClick} />
    </div>
  );
};

export default App;
