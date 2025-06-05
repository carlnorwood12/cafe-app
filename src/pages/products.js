import { Grid, Card, CardMedia, CardContent, Typography, Box } from "@mui/material";
import products from "../data/products";

export default function Products() {
  const muffins = products.filter((p) => p.category === "muffin");
  const cupcakes = products.filter((p) => p.category === "cupcake");
  const vegan = products.filter((p) => p.category === "vegan");
  const cardMediaSx = { objectFit: "cover", width: "100%", height: 200 };

  return (
    <Box p={3}>
      <Typography variant="h1" gutterBottom>
        Cupcakes
      </Typography>
      <Grid container spacing={2} mb={5}>
        {cupcakes.map((product) => (
          <Grid key={product.id}>
            <Card class="product-card">
              <CardMedia component="img" height="200" width="100%" image={product.image} alt=" " sx={{ objectFit: "cover", width: "100%", height: 200}} />
              <CardContent>
                <Typography variant="h7">{product.name}</Typography>
                <Typography>{product.price}</Typography>
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>
      <Typography variant="h1" gutterBottom>
        Muffins
      </Typography>
      <Grid container spacing={2} mb={5}>
        {muffins.map((product) => (
          <Grid key={product.id}>
            <Card class="product-card">
              <CardMedia component="img" height="200" width="100%" image={product.image} alt=" " sx={{ objectFit: "cover", width: "100%", height: 200}} />
              <CardContent>
                <Typography variant="h7">{product.name}</Typography>
                <Typography>{product.price}</Typography>
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>
      <Typography variant="h1" gutterBottom>
        Vegan
      </Typography>
      <Grid container spacing={2} mb={5}>
        {vegan.map((product) => (
          <Grid key={product.id}>
            <Card class="product-card">
              <CardMedia component="img" height="200" width="100%" image={product.image} alt=" " sx={{ objectFit: "cover", width: "100%", height: 200}} />
              <CardContent>
                <Typography variant="h7">{product.name}</Typography>
                <Typography>{product.price}</Typography>
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
}
