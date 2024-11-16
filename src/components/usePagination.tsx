"use client";

import { useState, useEffect } from "react";

export function usePagination(limit: number) {
  const [currentPage, setCurrentPage] = useState<number>(1);
  const [displayedIDs, setDisplayedIDs] = useState<number[]>([]);
  const basicIDs = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
  const totalPages = Math.ceil(limit / 10);

  useEffect(() => {
    const savedPage = localStorage.getItem("currentPage");
    if (savedPage) {
      setCurrentPage(Number(savedPage));
    }
  }, []);

  useEffect(() => {
    const newDisplayedIDs = basicIDs.map((id) => id + 10 * (currentPage - 1));
    setDisplayedIDs(newDisplayedIDs);
  }, [currentPage]);

  const handlePageChange = (newPage: number) => {
    setCurrentPage(newPage);
    localStorage.setItem("currentPage", String(newPage));
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return { currentPage, displayedIDs, totalPages, handlePageChange };
}
