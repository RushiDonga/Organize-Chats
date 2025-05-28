import { RocketIcon, UploadIcon, SparklesIcon } from "lucide-react";
import { Link } from "react-router-dom";

export default function Hero() {
  return (
    <div className="min-h-screen font-sans bg-white text-gray-900">
      {/* Header */}
      <div className="bg-gray-800 px-4 md:px-12 py-4 shadow-sm flex items-center justify-between">
        <h1 className="text-2xl font-bold text-white">DataOrganizer</h1>
        <div className="flex items-center space-x-3">
          <Link to='/add-data'>
            <button className="bg-gradient-to-r from-blue-500 to-teal-400 text-white px-4 py-2 rounded shadow-md">
            Add Data
          </button>
          </Link>
          <Link to='insights'>
            <button className="px-4 py-2 border border-blue-500 text-blue-500 rounded">
            View Insights
          </button>
          </Link>
        </div>
      </div>

      {/* Main content with background shade */}
      <div className="bg-gray-50 px-4 md:px-12 py-8">
        {/* Announcement */}
        <div className="flex justify-center">
          <div className="bg-purple-100 text-purple-900 px-4 py-2 rounded-xl flex items-center space-x-2 w-fit shadow-sm">
            <RocketIcon className="w-4 h-4" />
            <p className="text-sm font-medium">
              Big Update! 🚀 Added Maps and Todos, and now users can download their data anytime!
            </p>
          </div>
        </div>

        {/* Hero Section */}
        <div className="text-center mt-12">
          <h2 className="text-3xl md:text-4xl font-bold text-blue-600 mb-4">
            Organize your WhatsApp Chats Effortlessly
          </h2>
          <p className="text-lg max-w-2xl mx-auto mb-6">
            Upload your WhatsApp chat zip file — let our AI sort your
            conversations into smart categories, so you never lose track again.
            Experience automated organization, insightful analytics, and a smarter
            way to revisit your chats!
          </p>
          <div className="flex justify-center space-x-4">
            <Link to='/add-data'>
              <button className="bg-gradient-to-r from-blue-500 to-teal-400 text-white px-6 py-2 text-lg shadow-md rounded">
              Add Data
            </button>
            </Link>
            <Link to='/insights'>
              <button className="text-lg px-6 py-2 border border-blue-500 text-blue-500 rounded">
              View Insights
            </button>
            </Link>
          </div>
        </div>

        {/* Steps Section */}
        <div className="mt-16 grid grid-cols-1 md:grid-cols-2 gap-8 text-center">
          <div className="flex flex-col items-center">
            <UploadIcon className="w-12 h-12 text-blue-500 mb-2" />
            <h3 className="text-lg font-semibold mb-1">1. Upload Chat Zip</h3>
            <p className="text-gray-600 max-w-sm">
              Add a zip file with your WhatsApp chats.
            </p>
          </div>
          <div className="flex flex-col items-center">
            <SparklesIcon className="w-12 h-12 text-blue-500 mb-2" />
            <h3 className="text-lg font-semibold mb-1">2. Magic Happens</h3>
            <p className="text-gray-600 max-w-sm">
              Our AI organizes your chats into categories. Your chats, organized &
              easy to explore!
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
