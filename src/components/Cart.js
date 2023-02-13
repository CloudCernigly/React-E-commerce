import { useState } from "react";
import { BsFillCartFill } from "react-icons/bs";
const Cart = ({ cart }) => {
  console.log(cart);

  const [showList, setShowList] = useState(false);

  const toggleShowList = () => {
    setShowList(!showList);
  };

  let content = <></>;
  if (showList) {
    content = (
      <div>
        <ul>
          {cart.map((el) => {
            return (
              <li>
                {el.title} {el.price}
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
