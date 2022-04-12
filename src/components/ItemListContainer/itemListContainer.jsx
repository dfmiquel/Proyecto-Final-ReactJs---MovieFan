import "./itemListContainer.css";
import { useEffect, useState } from "react";
import { ItemList } from "../itemList/itemList";
import { useParams } from "react-router-dom";
import { Spinner } from "react-bootstrap";
import empty from "../../images/empty2.jpg";
import { collection, getDocs, query, where } from "firebase/firestore";
import { db } from "../../firebase/firebase";

export const ItemListContainer = ({ greeting }) => {
  const [products, setProducts] = useState([]);
  const [error, setError] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  const { categoryID } = useParams();

  const getProducts = async () => {
    try {
      setIsLoading(true);
      const { docs } = await getDocs(query(collection(db, "items")));
      const parseData = docs.map((doc) => {
        return {
          id: doc.id,
          ...doc.data(),
        };
      });
      if (categoryID) {
        const { docs } = await getDocs(
          query(collection(db, "items"), where("category", "==", categoryID))
        );
        const parseCategory = docs.map((doc) => {
          return {
            id: doc.id,
            ...doc.data(),
          };
        });
        setProducts(parseCategory);
      } else {
        setProducts(parseData);
      }
    } catch (error) {
      setError(error);
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    getProducts();
  }, [categoryID]);

  return (
    <>
      <div className="ItemListContainer">
        <h1>{greeting}</h1>
      </div>
      {isLoading ? (
        <div className="loader">
          <Spinner animation="border" variant="success" role="status" size="lg"></Spinner>
          <h2>&nbsp;&nbsp;&nbsp;&nbsp;Cargando Productos...</h2>
        </div>
      ) : error ? (
        <p>Error: {error}</p>
      ) : products.length ? (
        <div className="ItemListContainer">
          <ItemList products={products} />
        </div>
      ) : (
        <div className="emptyCart">
          <img src={empty} className="emptyCartEmpty" />

        </div>
      )}
    </>
  );
};
