import "./Cardcss.css";
import { useState } from "react";

const Card = ({ item }) => {
  // const [cart, setCart] = useState(0);

  // const addToCart = (event) => {
  //   event.preventDefault();

  //   setCart(item.price);
  //   console.log(cart);
  // };

  return (
    <div className="card shadow h-75" style={{ width: "14rem" }}>
      <div className="card-header">
        <img
          src={item.image}
          alt={"breed " + item.name}
          className="img-thumbnail  align-items-lg-center "
          style={{ width: "100%" }}
        />
      </div>
      <div className="card-body desc">
        <h3>{item.name}</h3>
        <p>{item.title}</p>
        <span className="h6 ">Price:€{item.price} </span>
        <div className="d-none">{item.description}</div>
      </div>
      <div className="card-footer">
        <button className="btn text-black">
          <i className="fa fa-shopping-cart me-1" aria-hidden="true"></i>Add to
          cart
        </button>
        {/* <span className="h6">{item.minLifeSpan}</span>
        <span className="h6">{item.maxLifeSpan}</span>
        <span className="h6">{item.size}</span> */}
      </div>
    </div>
  );
};

export default Card;
