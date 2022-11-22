const NavbarButton = ({ items }) => {
  return (
    <button className="p-2 border-solid hover:border-black rounded border hover:shadow-md">
      {items}
    </button>
  );
};

export default NavbarButton;
