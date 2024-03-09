import { useEffect, useState } from "react";
import { getProduct } from "../../../productsList";
import { useParams, useNavigate } from "react-router-dom";
import { ItemDetail } from "./ItemDetail";

export const ItemDetailContainer = () => {
  const { id } = useParams();
  console.log(id);

  const [item, setItem] = useState(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    getProduct(+id).then((resp) => {
      setItem(resp);
      setIsLoading(false);
    });
  }, [id]);

  const onAdd = (cantidad) => {
    let infoProducto = {
      ...item,
      quantity: cantidad,
    };
    console.log(infoProducto);
  };

  return (
    <>
      {isLoading ? (
        <h2>Cargando producto...</h2>
      ) : (
        <ItemDetail item={item} onAdd={onAdd} />
      )}
    </>
  );
};
