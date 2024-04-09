import React from "react";
import { Card } from "../data/cards";

interface Props {
  cards: Card[]; // Array of cards to display
  handleDragStart: (e: React.DragEvent<HTMLSpanElement>, card: Card) => void; // Function to handle drag start event
}

const RightZone: React.FC<Props> = ({ cards, handleDragStart }) => {
  return (
    <div className="flex-1 border grid grid-cols-3 gap-5 p-5 transition-all duration-200">
      {/* Map over each card in the array */}
      {cards.map((card) => (
        <span
          key={card.id}
          className="flex-1 shadow-md min-w-[156px] h-[188px] flex flex-col justify-center items-center gap-2 bg-white cursor-pointer" // Styling for the card container
          draggable // Allow the card to be draggable
          onDragStart={(e) => handleDragStart(e, card)} // Call handleDragStart function with the card data on drag start event
        >
          <img src={card.image} alt={card.content} className="h-[50%]" /> {/* Display card image */}
          <p className="text-indigo-600">{card.content}</p> {/* Display card content */}
        </span>
      ))}
    </div>
  );
};

export default RightZone;
