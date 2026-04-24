import { Button } from "@/components/ui/button";
import { PaginationMenu } from "@/components/Pagination";
import { FoodCard } from "./components/foodCard";
import { Deck } from "./components/Deck";
import { useState } from "react";
import { cards } from "./data/cards";

function App() {
  const maxItens = 6;
  const endPage = Math.ceil(cards.length / maxItens);
  const [currentPage, setCurrentPage] = useState(1);

  const end = currentPage * maxItens;
  const start = end - maxItens;
  const slicedCards = cards.slice(start, end);

  function previousPage() {
    if (currentPage > 1) {
      setCurrentPage((cp) => cp + -1);
    }
  }

  function nextPage() {
    if (currentPage < endPage) {
      setCurrentPage((cp) => cp + 1);
    }
  }

  function selectPage(page) {
    setCurrentPage(page);
  }

  return (
    <div className="flex min-h-svh flex-col items-center justify-center gap-5 p-5">
      <Deck cards={slicedCards} />
      <PaginationMenu
        onPreviousPage={previousPage}
        onNextPage={nextPage}
        onSelectPage={selectPage}
        currentPage={currentPage}
      />
    </div>
  );
}

export default App;
