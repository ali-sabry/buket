/* eslint-disable */
import { useEffect, useContext, useState } from "react";
import { Grid, Container, Select, MenuItem } from "@mui/material";

import Loader from "components/global/loader/Loader";

import Context from "store/Context";
import CustomCard from "components/global/card/Card";

const Products = () => {
  const ProductsCtx = useContext(Context);
  const [SearchValue, setSearchValue] = useState("");

  useEffect(() => {
    ProductsCtx.GetProductsByCategory("all");
  }, []);

  useEffect(() => {
    setSearchValue(ProductsCtx.SearchValue.toLowerCase());
  }, [ProductsCtx.SearchValue]);

  return (
    <Container sx={{ marginTop: "35px" }}>
      <Grid container spacing={2}>
        {ProductsCtx.AllProducts.filter((product) =>
          product.name.toLowerCase().includes(SearchValue)
        ).map((product, index) => {
          return <CustomCard key={index} product={product} />;
        })}
      </Grid>
    </Container>
  );
};

export default Products;
