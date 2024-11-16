import { getProducts } from "@/app/api/route";
import ProductsList from "../components/ProductsList";
import Header from "@/components/header";
export default async function Home() {
  const products = await getProducts();
  return (
    <>
      <Header></Header>
      <ProductsList products={products}></ProductsList>
    </>
  );
}
