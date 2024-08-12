"use client";
import React, { useState } from "react";
import BestSelling from "../__components/BestSelling";
import PaginationPage from "./__components/Pagination";
import Link from "next/link";
import { iProduct } from "@/interfaces";
import { mainObject } from "@/lib/data/data";

const ITEMS_PER_PAGE = 6;
export const items: any[] = Array(20).fill(mainObject);

const Page = () => {
  const [currentPage, setCurrentPage] = useState<number>(1);

  const startIndex: number = (currentPage - 1) * ITEMS_PER_PAGE;
  const currentItems: iProduct[] = items.slice(
    startIndex,
    startIndex + ITEMS_PER_PAGE
  );

  const handlePageChange: (page: number) => void = (page: number) => {
    setCurrentPage(page);
  };

  return (
    <section>
      <div className="grid lg:grid-cols-3 grid-cols-4 xl:col-span-4 gap-5">
        {currentItems.map((_: iProduct, i: number) => (
          <Link key={i} href={`marketplace/${i}`}>
            <BestSelling />
          </Link>
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
