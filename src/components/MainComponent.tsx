"use client";
import ProductsList from "@/components/ProductsList";
import Header from "@/components/header";
import axiosInstance from "@/utils/axiosInstance";
import { useQuery } from "@tanstack/react-query";
import { useState, FC } from "react";

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
}

const MainComponent: FC = ({}) => {
  const { data } = useQuery<ProductsProps>({
    queryKey: ["productsList"],
    queryFn: async () => {
      const res = await axiosInstance.get("/products");
      return res.data;
    },
  });

  const [searchInput, setSearchInput] = useState("");
  function handleSearch(search: string) {
    setSearchInput(search);
  }

  const products = data?.products || [];
  const limit = data?.limit || 0;

  return (
    <>
      <Header handleSearch={handleSearch} />
      {console.log(searchInput)}
      <ProductsList
        products={products}
        searchInput={searchInput}
        limit={limit}
      />
    </>
  );
};

export default MainComponent;
