import { Link } from "react-router-dom";

function Navbar() {
  return (
    <nav className="sticky bg-blue-600 text-white top-0 z-50 px-6 py-4 flex justify-between">
      <h1 className="text-xl font-bold">Job Portal</h1>
      <Link to="/">Home</Link>
    </nav>
  );
}

export default Navbar;
