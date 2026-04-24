import { FoodCard } from "./FoodCard";

export function Deck({ cards }) {
  return (
    <div className="max-w-4xl grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
      {cards.map((card) => (
        <FoodCard cardObj={card} key={card.title} />
      ))}
    </div>
  );
}
