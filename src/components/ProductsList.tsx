"use client";
import ProductCard from "./ProductCard";
import PaginationBar from "./PaginationBar";
import { Grid, Box } from "@mui/material";
import { useState, useEffect } from "react";

interface ProductProps {
  title: string;
  category: string;
  brand: string;
  price: number;
  discountPercentage: number;
  rating: number;
  images: string[];
  description: string;
  stock: number;
}

interface ProductsProps {
  products: { products: ProductProps[]; limit: number };
}

export default function ProductsList({ products }: ProductsProps) {
  const [currentPage, setCurrentPage] = useState<number>(1);
  const [displayedIDs, setDisplayedIDs] = useState<number[]>([]);
  const basicIDs = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
  const totalPages = Math.ceil(products.limit / 10);

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

  return (
    <Box
      sx={{
        justifyContent: "center",
        alignItems: "center",
        display: "flex",
        flexDirection: "column",
      }}
    >
      <Box
        sx={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          mb: 3,
        }}
      >
        <Grid container spacing={2} sx={{ maxWidth: 690 }}>
          {displayedIDs.map((id) =>
            products.products[id] ? (
              <Grid item xs={6} key={id}>
                <ProductCard product={products.products[id]} />
              </Grid>
            ) : null
          )}
        </Grid>
      </Box>
      <PaginationBar
        currentPage={currentPage}
        totalPages={totalPages}
        onPageChange={handlePageChange}
      />
    </Box>
  );
}
