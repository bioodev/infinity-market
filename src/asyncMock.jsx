const products = [
  {
    id: '1',
    name: 'Criptopunks, la libertad y el futuro de internet',
    category: 'libros',
    image:"/assets/libro2.jpg",
    price: 15,
    stock: 33,
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.'
  }, 
  {
    id: '2',
    name: 'Criptomonedas para dummies',
    image:"/assets/libro1.jpg",
    category: 'libros',
    price: 18,
    stock: 15,
    description: 'Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem. Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur? Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur, vel illum qui dolorem eum fugiat quo voluptas nulla pariatur?'
  },
  {
    id: '3',
    name: 'Nodo bitcoin Machine',
    image:"/assets/nodo1.jpg",
    category: 'nodos',
    price: 300,
    stock: 5,
    description: 'But I must explain to you how all this mistaken idea of denouncing pleasure and praising pain was born and I will give you a complete account of the system, and expound the actual teachings of the great explorer of the truth, the master-builder of human happiness. No one rejects, dislikes, or avoids pleasure itself, because it is pleasure, but because those who do not know how to pursue pleasure rationally encounter consequences that are extremely painful. Nor again is there anyone who loves or pursues or desires to obtain pain of itself, because it is pain, but because occasionally circumstances occur in which toil and pain can procure him some great pleasure. To take a trivial example, which of us ever undertakes laborious physical exercise, except to obtain some advantage from it? But who has any right to find fault with a man who chooses to enjoy a pleasure that has no annoying consequences, or one who avoids a pain that produces no resultant pleasure?'
  },
  {
    id: '4',
    name: 'Cluster nodos Bitcoin',
    image:"/assets/nodo3.jpg",
    category: 'nodos',
    price: 500,
    stock: 6,
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.'
  }, 
  {
    id: '5',
    name: 'Ledger Nano S',
    image:"/assets/wallet1.jpg",
    category: 'wallets',
    price: 70,
    stock: 22,
    description: 'Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem. Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur? Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur, vel illum qui dolorem eum fugiat quo voluptas nulla pariatur?'
  },
  {
    id: '6',
    name: 'Coldcard',
    image:"/assets/wallet2.jpg",
    category: 'wallets',
    price: 60,
    stock: 12,
    description: 'But I must explain to you how all this mistaken idea of denouncing pleasure and praising pain was born and I will give you a complete account of the system, and expound the actual teachings of the great explorer of the truth, the master-builder of human happiness. No one rejects, dislikes, or avoids pleasure itself, because it is pleasure, but because those who do not know how to pursue pleasure rationally encounter consequences that are extremely painful. Nor again is there anyone who loves or pursues or desires to obtain pain of itself, because it is pain, but because occasionally circumstances occur in which toil and pain can procure him some great pleasure. To take a trivial example, which of us ever undertakes laborious physical exercise, except to obtain some advantage from it? But who has any right to find fault with a man who chooses to enjoy a pleasure that has no annoying consequences, or one who avoids a pain that produces no resultant pleasure?'
  },
  {
    id: '7',
    name: 'Trezor',
    image:"/assets/wallet3.jpg",
    category: 'wallets',
    price: 80,
    stock: 8,
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.'
  }, 
  {
    id: '8',
    name: 'Samourai wallet',
    image:"/assets/wallet4.jpg",
    category: 'wallets',
    price: 100,
    stock: 0,
    description: 'Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem. Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur? Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur, vel illum qui dolorem eum fugiat quo voluptas nulla pariatur?'
  },
  {
    id: '9',
    name: 'Nodo Umbrel',
    image:"/assets/nodo4.jpg",
    category: 'nodos',
    price: 400,
    stock: 3,
    description: 'But I must explain to you how all this mistaken idea of denouncing pleasure and praising pain was born and I will give you a complete account of the system, and expound the actual teachings of the great explorer of the truth, the master-builder of human happiness. No one rejects, dislikes, or avoids pleasure itself, because it is pleasure, but because those who do not know how to pursue pleasure rationally encounter consequences that are extremely painful. Nor again is there anyone who loves or pursues or desires to obtain pain of itself, because it is pain, but because occasionally circumstances occur in which toil and pain can procure him some great pleasure. To take a trivial example, which of us ever undertakes laborious physical exercise, except to obtain some advantage from it? But who has any right to find fault with a man who chooses to enjoy a pleasure that has no annoying consequences, or one who avoids a pain that produces no resultant pleasure?'
  },
]

