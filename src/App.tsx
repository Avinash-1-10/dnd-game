import React, { useState } from "react";
import cardData, { Card } from "./data/cards";
import RightZone from "./components/RightZone";
import LeftZone from "./components/LeftZone";
import Buttons from "./components/Buttons";

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
    setCards(cardData);
    setCheck(false);
  };

  return (
    <>
      <div className="flex gap-5 m-5 h-[685px] justify-between">
        {/* Left Zone */}
        <LeftZone
          handleDrop={handleDrop}
          sourceData={sourceData}
          loadData={loadData}
          pathData={pathData}
          check={check}
        />
        {/* Right Zone */}
        <RightZone cards={cards} handleDragStart={handleDragStart} />
      </div>
      {/* Buttons */}
      <Buttons handleCheck={handleCheck} handleReset={handleReset} />
    </>
  );
};

export default App;
