export default function SummaryCard({ cardData }) {
  return (
    <div className="bg-white p-5 rounded-xl shadow border border-gray-300 hover:shadow-lg transition-shadow duration-300">
      <span className="inline-block px-3 py-1 text-sm font-medium rounded-full mb-2 text-white bg-blue-600">
        Summary
      </span>
      <p className="text-sm text-gray-700">{cardData}</p>
    </div>
  );
}
