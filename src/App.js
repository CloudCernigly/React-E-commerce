import { NavBar } from "./components/NavBar";
import { connection } from "./api";
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
      <NavBar />
      <div className="container d-flex">
        <CardList data={data} />
      </div>
    </div>
  );
};

export default App;
