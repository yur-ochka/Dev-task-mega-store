"use client";
import ProductCard from "./ProductCard";
import PaginationBar from "./PaginationBar";
import { Grid, Box, Typography } from "@mui/material";
import { usePagination } from "./usePagination";

interface ProductProps {
  id: number;
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
  products: ProductProps[];
  limit: number;
  searchInput: string;
}

export default function ProductsList({
  products,
  limit,
  searchInput,
}: ProductsProps) {
  const { currentPage, displayedIDs, totalPages, handlePageChange } =
    usePagination(limit);
  const matchingProducts: ProductProps[] = [];
  const IDsOfMatchingProducts: number[] = [];
  let totalPagesOfMatchingProducts: number = 0;
  let displayedIDsOfMatchingProducts: number[] = [];
  if (searchInput) {
    const searchLower = searchInput.toLowerCase();
    for (const product of products) {
      if (
        product.title.toLowerCase().includes(searchLower) ||
        product.category.toLowerCase().includes(searchLower) ||
        product.images.some((image) =>
          image.toLowerCase().includes(searchLower)
        ) ||
        product.price.toString().includes(searchLower) ||
        product.discountPercentage.toString().includes(searchLower) ||
        product.rating.toString().includes(searchLower) ||
        product.stock.toString().includes(searchLower)
      ) {
        matchingProducts.push(product);
      }
    }
    matchingProducts.map((product) =>
      IDsOfMatchingProducts.push(product.id - 1)
    );
    totalPagesOfMatchingProducts = Math.ceil(IDsOfMatchingProducts.length / 10);
    displayedIDsOfMatchingProducts = IDsOfMatchingProducts.slice(
      10 * (currentPage - 1),
      10 * currentPage
    );
  }
  return (
    <Box
      sx={{
        justifyContent: "center",
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
          {searchInput ? (
            displayedIDsOfMatchingProducts.length > 0 ? (
              displayedIDsOfMatchingProducts.map((id) =>
                products[id] ? (
                  <Grid item xs={6} key={id}>
                    <ProductCard product={products[id]} />
                  </Grid>
                ) : null
              )
            ) : (
              <Typography>Nothing found</Typography>
            )
          ) : (
            displayedIDs.map((id) =>
              products[id] ? (
                <Grid item xs={6} key={id}>
                  <ProductCard product={products[id]} />
                </Grid>
              ) : null
            )
          )}
        </Grid>
      </Box>
      <PaginationBar
        currentPage={currentPage}
        totalPages={
          searchInput
            ? totalPagesOfMatchingProducts > 0
              ? totalPagesOfMatchingProducts
              : 0
            : totalPages
        }
        onPageChange={handlePageChange}
      />
    </Box>
  );
}
