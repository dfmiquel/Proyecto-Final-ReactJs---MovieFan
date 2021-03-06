import "./cartWidget.css";
import cart from "../../images/cart.svg";
import { useContext } from "react";
import { CartContext } from "../../context/cartContext";
import { Badge } from "react-bootstrap";

export const CartWidget = () => {
  const { conteo } = useContext(CartContext);

  if (conteo === 0) {
    return (
      <div className="container">
        <ul>
          <li>
            <img src={cart} alt="Logo" class="navbar-brand p0 pull-right" className="carrito" />
          </li>
        </ul>
      </div>
    );
  } else {
    return (
      <div className="container">
        <ul>
          <li>
            <img src={cart} alt="Logo" height="48" className="carrito" />
            <Badge pill bg="danger">
              <span>{conteo}</span>
            </Badge>
          </li>
        </ul>
      </div>
    );
  }
};
