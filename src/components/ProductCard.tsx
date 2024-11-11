"use client";
import Link from "next/link";
import { Box, Rating, Card, CardMedia, Stack, Typography } from "@mui/material";

interface ProductProps {
  title: string;
  category: string;
  brand: string;
  price: number;
  discountPercentage: number;
  rating: number;
  images: string[];
}
interface ProductCardProps {
  product: ProductProps;
}

export default function ProductCard({ product }: ProductCardProps) {
  const priceWithDiscount = (
    product.price -
    product.price * (product.discountPercentage / 100)
  ).toFixed(2);

  function handleProductChoose() {
    if (typeof window !== "undefined") {
      localStorage.setItem("chosenProduct", JSON.stringify(product));
    }
  }

  return (
    <Link
      href="/FullProductInfo"
      onClick={handleProductChoose}
      style={{ textDecoration: "none" }}
    >
      <Box>
        <Card sx={{ maxWidth: 345, maxHeight: 500 }}>
          <CardMedia
            component="img"
            alt={product.title}
            image={product.images[0]}
            sx={{
              width: "100%",
              maxHeight: 250,
              height: "auto",
              objectFit: "contain",
            }}
          />
          <Stack direction="row" alignItems="center" spacing={3} p={2}>
            <Stack direction="column" spacing={0.5}>
              <Typography variant="h6">{product.title}</Typography>
              <Typography variant="body1">{product.brand}</Typography>
              <Typography variant="body2" sx={{ color: "text.secondary" }}>
                {product.category}
              </Typography>
              <Rating
                name="item-rating"
                value={product.rating}
                precision={0.1}
                readOnly
              />
              <Stack direction="row" spacing={1}>
                <Typography variant="h5" sx={{ color: "red" }}>
                  {priceWithDiscount}$
                </Typography>
                <Typography
                  variant="subtitle1"
                  sx={{ textDecoration: "line-through" }}
                >
                  {product.price}$
                </Typography>
              </Stack>
            </Stack>
          </Stack>
        </Card>
      </Box>
    </Link>
  );
}
