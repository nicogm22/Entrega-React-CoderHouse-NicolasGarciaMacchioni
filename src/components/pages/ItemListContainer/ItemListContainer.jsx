import ItemList from "./ItemList";
import { products } from "../../../productsList";
import { useState, useEffect } from "react";

export const ItemListContainer = () => {
  const [items, setItems] = useState([]);

  useEffect(() => {
    const tarea = new Promise((resolve, reject) => {
      resolve(products);
    });

    tarea
      .then((res) => {
        setItems(res);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  return (
    <>
      <ItemList items={items} />
    </>
  );
};

export default ItemListContainer;
