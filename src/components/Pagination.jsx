import {
  Pagination,
  PaginationContent,
  PaginationEllipsis,
  PaginationItem,
  PaginationLink,
  PaginationNext,
  PaginationPrevious,
} from "@/components/ui/pagination";

export function PaginationMenu({
  onPreviousPage,
  onNextPage,
  onSelectPage,
  currentPage,
}) {
  return (
    <Pagination>
      <PaginationContent>
        <PaginationItem className="cursor-pointer">
          <PaginationPrevious onClick={onPreviousPage} />
        </PaginationItem>
        <PaginationItem className="cursor-pointer">
          <PaginationLink
            isActive={currentPage == 1}
            onClick={() => onSelectPage(1)}
          >
            1
          </PaginationLink>
        </PaginationItem>
        <PaginationItem className="cursor-pointer">
          <PaginationLink
            isActive={currentPage == 2}
            onClick={() => onSelectPage(2)}
          >
            2
          </PaginationLink>
        </PaginationItem>
        <PaginationItem className="cursor-pointer">
          <PaginationLink
            isActive={currentPage == 3}
            onClick={() => onSelectPage(3)}
          >
            3
          </PaginationLink>
        </PaginationItem>
        <PaginationItem>
          <PaginationEllipsis />
        </PaginationItem>
        <PaginationItem className="cursor-pointer">
          <PaginationNext onClick={onNextPage} />
        </PaginationItem>
      </PaginationContent>
    </Pagination>
  );
}
