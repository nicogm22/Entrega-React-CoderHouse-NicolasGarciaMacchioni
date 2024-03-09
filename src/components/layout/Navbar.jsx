import { Link } from "react-router-dom";
import CartWidget from "../common/CartWidget";
import "./Navbar.css";

export const Navbar = () => {
  return (
    <>
      <div className="containerNavbar">
        <Link to="/" style={{ color: "beige" }}>
          Comision 54030
        </Link>
        <ul className="categories">
          <Link to="/">Todo</Link>
          <Link to="/category/maquinas">Maquinas</Link>
          <Link to="/category/accesorios">Accesorios</Link>
        </ul>
        <CartWidget />
      </div>
    </>
  );
};
