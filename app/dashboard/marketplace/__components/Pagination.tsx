import {
  PaginationContent,
  PaginationItem,
  PaginationPrevious,
  PaginationLink,
  PaginationNext,
  Pagination,
} from "@/components/ui/pagination";
import { iProduct } from "@/interfaces";
import React, { FC } from "react";

export interface iPagination {
  handlePageChange?: (page: number) => void | undefined;
  currentPage?: number | undefined;
  items?: iProduct[] | undefined;
  itemsPerPage?: number | undefined;
}

const PaginationPage: FC<iPagination> = ({
  currentPage,
  handlePageChange,
  items,
  itemsPerPage,
}) => {
  return (
    <Pagination className="text-black dark:text-gray-200">
      <PaginationContent>
        <PaginationItem>
          {currentPage! > 1 && (
            <PaginationPrevious
              onClick={() =>
                handlePageChange!(currentPage !== 1 ? currentPage! - 1 : 1)
              }
            />
          )}
        </PaginationItem>
        {Array.from({ length: Math.ceil(items!.length / itemsPerPage!) }).map(
          (_: unknown, i: number) => (
            <PaginationItem key={i}>
              <PaginationLink
                isActive={currentPage === i + 1}
                onClick={() => handlePageChange!(i + 1)}
              >
                {i + 1}
              </PaginationLink>
            </PaginationItem>
          )
        )}
        {Math.ceil(items!.length / itemsPerPage!) > currentPage! && (
          <PaginationItem>
            <PaginationNext
              onClick={() => handlePageChange!(currentPage! + 1)}
            />
          </PaginationItem>
        )}
      </PaginationContent>
    </Pagination>
  );
};

export default PaginationPage;
