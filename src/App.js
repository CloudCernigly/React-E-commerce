import { connection } from "./Api";
import { useState, useEffect } from "react";
import CardList from "./components/CardList";
import { Navboo } from "./components/Navboo";

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
        <Navboo />
        <h1>Marco</h1>
        <CardList data={data} />
      </div>
    </div>
  );
};

export default App;
