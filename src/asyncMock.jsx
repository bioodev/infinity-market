const items = [
  {
    id: "1",
    names: "Producto 1",
    category: "categoria1",
    description:
      "Lorem dolor sit consectetur elit. Doloribus, aspernatur ex expedita, in sunt sequi doloremque unde amet incidunt dolor animi ipsam perspiciatis natus nihil nam rem obcaecati ducimus qui. ",
  },
  {
    id: "2",
    names: "Producto 2",
    category: "categoria1",
    description:
      "Lorem ipsum sit amet, consectetur adipisicing elit. Doloribus, aspernatur ex expedita, in sunt sequi doloremque unde amet incidunt dolor animi ipsam perspiciatis natus nihil nam rem obcaecati ducimus qui. ",
  },
  {
    id: "3",
    names: "Producto 3",
    category: "categoria2",
    description:
      "Lorem dolor sit amet, consectetur adipisicing elit. Doloribus, aspernatur ex expedita, in sunt sequi doloremque unde amet incidunt dolor animi ipsam perspiciatis natus nihil nam rem obcaecati ducimus qui. ",
  },
  {
    id: "4",
    names: "Producto 4",
    category: "categoria2",
    description:
      "Ipsum dolor sit amet, adipisicing elit. Doloribus, aspernatur ex expedita, in sunt sequi doloremque unde amet incidunt dolor animi ipsam perspiciatis natus nihil nam rem obcaecati ducimus qui. ",
  },
  {
    id: "5",
    names: "Producto 5",
    category: "categoria2",
    description:
      "Lorem  dolor sit consectetur adipisicing elit. Doloribus, aspernatur ex expedita, in sunt sequi doloremque unde amet incidunt dolor animi ipsam perspiciatis natus nihil nam rem obcaecati ducimus qui. ",
  },
  {
    id: "6",
    names: "Producto 6",
    category: "categoria3",
    description:
      "Ipsum dolor sit amet, consectetur adipisicing elit. Doloribus, aspernatur ex expedita, in sunt sequi doloremque unde amet incidunt dolor animi ipsam perspiciatis natus nihil nam rem obcaecati ducimus qui. ",
  },
  {
    id: "7",
    names: "Producto 7",
    category: "categoria3",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Doloribus, aspernatur ex expedita, in sunt sequi doloremque unde amet incidunt dolor animi ipsam perspiciatis natus nihil nam rem obcaecati ducimus qui. ",
  },
  {
    id: "8",
    names: "Producto 8",
    category: "categoria1",
    description:
      "Lorem dolor sit amet, consectetur adipisicing elit. Doloribus, aspernatur ex expedita, in sunt sequi doloremque unde amet incidunt dolor animi ipsam perspiciatis natus nihil nam rem obcaecati ducimus qui. ",
  },
  {
    id: "9",
    names: "Producto 9",
    category: "categoria2",
    description:
      "Lorem ipsum dolor amet, adipisicing elit. Doloribus, aspernatur ex expedita, in sunt sequi doloremque unde amet incidunt dolor animi ipsam perspiciatis natus nihil nam rem obcaecati ducimus qui. ",
  },
  {
    id: "10",
    names: "Producto 10",
    category: "categoria3",
    description:
      "Dolor sit amet, consectetur adipisicing elit. Doloribus, aspernatur ex expedita, in sunt sequi doloremque unde amet incidunt dolor animi ipsam perspiciatis natus nihil nam rem obcaecati ducimus qui. ",
  },
];
export const getItems = () => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(items);
    }, 1500);
  });
};

export const getItemsByCategory = (categoryId) => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve((items) => items.category === categoryId);
    }, 1500);
  });
};

export const getItemsById = (id) => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve((items) => items.id === id);
    }, 1500);
  });
};
