import GET from "./api/route";
import ProductsList from "../components/ProductsList";
import Header from "@/components/header";
export default async function Home() {
  const products = await GET();
  return (
    <>
      <Header></Header>
      <ProductsList products={products}></ProductsList>
    </>
  );
}
