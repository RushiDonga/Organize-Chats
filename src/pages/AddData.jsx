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
    } else {
      updateUserData(res);
      setIsLoading(false);
      navigate("/insights");
    }
  }

  function getFile() {
    const input = document.createElement("input");
    input.type = "file";
    input.accept = ".zip";
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
      resReceived(res);
    } else {
      alert("Only .zip files are allowed.");
    }
  }

  return (
    <div className="relative min-h-screen bg-gray-50 flex items-center justify-center px-4">
      {isLoading && (
        <div className="absolute inset-0 z-50 bg-white/80 flex items-center justify-center">
          <LoadingScreen />
        </div>
      )}

      <div className="bg-white rounded-2xl shadow-xl p-8 w-full max-w-md text-center relative z-10">
        <h2 className="text-2xl font-semibold text-blue-600 mb-6">
          📤 Upload Your Exported WhatsApp Chat
        </h2>

        {/* Drag & Drop Section */}
        <div
          className={`border-2 border-dashed rounded-xl p-6 mb-6 transition-all duration-200 ${
            dragActive
              ? "border-blue-500 bg-blue-50"
              : "border-blue-300 bg-white"
          }`}
          onDragOver={handleDragOver}
          onDragLeave={handleDragLeave}
          onDrop={handleDrop}
        >
          <p className="text-gray-500 mb-3">Drag & drop your .zip file here</p>
          <button
            onClick={getFile}
            className="bg-gradient-to-r from-blue-500 to-teal-400 text-white px-5 py-2 rounded-lg font-medium shadow hover:brightness-110 transition"
          >
            Browse Files
          </button>
          <p className="text-xs text-gray-400 mt-2">
            Accepted format: .zip (max 10MB)
          </p>
        </div>

        {/* Divider */}
        <div className="relative my-6">
          <div className="absolute inset-0 flex items-center">
            <div className="w-full border-t border-gray-300" />
          </div>
          <div className="relative bg-white px-4 text-sm text-gray-400">
            OR
          </div>
        </div>

        {/* View Insights Button */}
        <Link to="/insights">
          <button className="w-full border border-blue-500 text-blue-600 py-2 rounded-lg font-medium hover:bg-blue-50 transition mb-6">
            View Insights
          </button>
        </Link>

        <p className="text-xs text-gray-400">
          🔒 Your data is secure and processed locally.{" "}
          <a href="#" className="text-blue-500 underline">
            Learn more
          </a>
        </p>
      </div>
    </div>
  );
}
