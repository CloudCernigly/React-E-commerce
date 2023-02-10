import { connection } from "./Api";
import { useState, useEffect } from "react";

const App = () => {
  const [data, setData] = useState([]);

  const update = async () => {
    const response = await connection();

    setData(response);
    console.log(response);
  };

  useEffect(() => {
    update();
  },[]);

  return (
    <div>
      <h1>Marco Pagaaaa</h1>
    </div>
  );
};

export default App;
