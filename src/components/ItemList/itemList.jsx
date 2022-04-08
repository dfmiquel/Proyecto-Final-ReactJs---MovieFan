import { Item } from "../item/item";

export const ItemList = ({ products }) => {
  return (
    <>
      {products.map((product) => {
        return (
          <Item
            key={product.id}
            id={product.id}
            title={product.title}
            price={product.price}
            image={product.pictureUrl}
            description={product.description}
          />
        );
      })}
    </>
  );
};
