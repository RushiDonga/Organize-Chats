import { ClipLoader } from "react-spinners";

export default function LoadingScreen() {
  return (
    <div className="fixed inset-0 z-50 bg-white/60 backdrop-blur-sm flex items-center justify-center">
      <div className="bg-white rounded-2xl shadow-xl p-10 w-full max-w-sm text-center">
        <ClipLoader color="#2563eb" size={50} />
        <h2 className="text-lg font-semibold text-gray-800 mt-6">Loading...</h2>
        <p className="text-sm text-gray-500 mt-2">Please wait while we process your data.</p>
      </div>
    </div>
  );
}
