const ItemListContainer = ({ greeting }) => {
  return (
    <div className="ItemListContainer text-4xl flex items-center justify-center ">
      <h1 className="p-10 lg:p-20">{greeting}</h1>
    </div>
  );
};
export default ItemListContainer;
