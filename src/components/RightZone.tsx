import React from "react";
import { Card } from "../data/cards";

interface Props {
  cards: Card[];
  handleDragStart: (e: React.DragEvent<HTMLSpanElement>, card: Card) => void;
}

const RightZone: React.FC<Props> = ({ cards, handleDragStart }) => {
  return (
    <div className="flex-1 border grid grid-cols-3 gap-5 p-5 transition-all duration-200">
      {cards.map((card) => (
        <span
          key={card.id}
          className="flex-1 shadow-md min-w-[156px] h-[188px] flex flex-col justify-center items-center gap-2 bg-white cursor-pointer"
          draggable
          onDragStart={(e) => handleDragStart(e, card)}
        >
          <img src={card.image} alt={card.content} className="h-[50%]" />
          <p className="text-indigo-600">{card.content}</p>
        </span>
      ))}
    </div>
  );
};

export default RightZone;
