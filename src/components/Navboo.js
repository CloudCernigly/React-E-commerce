import "bootstrap/dist/css/bootstrap.min.css";
import "font-awesome/css/font-awesome.min.css";
import NavBar from "./NavBar.css";

export const Navboo = () => {
  return (
    <div className="container">
      <nav className="navbar navbar-expand-lg ">
        <button className="btn ms-3" type="submit">
          <i className="fa fa-pencil"></i>
          <span className="badge text-white rounded-pill border border-dark">
            4
          </span>
        </button>
      </nav>
    </div>
  );
};
