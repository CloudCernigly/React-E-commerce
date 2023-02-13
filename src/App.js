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
<<<<<<< HEAD
    <div>
      <NavBar />
      <div className="container">
        <CardList data={data} />
      </div>
=======
    <div className="container">
      <Cart cart={cartProducts} />
      <ProductList products={data} incrementCart={handleProductClick} />
>>>>>>> 86d4e28ecbf68ef194b9acc346b33feabc873572
    </div>
  );
};

export default App;
