import { connection } from "./Api";
import { useState, useEffect } from "react";
import CardList from "./components/CardList";

const App = () => {
  const [data, setData] = useState([]);

  const update = async () => {
    const response = await connection();

    setData(response);
    console.log(response);
  };

  useEffect(() => {
    update();
  }, []);

  return (
    <div>
      <div className=" container">
        <h1>Marco Pagaaa</h1>
        <CardList data={data} />
      </div>
    </div>
  );
};

export default App;
