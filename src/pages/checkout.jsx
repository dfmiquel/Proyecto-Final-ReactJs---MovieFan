import { Form, Button } from "react-bootstrap";
import { useState, useContext } from "react";
import { CartContext } from "../context/cartContext";
import { collection, addDoc } from "firebase/firestore";
import { db } from "../firebase/firebase";
import Swal from "sweetalert2";
import withReactContent from "sweetalert2-react-content";

export const Order = () => {
  const { items, clear } = useContext(CartContext);
  const [error, setError] = useState(false);
  const [buyer, setBuyer] = useState({
    name: "",
    phone: "",
    email: "",
  });

  const handleChange = (evt) => {
    setBuyer({
      ...buyer,
      [evt.target.name]: evt.target.value,
    });
  };

  const submitHandler = async (e) => {
    e.preventDefault();
    setError(false);

    if (!buyer.name || !buyer.phone || !buyer.email) {
      const MySwal = withReactContent(Swal);
      MySwal.fire({
        didOpen: () => {
          MySwal.clickConfirm();
        },
      }).then(() => {
        return MySwal.fire({
          icon: "error",
          title: <p>Faltan datos!</p>,
        });
      });
    } else {
      const newOrder = {
        buyer,
        items: items.map((item) => ({
          id: item.id,
          title: item.name,
          price: item.price,
          quantity: item.qty,
          stock: item.stock,
        })),
      };
      try {
        const docRef = await addDoc(collection(db, "buyer"), newOrder);
        // const docRef2 = await updateDoc(collection(db, "items"), newOrder2);
        const MySwal = withReactContent(Swal);
        MySwal.fire({
          didOpen: () => {
            MySwal.clickConfirm();
          },
        }).then(() => {
          return MySwal.fire({
            icon: "success",
            title: (
              <>
                <p>Orden de Compra Exitosa</p> <p>ID de seguimiento: {docRef.id}</p>
              </>
            ),
          });
        });
        clear();
      } catch (error) {
        <p>Hubo un Error: {error}</p>;
      }
    }
  };

  return (
    <Form onSubmit={submitHandler}>
      <Form.Group className="mb-3" controlId="ControlTextarea1">
        <Form.Label>Nombre</Form.Label>
        <Form.Control
          size="normal"
          type="text"
          placeholder="Ingrese su nombre y apellido"
          value={buyer.name}
          name="name"
          onChange={handleChange}
        />
      </Form.Group>
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Email address</Form.Label>
        <Form.Control
          size="normal"
          type="email"
          name="email"
          placeholder="Ingrese su email"
          value={buyer.email}
          onChange={handleChange}
        />
      </Form.Group>
      <Form.Group className="mb-3" controlId="ControlTextarea1">
        <Form.Label>Teléfono</Form.Label>
        <Form.Control
          size="normal"
          type="number"
          placeholder="Ingrese Nro de Teléfono"
          name="phone"
          value={buyer.phone}
          onChange={handleChange}
        />
      </Form.Group>
      <Button variant="primary" type="submit">
        Enviar
      </Button>
    </Form>
  );
};
