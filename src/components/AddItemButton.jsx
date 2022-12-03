import { useState } from 'react'

const AddItemButton = ({ dataItem }) => {
  const [cart, setCart] = useState({});
  const { id, name, category, image, price, stock, description } = dataItem;

  const addToCart = () => {
    setCart({...cart, name, price })
    console.log(cart)
  }; 

  return (
    <div className=''>
      <button onClick={addToCart} className='px-6 py-2 font-black text-base bg-gray-200 rounded active:bg-gray-300 active:shadow-inner hover:shadow-md'>
        Agregar al carro
      </button>
    </div>
  )
}

export default AddItemButton