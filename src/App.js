import { useState, useEffect } from "react";
import { getData } from "./Api";
import ProductList from "./components/ProductList";
import Cart from "./components/Cart";

const App = () => {
  const [data, setData] = useState([]);
  const [cartProducts, setCartProducts] = useState([]);

  const itemIsPresent = (item) => {
    return (
      cartProducts.findIndex((el) => {
        return el.id === item.id;
      }) > -1
    );
  };

  const handleProductClick = (product) => {
    if (!itemIsPresent(product)) {
      const newCart = [...cartProducts, { ...product }];
      setCartProducts(newCart);
    } else {
      window.alert("Product is alerady  insert to cart");
    }
  };

  const removeItem = (product) => {
    const updatedItems = [...cartProducts];
    const index = updatedItems.indexOf(product);
    updatedItems.splice(index, 1);
    setCartProducts(updatedItems);
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
      <Cart cart={cartProducts} removeItem={removeItem} />
      <ProductList
        products={data}
        incrementCart={handleProductClick}
        itemIsPresent={itemIsPresent}
      />
    </div>
  );
};

export default App;
