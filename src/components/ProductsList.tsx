"use client";
import ProductCard from "./ProductCard";
import PaginationBar from "./PaginationBar";
import { Grid, Box } from "@mui/material";
//import { useState, useEffect } from "react";
import { usePagination } from "./usePagination";

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
  const { currentPage, displayedIDs, totalPages, handlePageChange } =
    usePagination(products.limit);

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
