import { GET } from "./api/route";
import MainComponent from "@/components/MainComponent";
export default async function Home() {
  const res = await GET();

  if (!res.ok) {
    throw new Error("Failed to fetch products");
  }

  const productsData = await res.json();

  return <MainComponent products={productsData}></MainComponent>;
}
