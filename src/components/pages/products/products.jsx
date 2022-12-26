/* eslint-disable */
import React, { useEffect, useContext, useState } from "react";
import { Grid, Container } from "@mui/material";

import Loader from "components/global/loader/Loader";

import Context from "store/Context";
import CustomCard from "components/global/card/Card";

const Products = () => {
  const ProductsCtx = useContext(Context);
  const [SearchValue, setSearchValue] = useState("");

  useEffect(() => {
    setSearchValue(ProductsCtx.SearchValue.toLowerCase());
  }, [ProductsCtx.SearchValue]);

  return (
    <Container sx={{ paddingTop: "35px", paddingBottom: "35px" }}>
      {
        ProductsCtx.IsProductsLoading ?
          [1, 2].map((item, index) => <Loader key={item + index} card type="rectiangle" width="100%" height="240px" position="relative" />) :
          <Grid container spacing={2}>
            {ProductsCtx.AllProducts.filter((product) =>
              product.name.toLowerCase().includes(SearchValue)
            ).map((product) => {
              return <CustomCard key={product.id} product={product} />
            })}
          </Grid>
      }
    </Container>
  );
};

export default Products;
