import { useState } from "react";
import { BsFillCartFill, BsTrash } from "react-icons/bs";
import { Modal } from "react-bootstrap";

const Cart = ({ cart, removeItem }) => {
  console.log(cart);
  console.log(removeItem);

  const [showList, setShowList] = useState(false);

  const toggleShowList = () => {
    setShowList(!showList);
  };
  const handleRemove = (product) => {
    removeItem(product);
  };

  let content = <></>;
  if (showList) {
    content = (
      <div>
        <ul>
          {cart.map((el) => {
            return (
              <li key={el.id}>
                {el.title} {el.price}
                <button
                  className=" btn btn-light"
                  /*onClick={()=>{handleRemove(el)}}*/ onClick={() => {
                    removeItem(el);
                  }}
                >
                  <BsTrash />
                </button>
              </li>
            );
          })}
        </ul>
      </div>
    );
  }

  return (
    <div className="alert alert-info">
      <button className="btn btn-info btn-lg" onClick={toggleShowList}>
        <BsFillCartFill />
        <span className="badge bg-secondary">{cart.length}</span>
      </button>
      {content}
    </div>
  );
};

export default Cart;

