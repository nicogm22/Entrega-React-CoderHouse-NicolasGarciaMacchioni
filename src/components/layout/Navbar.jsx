import { Link } from "react-router-dom";
import CartWidget from "../common/CartWidget";
import "./Navbar.css";

export const Navbar = () => {
  return (
    <>
      <div className="containerNavbar">
        <Link to="/" style={{ color: "beige" }}>
          StrongMAX
        </Link>
        <ul className="categories">
          <Link to="/">Todas</Link>
          <Link to="/category/maquinas">Maquinas</Link>
          <Link to="/category/accesorios">Accesorios</Link>
        </ul>
        <CartWidget />
      </div>
    </>
  );
};
