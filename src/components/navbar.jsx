import { DownloadCloud } from "lucide-react";
import { Link, useLocation } from "react-router-dom";
import { UserContext } from "../context/globalData";
import { useContext } from "react";

export default function NavBar() {
  const location = useLocation();
  const { getUserData } = useContext(UserContext);

  function downloadData(filename = "user_data.json") {
    
    const jsonString = JSON.stringify(getUserData, null, 2);
    const blob = new Blob([jsonString], { type: "application/json" });

    const link = document.createElement("a");
    link.href = URL.createObjectURL(blob);
    link.download = filename;

    document.body.appendChild(link);
    link.click();

    document.body.removeChild(link);
    URL.revokeObjectURL(link.href);
  }

  return (
    <div className="bg-gray-800 px-4 md:px-12 py-4 shadow-sm flex items-center justify-between">
      <h1 className="text-2xl font-bold text-white">DataOrganizer</h1>
      <div className="flex items-center space-x-3">
        <Link to="/add-data">
          <button className="bg-gradient-to-r from-blue-500 to-teal-400 text-white px-4 py-2 rounded shadow-md">
            Add Data
          </button>
        </Link>

        {location.pathname === "/" ? (
          <Link to="insights">
            <button className="px-4 py-2 border border-blue-500 text-blue-500 rounded">
              View Insights
            </button>
          </Link>
        ) : (
          <button
            onClick={downloadData}
            className="px-4 py-2 border border-blue-500 text-blue-500 rounded"
          >
            Download Data
          </button>
        )}
      </div>
    </div>
  );
}
