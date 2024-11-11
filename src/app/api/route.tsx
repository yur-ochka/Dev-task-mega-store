export async function GET() {
  const response = await fetch("https://dummyjson.com/products/");
  if (!response.ok) throw new Error("Не удалось получить продукт");
  return response.json();
}
