import { useContext } from "react";
import { CartContext } from "../context/cartContext";
import { Table, Button, Stack } from "react-bootstrap";
import { Link } from "react-router-dom";
import "./styles.css";
import emptyCart from "../images/empty-cart.jpg";

export const Cart = () => {
  const { items, removeItem, clear, total } = useContext(CartContext);
  if (items.length === 0) {
    return (
      <>
        <div className="emptyCart">
          <p>
            <strong>El carrito está vacío!</strong>
          </p>
          <img src={emptyCart} className="emptyCartEmpty" alt="emptyCart" />
          <Link to="/tienda">
            <Button variant="primary">Volver a la tienda</Button>
          </Link>
        </div>
      </>
    );
  } else {
    return (
      <>
        <Table striped bordered hover >
          <thead>
            <tr>
              <th TableHeaderColumn width={'10%'}>Unidades</th>
              <th TableHeaderColumn width={'30%'}>Item</th>
              <th TableHeaderColumn width={'12%'}>Precio unitario</th>
              <th TableHeaderColumn width={'12%'}>Subtotal</th>
              <th >Acción</th>
            </tr>
          </thead>
          <tbody>
            {items.map((item) => (
              <tr key={item.id}>
                <td>{item.qty}</td>
                <td>{item.description}</td>
                <td>${item.price}</td>
                <td>${(item.price * item.qty).toFixed(2)}</td>
                <td>
                  <Button
                    variant="warning"
                    onClick={() => removeItem(item.id, item.price, item.qty)}
                  >
                    Remover item
                  </Button>
                </td>
              </tr>
            ))}
            <tr>
              <td></td>
              <td>TOTAL</td>
              <td></td>
              <td>${total.toFixed(2)}</td>
              <td></td>
            </tr>
          </tbody>
        </Table>

        <Stack direction="horizontal" gap={3}>
          <Button variant="outline-danger" onClick={() => clear()}>
            Vaciar carrito
          </Button>
          <div className="vr" />
          <Link to={`/order`}>
            {" "}
            <Button variant="outline-success" gap="3">
              Ir al checkout
            </Button>
          </Link>
        </Stack>
      </>
    );
  }
};