import { Link } from "react-router-dom";
import { Button, Badge } from "react-bootstrap";

export const ItemDetail = ({ item }) => {
  return (
    <div className="container">
      <h1>{item.title}</h1>
      <img src={item.pictureUrl} width="240px" alt="Cargando Producto"></img>
      <p>{item.description}</p>
      <span>${item.price}</span>
      <div className="gap-3">
        <Link to="/tienda">
          <Button variant="primary">Volver a la Tienda</Button>
        </Link>
      </div>
      <div>
      {""}<Badge pill bg="secondary">
          {item.category}
        </Badge>
      </div>
    </div>
  );
};
