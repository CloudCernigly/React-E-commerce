
const Card = ({ item }) => {
  return (
    <div className="card shadow h-100 cardimg " style={{ width: "18rem" }}>
      <div className="card-header">
        <img
          src={item.image}
          alt={"breed " + item.name}
          className="img-thumbnail align-items-lg-center im"
        />
      </div>
      <div className="card-body">
        <h3>{item.name}</h3>
        <p>{item.description}</p>
      </div>
      <div className="card-footer">
         <span className="h6">Price:€{item.price} </span>
        {/* <span className="h6">{item.minLifeSpan}</span>
        <span className="h6">{item.maxLifeSpan}</span>
        <span className="h6">{item.size}</span> */}
      </div>
    </div>
  );
};

export default Card;
