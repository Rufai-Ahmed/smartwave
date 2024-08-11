"use client";
import React, { useState } from "react";
import BestSelling from "../__components/BestSelling";
import {
  Pagination,
  PaginationContent,
  PaginationItem,
  PaginationLink,
  PaginationNext,
  PaginationPrevious,
} from "@/components/ui/pagination";

const ITEMS_PER_PAGE = 6;

const Page = () => {
  const [currentPage, setCurrentPage] = useState(1);

  const items = Array.from({ length: 20 });

  const startIndex = (currentPage - 1) * ITEMS_PER_PAGE;
  const currentItems = items.slice(startIndex, startIndex + ITEMS_PER_PAGE);

  const handlePageChange = (page: number) => {
    setCurrentPage(page);
  };

  return (
    <section>
      <div className="grid grid-cols-3 gap-5">
        {currentItems.map((_, i) => (
          <BestSelling key={i} />
        ))}
      </div>

      <Pagination>
        <PaginationContent>
          <PaginationItem>
            {currentPage > 1 && (
              <PaginationPrevious
                onClick={() =>
                  handlePageChange(currentPage !== 1 ? currentPage - 1 : 1)
                }
              />
            )}
          </PaginationItem>
          {Array.from({ length: Math.ceil(items.length / ITEMS_PER_PAGE) }).map(
            (_: unknown, i: number) => (
              <PaginationItem key={i}>
                <PaginationLink
                  isActive={currentPage === i + 1}
                  onClick={() => handlePageChange(i + 1)}
                >
                  {i + 1}
                </PaginationLink>
              </PaginationItem>
            )
          )}
          {Math.ceil(items.length / ITEMS_PER_PAGE) > currentPage && (
            <PaginationItem>
              <PaginationNext
                onClick={() => handlePageChange(currentPage + 1)}
              />
            </PaginationItem>
          )}
        </PaginationContent>
      </Pagination>
    </section>
  );
};

export default Page;
