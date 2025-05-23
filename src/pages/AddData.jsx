import React, { useContext, useState } from "react";
import { UserContext } from "../context/globalData";
import LoadingScreen from "./Loading";
import handleApiCalls from "../utils/handleApiCalls";
import { Link, useNavigate } from "react-router-dom";

export default function AddData() {
  const [dragActive, setDragActive] = useState(false);
  const { isLoading, setIsLoading, updateUserData } = useContext(UserContext);

  const navigate = useNavigate();

  function resReceived(res) {
    if (!res) {
      console.log("An Error Exists");
    }else{

      updateUserData(res);
      setIsLoading(false);
      navigate("/insights");
    }
  }

  function getFile() {
    const input = document.createElement("input");
    input.type = "file";
    input.accept = ".csv,.xlsx,.json,.zip";
    input.onchange = async (event) => {
      const file = event.target.files[0];
      if (file) {
        setIsLoading(true);
        const res = await handleApiCalls(file);
        resReceived(res);
      }
    };
    input.click();
  }

  function handleDragOver(e) {
    e.preventDefault();
    setDragActive(true);
  }

  function handleDragLeave() {
    setDragActive(false);
  }

  async function handleDrop(e) {
    e.preventDefault();
    setDragActive(false);

    const file = e.dataTransfer.files[0];
    if (file && file.name.toLowerCase().endsWith(".zip")) {
      setIsLoading(true);
      const res = await handleApiCalls(file);
      if (res) {
        setIsLoading(false);
        resReceived(res);
      }
    } else {
      alert("Only .zip files are allowed.");
    }
  }

  return (
    <div className="relative min-h-screen flex items-center justify-center bg-gray-50 px-4">
      {isLoading && (
        <div className="absolute inset-0 z-50 bg-white/80 flex items-center justify-center">
          <LoadingScreen />
        </div>
      )}

      <div className="bg-white rounded-2xl drop-shadow-lg p-8 w-full max-w-md text-center z-0">
        <h2 className="text-xl font-semibold text-gray-800 mb-6">
          📤 Upload Your Data
        </h2>

        <div
          className={`border-2 border-dashed rounded-xl p-6 mb-4 transition ${
            dragActive ? "border-blue-500 bg-blue-50" : "border-blue-300"
          }`}
          onDragOver={handleDragOver}
          onDragLeave={handleDragLeave}
          onDrop={handleDrop}
        >
          <p className="text-gray-500 mb-2">Drag & Drop files here</p>

          <button
            onClick={getFile}
            className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition"
          >
            Browse Files
          </button>

          <p className="text-xs text-gray-400 mt-2">
            Accepted format: .csv, .xlsx, .json, .zip (max 10MB)
          </p>
        </div>

        <div className="relative my-6">
          <div className="absolute inset-0 flex items-center">
            <div className="w-full border-t border-gray-300"></div>
          </div>
          <div className="relative bg-white px-4 text-gray-400 text-sm">OR</div>
        </div>

        <Link to='/insights'>
          <button className="w-full bg-gray-100 border border-gray-300 py-2 rounded-lg text-gray-700 hover:bg-gray-200 transition mb-6">
          View Insights
        </button>
        </Link>

        <p className="text-xs text-gray-400">
          🔒 All uploads are secure and private. Need help?{" "}
          <a href="#" className="text-blue-500 underline">
            Learn more
          </a>
        </p>
      </div>
    </div>
  );
}
