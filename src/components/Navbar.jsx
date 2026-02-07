import { Link } from "react-router-dom";

function Navbar() {
  return (
    <nav className="fixed top-0 left-0 w-full bg-blue-600 text-white z-50 px-6 py-4 flex justify-between items-center shadow-lg">
      <h1 className="text-xl font-bold">Job Portal</h1>
      <Link to="/" className="hover:underline">Home</Link>
    </nav>
  );
}

export default Navbar;