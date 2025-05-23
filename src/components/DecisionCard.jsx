export default function DecisionCard({ bgColor, cardData }) {
  return (
    <div className="bg-white p-5 rounded-xl shadow border border-gray-300 hover:shadow-lg transition-shadow duration-300 h-[300px] flex flex-col justify-between">
      <div>
        <span
          className="inline-block px-3 py-1 text-sm font-medium rounded-full mb-2 text-white"
          style={{ backgroundColor: bgColor }}
        >
          Decision
        </span>

        <h3 className="font-semibold text-gray-800 text-lg mb-2">
          {cardData.who}
        </h3>

        <div className="text-sm text-gray-700 mb-2">
          <p>
            <span className="font-medium">Decision:</span> {cardData.decision}
          </p>
          <p>
            <span className="font-medium">Agreed By:</span> {cardData.agreed_by}
          </p>
        </div>

        <p>
             {cardData.context}
          </p>
      </div>
    </div>
  );
}
