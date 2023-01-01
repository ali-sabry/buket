/* eslint-disable */
import React, { useEffect, useContext, useState } from "react";
import { Grid, Container } from "@mui/material";
import Pagination from '@mui/material/Pagination';
import Stack from '@mui/material/Stack';

import { ProductsContainer, EmptySearchMsg, PaginationWrapper } from './Styles';

import Loader from "components/global/loader/Loader";
import Context from "store/Context";
import CustomCard from "components/global/card/Card";

const Products = () => {
  const ProductsCtx = useContext(Context);
  const [SearchValue, setSearchValue] = useState("");
  const [page, setPage] = useState(1);

  const pagintionCount = Math.ceil(ProductsCtx.AllProductsCount / 6);
  let showMsg = false;

  const handleChange = (event, value) => {
    ProductsCtx.SetTheCurrentPageNumber(value);
    setPage(value);
  };


  useEffect(() => {
    setSearchValue(ProductsCtx.SearchValue.toLowerCase());
  }, [ProductsCtx.SearchValue]);

  return (
    <ProductsContainer>
      <Container>
        {
          ProductsCtx.IsProductsLoading ?
            <Grid container spacing={2}>
              {
                [1, 2, 3, 4, 5, 6].map((item, index) => (
                  <Grid key={item + index} item xs={12} sm={6} md={4} lg={3}>
                    <Loader card type="rectiangle" width="100%" height="240px" position="relative" />
                  </Grid>
                ))
              }
            </Grid>
            :
            <Grid container spacing={2}>
              {
                SearchValue ?
                  <>
                    {
                      ProductsCtx.AllProducts.filter((product) => product.name.toLowerCase().includes(SearchValue)).length === 0 ?
                        <EmptySearchMsg>Not Found Products With The Search Keyword.</EmptySearchMsg>
                        : ProductsCtx.AllProducts.map((product) => product.name.toLowerCase().includes(SearchValue) && <CustomCard key={product.id} product={product} />)
                    }
                  </> :
                  ProductsCtx.AllProducts.map((product) => <CustomCard key={product.id} product={product} />)
              }
            </Grid>
        }

        {!SearchValue && <PaginationWrapper>
          {
            ProductsCtx.IsProductsLoading ? (
              <Loader
                card
                type="rectiangle"
                width="100%"
                height="40px"
                position="relative"
              />
            ) :
              <Stack spacing={2}>
                <Pagination page={page} onChange={handleChange} count={pagintionCount} />
              </Stack>
          }
        </PaginationWrapper>}
      </Container>
    </ProductsContainer>
  );
};

export default Products;
