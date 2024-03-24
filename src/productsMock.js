export let products = [
  {
    id: 1,
    title: "Triangulo Para Polea Tipo V Acero Macizo",
    price: 34322,
    description: "Reforzado para mejor tracción",
    img: "https://res.cloudinary.com/dpjmphxvz/image/upload/v1709968200/imquid9pcjaalyly3gbw.webp",
    stock: 12,
    category: "accesorios",
  },
  {
    id: 2,
    title: "Set Mancuernas Hexagonales",
    price: 152185,
    stock: 5,
    description: "Engomadas de 10kg",
    category: "accesorios",
    img: "https://res.cloudinary.com/dpjmphxvz/image/upload/v1709968200/diddfsfezyfrzlrla8ah.webp",
  },
  {
    id: 3,
    title: "Maquina de Abductor",
    price: 623960,
    stock: 5,
    description: "La mejor calidad en maquinas de polea",
    category: "maquinas",
    img: "https://res.cloudinary.com/dpjmphxvz/image/upload/v1709968200/tl1brco3yqufolujjlwt.webp",
  },
  {
    id: 4,
    title: "Maquina de Gemelos",
    price: 655490,
    stock: 5,
    description: "La mejor calidad en maquinas de polea",
    category: "maquinas",
    img: "https://res.cloudinary.com/dpjmphxvz/image/upload/v1709968200/ltierlgrgqdvky3cqunv.webp",
  },
  {
    id: 5,
    title: "Soga Jalon Para Triceps Topes",
    price: 38820,
    stock: 5,
    description: "Reforzada para mejor tracción",
    category: "accesorios",
    img: "https://res.cloudinary.com/dpjmphxvz/image/upload/v1709968200/jab9ibyaaqbpk1xo4wwn.webp",
  },
  {
    id: 6,
    title: "Maquina de Biceps Sentado",
    price: 633580,
    stock: 5,
    description: "La mejor calidad en maquinas de polea",
    category: "maquinas",
    img: "https://res.cloudinary.com/dpjmphxvz/image/upload/v1709968200/lrrrtizhpozm7ivznvnn.webp",
  },
  {
    id: 7,
    title: "Máquina De Pecho Fly Deck",
    price: 824790,
    stock: 5,
    description: "La mejor calidad en maquinas de polea",
    category: "maquinas",
    img: "https://res.cloudinary.com/dpjmphxvz/image/upload/v1709968200/uhjcd6bucdwidot85n3h.webp",
  },
];

export const getProducts = () => {
  return new Promise((resolve, reject) => {
    if (products.length > 0) {
      setTimeout(() => {
        resolve(products);
      }, 500);
    } else {
      reject("No hay productos");
    }
  });
};

export const getProduct = (id) => {
  return new Promise((resolve, reject) => {
    if (products.length > 0) {
      const item = products.find((product) => product.id === id);

      setTimeout(() => {
        if (item) {
          resolve(item);
        } else {
          reject(`No se encuentra el producto con el id ${id}`);
        }
      }, 500);
    } else {
      reject("No hay productos");
    }
  });
};
