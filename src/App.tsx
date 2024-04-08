import React, { useState } from "react";
import cardData, { Card } from "./data/cards";

const App: React.FC = () => {
  const [cards, setCards] = useState<Card[]>(cardData);
  const [sourceData, setSourceData] = useState<Card[]>([]);
  const [loadData, setLoadData] = useState<Card[]>([]);
  const [pathData, setPathData] = useState<Card[]>([]);
  const [check, setCheck] = useState(false);

  const handleDragStart = (e: React.DragEvent<HTMLSpanElement>, card: Card) => {
    e.dataTransfer.setData("cardId", card.id.toString());
  };

  const handleDrop = (
    e: React.DragEvent<HTMLDivElement>,
    targetData: string
  ) => {
    const cardId = e.dataTransfer.getData("cardId");
    const draggedCard = cards.find((card) => card.id === parseInt(cardId));

    let targetArray: Card[] = [];
    switch (targetData) {
      case "Source":
        targetArray = sourceData;
        break;
      case "Load":
        targetArray = loadData;
        break;
      case "Path":
        targetArray = pathData;
        break;
      default:
        break;
    }

    if (targetArray.length < 3 && draggedCard) {
      switch (targetData) {
        case "Source":
          setSourceData([...sourceData, draggedCard]);
          break;
        case "Load":
          setLoadData([...loadData, draggedCard]);
          break;
        case "Path":
          setPathData([...pathData, draggedCard]);
          break;
        default:
          break;
      }

      const updatedCards = cards.filter((card) => card.id !== parseInt(cardId));
      setCards(updatedCards);
    }
  };

  const handleCheck = () => {
    setCheck(true);
  };

  const handleReset = () => {
    setSourceData([]);
    setLoadData([]);
    setPathData([]);
    setCards(cardData)
    setCheck(false);
  };

  return (
    <>
      <div className="flex gap-5 m-5 h-[685px] justify-between">
        {/* Left Zone */}
        <div className="flex-1 flex flex-col gap-5 p-5">
          {/* sourceData */}
          <div
            className="flex-1 shadow-md flex gap-5 justify-between p-5"
            onDragOver={(e) => e.preventDefault()}
            onDrop={(e) => handleDrop(e, "Source")}
          >
            <span className="flex-1 min-w-[156px] h-[165px] flex justify-center items-center">
              <button className="text-white bg-indigo-500 w-[108px] py-1 rounded-md">
                Source
              </button>
            </span>
            {[...Array(3)].map((_, index) => (
              <span
                key={index}
                className={`flex-1 flex flex-col justify-center items-center gap-5 shadow-md min-w-[156px] h-[165px] rounded-md ${
                  check &&
                  (sourceData[index]?.zone === "Source"
                    ? "border border-green-200 shadow-lg shadow-green-400"
                    : "border border-red-200 shadow-lg shadow-red-400")
                }`}
              >
                <img
                  src={sourceData[index]?.image}
                  alt={sourceData[index]?.content}
                  className="h-[50%]"
                />
                {sourceData[index]?.content}
              </span>
            ))}
          </div>
          {/* loadData */}
          <div
            className="flex-1 shadow-md flex gap-5 justify-between p-5"
            onDragOver={(e) => e.preventDefault()}
            onDrop={(e) => handleDrop(e, "Load")}
          >
            <span className="flex-1 min-w-[156px] h-[165px] flex justify-center items-center">
              <button className="text-white bg-indigo-500 w-[108px] py-1 rounded-md">
                Load
              </button>
            </span>
            {[...Array(3)].map((_, index) => (
              <span
                key={index}
                className={`flex-1 flex flex-col justify-center items-center gap-5 shadow-md min-w-[156px] h-[165px] rounded-md ${
                  check &&
                  (loadData[index]?.zone === "Load"
                    ? "border border-green-200 shadow-lg shadow-green-400"
                    : "border border-red-200 shadow-lg shadow-red-400")
                }`}
              >
                <img
                  src={loadData[index]?.image}
                  alt={loadData[index]?.content}
                  className="h-[50%]"
                />
                {loadData[index]?.content}
              </span>
            ))}
          </div>
          {/* pathData */}
          <div
            className="flex-1 shadow-md flex gap-5 justify-between p-5"
            onDragOver={(e) => e.preventDefault()}
            onDrop={(e) => handleDrop(e, "Path")}
          >
            <span className="flex-1 min-w-[156px] h-[165px] flex justify-center items-center">
              <button className="text-white bg-indigo-500 w-[108px] py-1 rounded-md">
                Path
              </button>
            </span>
            {[...Array(3)].map((_, index) => (
              <span
                key={index}
                className={`flex-1 flex flex-col justify-center items-center gap-2 shadow-md min-w-[156px] h-[165px] rounded-md ${
                  check &&
                  (pathData[index]?.zone === "Path"
                    ? "border border-green-200 shadow-lg shadow-green-400"
                    : "border border-red-200 shadow-lg shadow-red-400")
                }`}
              >
                <img
                  src={pathData[index]?.image}
                  alt={pathData[index]?.content}
                  className="h-[50%]"
                />
                {pathData[index]?.content}
              </span>
            ))}
          </div>
        </div>
        {/* Right Zone */}
        <div className="flex-1 border grid grid-cols-3 gap-5 p-5 transition-all duration-200">
          {cards.map((card) => (
            <span
              key={card.id}
              className="flex-1 shadow-md min-w-[156px] h-[188px] flex flex-col justify-center items-center gap-2 bg-white"
              draggable
              onDragStart={(e) => handleDragStart(e, card)}
            >
              <img src={card.image} alt={card.content} className="h-[50%]" />
              <p>{card.content}</p>
            </span>
          ))}
        </div>
      </div>
      <div>
        <button onClick={handleCheck} className="btn">
          Check
        </button>
        <button onClick={handleReset} className="btn">
          Reset
        </button>
      </div>
    </>
  );
};

export default App;
