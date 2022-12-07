import ItemQuantySelector from "./ItemQuantySelector";

const ItemDetail = ({ dataItem }) => {


  return (
    <div className="grid gap-4 p-4 grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-2 w-full">
      <div className="flex flex-col ">
        <img
          className="rounded bg-white shadow-md border-solid"
          src={dataItem.image}
          alt={dataItem.name}
        />
      </div>
      <div className="flex flex-col gap-4">
        <h1 className="text-3xl font-bold">{dataItem.name}</h1>
        <h1 className="text-md font-bold uppercase">{dataItem.category}</h1>
        <ItemQuantySelector dataItem={dataItem}/>
        <div className="text-justify">{dataItem.description}</div>
      </div>
    </div>
  );
};

export default ItemDetail;
