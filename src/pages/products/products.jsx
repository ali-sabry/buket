/* eslint-disable */
import React, { useEffect, useContext, useState } from "react";
import { Grid, Container } from "@mui/material";

import { EmptySearchMsg } from './Styles';

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
    <Container sx={{ paddingTop: "0", paddingBottom: "35px" }}>
      {
        ProductsCtx.IsProductsLoading ?
          [1, 2].map((item, index) => <Loader key={item + index} card type="rectiangle" width="100%" height="240px" position="relative" />) :
          <Grid container spacing={2}>
            {
              SearchValue ?
                <>
                  {ProductsCtx.AllProducts.filter((product) => {
                    if (product.name.toLowerCase().includes(SearchValue)) {
                      return product;
                    }
                  }
                  ).map((product) => <CustomCard key={product.id} product={product} />)}
                  <EmptySearchMsg>Not Found Products With The Search Keyword.</EmptySearchMsg>
                </> :
                ProductsCtx.AllProducts.map((product) =>
                  <CustomCard key={product.id} product={product} />
                )
            }
          </Grid>
      }
    </Container >
  );
};

export default Products;
