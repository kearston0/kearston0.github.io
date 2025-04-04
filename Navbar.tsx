import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="bg-gray-800 text-white p-4 flex justify-between">
      <Link to="/" className="text-xl font-bold">The Fridge Door</Link>
      <Link to="/login" className="text-sm">Login</Link>
    </nav>
  );
};

export default Navbar;
