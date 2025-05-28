import React, { useContext, useEffect, useState } from "react";
import NavBar from "../components/navbar";
import { UserContext } from "../context/globalData";
import Cookies from "js-cookie";
import ActionCard from "../components/ActionCard";
import RenderCards from "../components/RenderCards";
import SummaryCard from "../components/SummaryCard";

const categories = [
  "All Categories",
  "Actions",
  "Events",
  "Jokes",
  "Questions",
  "Reminders",
  "Decisions",
  "Disagreements",
  "Todos",
  "Maps",
];

export default function Insights() {
  const [category, setCategory] = useState("All Categories");
  const { getUserData } = useContext(UserContext);

  useEffect(() => {
    console.log(getUserData);
  }, [getUserData]);

  return (
    <>
      <NavBar />

      <div className="min-h-screen bg-gray-50 px-10 py-5">
        <h2 className="text-xl font-semibold text-gray-800 mb-1">
          Organized Data Overview
        </h2>
        <p className="text-gray-600 mb-4">
          View and manage your processed data in organized categories
        </p>

        <div className="flex gap-4 overflow-x-auto border-b border-gray-200 pb-2 mb-6">
          <button className="text-blue-600 border-b-2 border-blue-600 font-semibold"></button>
          {categories.map((cat) => (
            <button
              onClick={() => setCategory(cat)}
              key={cat}
              className={`${
                category === cat &&
                "text-blue-600 border-b-2 border-blue-600 font-semibold"
              }text-gray-500 hover:text-blue-400 transition`}
            >
              {cat}
            </button>
          ))}
        </div>

        {Object.entries(getUserData).map(([date, card]) => (
          <div key={date} className="mb-10">
            <h1 className="text-lg font-semibold text-gray-800 pb-2 capitalize">
              {date}
            </h1>

            <div className="columns-1 sm:columns-2 md:columns-3 lg:columns-4 gap-6 space-y-6">
              {Object.entries(card).map(([cardType, cardData]) => {
                if (category !== "All Categories") {
                  if (cardType === category) {
                    if (cardData.length > 0) {
                      return Object.entries(cardData).map(([key, value]) => (
                      <div key={key} className="break-inside-avoid">
                        <RenderCards cardType={cardType} cardData={value} />
                      </div>
                    ));
                    }

                    return (
                        <div className="text-gray-500 text-center col-span-full w-full">
                          No data available for{" "}
                          <span className="font-semibold">{category}</span> on
                          this date.
                        </div>
                      );

                    
                  }
                } else {
                  if (cardType === "Summaries") {
                    return (
                      <div key={cardType} className="break-inside-avoid">
                        <SummaryCard cardData={cardData} />
                      </div>
                    );
                  }

                  return Object.entries(cardData).map(([key, value]) => (
                    <div key={key} className="break-inside-avoid">
                      <RenderCards cardType={cardType} cardData={value} />
                    </div>
                  ));
                }
              })}
            </div>
          </div>
        ))}
      </div>
    </>
  );
}
