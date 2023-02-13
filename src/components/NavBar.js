import "bootstrap/dist/css/bootstrap.min.css";
import "font-awesome/css/font-awesome.min.css";
import "./NavBarcss.css";

export const NavBar = () => {
  return (
    <div className="container">
      <nav className="navbar navbar-expand-lg ">
        <button className="btn ms-3" type="submit">
          <i className="fa fa-shopping-cart" aria-hidden="true"></i>
          <span className="badge text-white rounded-pill border border-dark">
            0
          </span>
        </button>
      </nav>
    </div>
  );
};
