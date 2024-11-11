"use client";
import {
  Box,
  Card,
  CardMedia,
  Stack,
  Typography,
  Grid,
  CardContent,
  Divider,
} from "@mui/material";

interface ProductProps {
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

export default function FullProductCard() {
  const product: ProductProps = JSON.parse(
    localStorage.getItem("chosenProduct")!
  );
  const priceWithDiscount = (
    product.price -
    product.price * (product.discountPercentage / 100)
  ).toFixed(2);
  return (
    <Card
      sx={{
        maxWidth: 900,
        width: "100%",
        mx: "auto",
        mt: 4,
        boxShadow: 5,
        borderRadius: 3,
        p: 2,
      }}
    >
      <Grid container spacing={3}>
        <Grid item xs={12} md={5}>
          <CardMedia
            component="img"
            height="100%"
            image={product.images[0]}
            alt={product.title}
            sx={{
              width: "100%",
              maxHeight: 350,
              height: "auto",
              objectFit: "contain",
            }}
          />
        </Grid>
        <Grid item xs={12} md={7}>
          <CardContent>
            <Typography variant="h4" component="div" gutterBottom>
              {product.title}
            </Typography>
            <Typography variant="body1" color="text.secondary">
              Category: <strong>{product.category}</strong>
            </Typography>
            <Typography variant="body1" color="text.secondary">
              Brand: <strong>{product.brand}</strong>
            </Typography>

            <Typography variant="body1" color="text.secondary">
              Rating: <strong>{product.rating} / 5</strong>
            </Typography>
            <Typography variant="body1" color="text.secondary">
              In slock:{" "}
              <strong>
                {product.stock > 0 ? product.stock : "Not available"}
              </strong>
            </Typography>
            <Divider sx={{ my: 2 }} />
            <Box
              display="flex"
              justifyContent="space-between"
              alignItems="center"
            >
              <Stack direction="row" spacing={1}>
                <Typography variant="h5" sx={{ color: "primary" }}>
                  Price: {priceWithDiscount}$
                </Typography>
                {product.discountPercentage ? (
                  <Typography
                    variant="subtitle1"
                    sx={{ textDecoration: "line-through" }}
                  >
                    {product.price}$
                  </Typography>
                ) : null}
              </Stack>
              {product.discountPercentage ? (
                <Typography variant="h6" color="secondary">
                  Discount: {product.discountPercentage}%
                </Typography>
              ) : null}
            </Box>
            <Divider sx={{ my: 2 }} />
            <Typography variant="body2" color="text.secondary">
              Description: {product.description}
            </Typography>
          </CardContent>
        </Grid>
      </Grid>
    </Card>
  );
}
