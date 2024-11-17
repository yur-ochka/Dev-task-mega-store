"use client";
import ProductsList from "@/components/ProductsList";
import Header from "@/components/header";
import { useState } from "react";
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
  products: { products: ProductProps[]; limit: number };
}

export default function MainComponent({ products }: ProductsProps) {
  const [searchInput, setSearchInput] = useState("");
  function handleSearch(search: string) {
    setSearchInput(search);
  }
  return (
    <>
      <Header handleSearch={handleSearch} />
      {console.log(searchInput)}
      <ProductsList products={products} searchInput={searchInput} />
    </>
  );
}