export const getProducts = () => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(products)
    }, 500)
  })
}

export const getProductsByCategory = (categoryId) => {
return new Promise((resolve) => {
  setTimeout(() => {
    resolve(products.filter(product => product.category === categoryId))
  }, 500)
})
}

export const getProductsById = (productId) => {
return new Promise((resolve) => {
  setTimeout(() => {
    resolve(products.find(product => product.id === productId))
  }, 500)
})
}


/* 
LO QUE TENIA AHORA VOY A PROBAR CON EL OTRO CODIGO
const items = [
  {
    id: "1",
    names: "Producto 1",
    category: "categoria1",
    stock: "10",
    price: "36",
    description:
      "Lorem dolor sit consectetur elit. Doloribus, aspernatur ex expedita, in sunt sequi doloremque unde amet incidunt dolor animi ipsam perspiciatis natus nihil nam rem obcaecati ducimus qui. ",
  },
  {
    id: "2",
    names: "Producto 2",
    category: "categoria1",
    stock: "10",
    price: "36",
    description:
      "Lorem ipsum sit amet, consectetur adipisicing elit. Doloribus, aspernatur ex expedita, in sunt sequi doloremque unde amet incidunt dolor animi ipsam perspiciatis natus nihil nam rem obcaecati ducimus qui. ",
  },
  {
    id: "3",
    names: "Producto 3",
    category: "categoria2",
    stock: "10",
    price: "36",
    description:
      "Lorem dolor sit amet, consectetur adipisicing elit. Doloribus, aspernatur ex expedita, in sunt sequi doloremque unde amet incidunt dolor animi ipsam perspiciatis natus nihil nam rem obcaecati ducimus qui. ",
  },
  {
    id: "4",
    names: "Producto 4",
    category: "categoria2",
    stock: "10",
    price: "36",
    description:
      "Ipsum dolor sit amet, adipisicing elit. Doloribus, aspernatur ex expedita, in sunt sequi doloremque unde amet incidunt dolor animi ipsam perspiciatis natus nihil nam rem obcaecati ducimus qui. ",
  },
  {
    id: "5",
    names: "Producto 5",
    category: "categoria2",
    stock: "10",
    price: "36",
    description:
      "Lorem  dolor sit consectetur adipisicing elit. Doloribus, aspernatur ex expedita, in sunt sequi doloremque unde amet incidunt dolor animi ipsam perspiciatis natus nihil nam rem obcaecati ducimus qui. ",
  },
  {
    id: "6",
    names: "Producto 6",
    category: "categoria3",
    stock: "10",
    price: "36",
    description:
      "Ipsum dolor sit amet, consectetur adipisicing elit. Doloribus, aspernatur ex expedita, in sunt sequi doloremque unde amet incidunt dolor animi ipsam perspiciatis natus nihil nam rem obcaecati ducimus qui. ",
  },
  {
    id: "7",
    names: "Producto 7",
    category: "categoria3",
    stock: "10",
    price: "36",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Doloribus, aspernatur ex expedita, in sunt sequi doloremque unde amet incidunt dolor animi ipsam perspiciatis natus nihil nam rem obcaecati ducimus qui. ",
  },
  {
    id: "8",
    names: "Producto 8",
    category: "categoria1",
    stock: "10",
    price: "36",
    description:
      "Lorem dolor sit amet, consectetur adipisicing elit. Doloribus, aspernatur ex expedita, in sunt sequi doloremque unde amet incidunt dolor animi ipsam perspiciatis natus nihil nam rem obcaecati ducimus qui. ",
  },
  {
    id: "9",
    names: "Producto 9",
    category: "categoria2",
    stock: "10",
    price: "36",
    description:
      "Lorem ipsum dolor amet, adipisicing elit. Doloribus, aspernatur ex expedita, in sunt sequi doloremque unde amet incidunt dolor animi ipsam perspiciatis natus nihil nam rem obcaecati ducimus qui. ",
  },
  {
    id: "10",
    names: "Producto 10",
    category: "categoria3",
    stock: "10",
    price: "36",
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
  console.log(categoryId)
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(items.filter(items.category === categoryId))
      console.log(items.category)
    }, 1500);
  });
}; */

/* 
OTRA PARTE QUE FALTA
export const getItemsById = (id) => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve((items) => items.id === id);
    }, 1500);
  });
}; */


