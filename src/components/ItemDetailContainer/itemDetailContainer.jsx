import { ItemCount } from "../itemCount/itemCount";
import { useEffect, useState, useContext } from "react";
import { useParams } from "react-router-dom";
import { ItemDetail } from "../itemDetail/itemDetail";
import { Spinner } from "react-bootstrap";
import { CartContext } from "../../context/cartContext";
import { doc, getDoc } from "firebase/firestore";
import { db } from "../../firebase/firebase";

export const ItemDetailContainer = () => {
  const { productID } = useParams();
  const [item, setItem] = useState([]);
  const [error, setError] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const { addItem } = useContext(CartContext);

  const getItem = async () => {
    try {
      setIsLoading(true);
      const docRef = doc(db, "items", productID);
      const docSnap = await getDoc(docRef)
      const result = { id: docSnap.id, ...docSnap.data() }
      setItem(result);
    } catch (error) {
      setError(error);
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    getItem();
  }, [productID]);

  return (
    <>
      {isLoading ? (
        <div className="loader">
          <Spinner animation="border" variant="success" role="status" size=""></Spinner>
          <h2>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Cargando Producto...</h2>
        </div>
      ) : error ? (
        <p>Error: {error}</p>
      ) : item ? (
        <div className="container">
          <div className="column">
            <div className="col-8">
              <ItemDetail item={item} />
            </div>
          </div>
          <div className="col-4 d-flex justify-content-center align-items-center">
            <ItemCount stock={item.stock} initial={1} addItem={addItem} item={item} />
          </div>
        </div>
      ) : (
        <p>No se encontrĂ³ el producto</p>
      )}
    </>
  );
};
