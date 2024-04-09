import React, { useState } from "react";
import cardData, { Card } from "./data/cards";
import RightZone from "./components/RightZone";
import LeftZone from "./components/LeftZone";
import Buttons from "./components/Buttons";

const App: React.FC = () => {
  // State for the list of cards
  const [cards, setCards] = useState<Card[]>(cardData);
  // State for cards in source zone
  const [sourceData, setSourceData] = useState<Card[]>([]);
  // State for cards in load zone
  const [loadData, setLoadData] = useState<Card[]>([]);
  // State for cards in path zone
  const [pathData, setPathData] = useState<Card[]>([]);
  // State for checking if validation is performed
  const [check, setCheck] = useState(false);

  // Function to handle drag start event
  const handleDragStart = (e: React.DragEvent<HTMLSpanElement>, card: Card) => {
    // Set the card ID as data transfer
    e.dataTransfer.setData("cardId", card.id.toString());
  };

  // Function to handle drop event
  const handleDrop = (
    e: React.DragEvent<HTMLDivElement>,
    targetData: string
  ) => {
    // Get the card ID from data transfer
    const cardId = e.dataTransfer.getData("cardId");
    // Find the dragged card
    const draggedCard = cards.find((card) => card.id === parseInt(cardId));

    // Define the target array based on the drop zone
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

    // Check if there is space in the target zone and the dragged card exists
    if (targetArray.length < 3 && draggedCard) {
      switch (targetData) {
        case "Source":
          // Update sourceData state
          setSourceData([...sourceData, draggedCard]);
          break;
        case "Load":
          // Update loadData state
          setLoadData([...loadData, draggedCard]);
          break;
        case "Path":
          // Update pathData state
          setPathData([...pathData, draggedCard]);
          break;
        default:
          break;
      }

      // Remove the dragged card from cards state
      const updatedCards = cards.filter((card) => card.id !== parseInt(cardId));
      setCards(updatedCards);
    }
  };

  // Function to handle check button click
  const handleCheck = () => {
    // Set check state to true to trigger validation
    setCheck(true);
  };

  // Function to handle reset button click
  const handleReset = () => {
    // Reset all states to initial values
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
