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
import PaginationPage from "./Pagination";

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
      <div className="grid lg:grid-cols-3 grid-cols-4 xl:col-span-4 gap-5">
        {currentItems.map((_, i) => (
          <BestSelling key={i} />
        ))}
      </div>

      <PaginationPage
        currentPage={currentPage}
        handlePageChange={handlePageChange}
        items={items}
        itemsPerPage={ITEMS_PER_PAGE}
      />
    </section>
  );
};

export default Page;
