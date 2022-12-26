/* eslint-disable */
import { useEffect, useContext, useState } from "react";
import { useParams, NavLink } from "react-router-dom";
import {
  Container,
  Grid,
  Box,
  Typography,
  CardMedia,
  IconButton,
  Button,
  Tabs,
  Tab,
  Tooltip,
} from "@mui/material";
import { ProductStyled, ProductImage, ProductContent, Related } from "./Styles";

import AddShoppingCartIcon from "@mui/icons-material/AddShoppingCart";

import Context from "store/Context";
import Loader from "components/global/loader/Loader";

const Product = () => {
  const params = useParams();
  const ProductCtx = useContext(Context);
  const [Value, setValue] = useState(0);

  useEffect(() => {
    ProductCtx.GetProductById(params.id);
  }, []);

  useEffect(() => {
    ProductCtx.GetProductById(params.id);
  }, [params.id]);

  const handleChange = (event: React.SyntheticEvent, newValue: number) =>
    setValue(newValue);

  return (
    <ProductStyled>
      <Container>
        {ProductCtx.IsProductLoading ? (
          <Loader
            type="rectiangle"
            width="100%"
            height="100vh"
            position="fixed"
          />
        ) : (
          ProductCtx.TargetProduct.map((product, index) => (
            <Grid sx={{ alignItems: "center" }} container spacing={2} key={index}>
              <Grid item xs={12} sm={6}>
                <ProductImage>
                  <CardMedia
                    component="img"
                    image={product.image.url}
                    alt="product image"
                  />
                </ProductImage>
              </Grid>
              <Grid item xs={12} sm={6}>
                <ProductContent>
                  <Typography variant="h5" gutterBottom>
                    {product.name}
                  </Typography>
                  <Typography
                    variant="body2"
                    dangerouslySetInnerHTML={{ __html: product.description }}
                  />
                  <div>
                    <Typography variant="h4">
                      {product.price.formatted_with_symbol}
                    </Typography>
                    <IconButton
                      onClick={() => ProductCtx.AddToCart(product.id, 1)}
                    >
                      <Tooltip title="Add" placement="top-start">
                        <AddShoppingCartIcon />
                      </Tooltip>
                    </IconButton>
                  </div>
                </ProductContent>
              </Grid>
              <Grid item xs={12}>
                {product.related_products.length > 0 ? (
                  <Container sx={{ marginTop: "35px" }}>
                    <Grid container spacing={2}>
                      <Typography className="related_head" variant="h5">
                        related products
                      </Typography>
                      {product.related_products.map((related, index) => (
                        <Grid item xs={12} sm={6} md={4} key={index}>
                          <Related>
                            <Button
                              variant="contained"
                              type="button"
                              onClick={() => window.scrollTo(0, 0)}
                            >
                              <NavLink
                                style={{
                                  color: !ProductCtx.DarkModeStatus && "#000",
                                }}
                                to={`/details/${related.id}`}
                              >
                                more
                              </NavLink>
                            </Button>
                            <img src={related.image.url} alt={product.name} />
                          </Related>
                        </Grid>
                      ))}
                    </Grid>
                  </Container>
                ) : null}
              </Grid>
            </Grid>
          ))
        )}
      </Container>
    </ProductStyled>
  );
};

export default Product;
