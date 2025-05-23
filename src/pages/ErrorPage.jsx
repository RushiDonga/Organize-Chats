import React from "react";
import { Link } from "react-router-dom";

export default function ErrorPage() {
  return (
    <div className="relative min-h-screen flex items-center justify-center bg-gray-50 px-4">
      <div className="bg-white rounded-2xl drop-shadow-lg p-8 w-full max-w-md text-center z-0">
        <h2 className="text-3xl font-bold text-red-600 mb-4">🚫 Oops!</h2>
        <p className="text-gray-700 mb-6">
          Something went wrong. The page you're looking for doesn't exist or an unexpected error occurred.
        </p>

        <Link to="/">
          <button className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition">
            🔙 Go Home
          </button>
        </Link>

        <div className="relative my-6">
          <div className="absolute inset-0 flex items-center">
            <div className="w-full border-t border-gray-300"></div>
          </div>
          <div className="relative bg-white px-4 text-gray-400 text-sm">OR</div>
        </div>

        <Link to="/insights">
          <button className="w-full bg-gray-100 border border-gray-300 py-2 rounded-lg text-gray-700 hover:bg-gray-200 transition mb-6">
            View Insights
          </button>
        </Link>

        <p className="text-xs text-gray-400">
          ❓ Still having trouble?{" "}
          <a href="#" className="text-blue-500 underline">
            Contact Support
          </a>
        </p>
      </div>
    </div>
  );
}
