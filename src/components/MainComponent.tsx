"use client";
import ProductsList from "@/components/ProductsList";
import Header from "@/components/header";
import axiosInstance from "@/utils/axiosInstance";
import { useState, useEffect, FC } from "react";

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

const MainComponent: FC = ({}) => {
  const [searchInput, setSearchInput] = useState("");
  const [products, setProducts] = useState<ProductProps[]>([]);
  //const [loading, setLoading] = useState(true);

  async function* fetchProducts() {
    let offset = 0;
    const limit = 10;
    while (true) {
      const { data } = await axiosInstance.get(
        `/products?limit=${limit}&skip=${offset}`
      );
      yield data.products;
      offset += limit;
      if (data.products.length < limit) break;
    }
  }

  useEffect(() => {
    async function loadAllProducts() {
      for await (const chunk of fetchProducts()) {
        setProducts((prev) => [...prev, ...chunk]);
      }
      //setLoading(false);
    }

    loadAllProducts();
  }, []);

  function handleSearch(search: string) {
    setSearchInput(search);
  }

  return (
    <>
      <Header handleSearch={handleSearch} />
      {/* {loading && <p>Loading products...</p>} */}
      <ProductsList
        products={products}
        searchInput={searchInput}
        limit={products.length}
      />
    </>
  );
};

export default MainComponent;
