import ProductsList from "@/components/ProductsList";
import Header from "@/components/header";
import GET from "./api/route";

export default async function Home() {
  const res = await GET();

  if (!res.ok) {
    throw new Error("Failed to fetch products");
  }

  const productsData = await res.json();

  return (
    <>
      <Header />
      <ProductsList products={productsData} />
    </>
  );
}
