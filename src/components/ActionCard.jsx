export default function ActionCard({ bgColor, cardData }) {
  return (
    <div className="bg-white p-5 rounded-xl shadow border border-gray-300 hover:shadow-lg transition-shadow duration-300 h-[300px] flex flex-col justify-between">
      <div>
        <span
          className="inline-block px-3 py-1 text-sm font-medium rounded-full mb-2 text-white"
          style={{ backgroundColor: bgColor }}
        >
          Actions
        </span>

        <h3 className="font-semibold text-gray-800 text-lg mb-2">
          {cardData.who}
        </h3>

        <div className="text-sm text-gray-700 mb-2">
          <p>
            <span className="font-medium">What:</span> {cardData.what} to be performed
          </p>
        </div>

        <p className="text-sm text-gray-600">{cardData.context}</p>
      </div>

      {/* Footer - sticks to bottom */}
      <div className="mt-4">
        <div className="text-sm text-blue-600 cursor-pointer mb-1">Complete Task</div>
        <p className="text-xs text-gray-400">Due by {cardData.due_when}</p>
      </div>
    </div>
  );
}
