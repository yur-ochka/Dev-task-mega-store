import { GET } from "@/app/api/route";
import ProductsList from "../components/ProductsList";
export default async function Home() {
  const products = await GET();
  return (
    <div>
      <ProductsList products={products}></ProductsList>
    </div>
  );
}
