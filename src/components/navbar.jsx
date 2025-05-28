import { Link } from "react-router-dom";

export default function NavBar() {
  return (
    <nav className="sticky top-0 z-50 flex items-center justify-between bg-gray-800 text-white shadow px-10 py-4">
      <h1 className="text-lg font-semibold">Data Organizer</h1>
      <div className="flex gap-2">
        <Link to='/add-data'>
          <button className="bg-gray-700 px-3 py-1 text-sm rounded-md hover:bg-gray-600 transition">
          Add Data
        </button>
        </Link>
        <button className="bg-blue-600 px-3 py-1 text-sm rounded-md hover:bg-blue-500 transition">
          Refresh Data
        </button>
      </div>
    </nav>
  );
}
