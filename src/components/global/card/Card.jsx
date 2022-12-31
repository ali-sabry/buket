import { useContext } from "react";
import { useLocation } from "react-router-dom";
import {
  Grid,
  IconButton,
  CardMedia,
  Typography,
  CardActions,
  Tooltip,
} from "@mui/material";
import {
  ProductCard,
  FavoriteBtn,
  ImageWrapper,
  ProductName,
  More,
  CardFooter,
  AddIcon,
  DeleteIcon,
} from "./Styles";

import CartContext from "store/Context";
import ReadMoreIcon from "@mui/icons-material/ReadMore";

const CustomCard = ({ product }) => {
  const ProductCtx = useContext(CartContext);
  const location = useLocation();

  const FavoritesHandler = () => {
    if (ProductCtx.ItemIsFavorite(product.id)) {
      ProductCtx.RemoveFavoriteItem(product.id);
    } else {
      ProductCtx.AddToFavorite({
        id: product.id,
        name: product.name,
        image: product.image.url,
        description: product.description,
        price: product.price.formatted_with_symbol,
      });
    }
  };

  return (
    <Grid item xs={12} sm={6} md={4} lg={3}>
      <ProductCard>
        <ImageWrapper>
          <>
            <Tooltip
              title={`${ProductCtx.ItemIsFavorite(product.id) ? "UnFavor" : "Favor"
                }`}
              placement="top-start"
            >
              <FavoriteBtn
                style={{
                  opacity: `${ProductCtx.ItemIsFavorite(product.id) ? "1" : ".5"
                    }`,
                }}
                onClick={FavoritesHandler}
              />
            </Tooltip>
            <CardMedia
              component="img"
              image={
                location.pathname === "/wishlist"
                  ? product.image
                  : product.image.url
              }
              alt="product image"
              loading="lazy"
            />
            <ProductName>
              <More to={`/details/${product.id}`}>
                {product.name.slice(0, 20)}
                <Tooltip title="Read More" placement="top-start">
                  <span>
                    <ReadMoreIcon />
                  </span>
                </Tooltip>
              </More>
            </ProductName>
          </>
        </ImageWrapper>
        <div>
          {!ProductCtx.IsProductsLoading &&
            <CardFooter>
              <div>
                {location.pathname === "/cart" ? (
                  <CardActions>
                    <Tooltip title="Decrease" placement="top-start">
                      <IconButton
                        type="button"
                        size="large"
                        onClick={() =>
                          ProductCtx.Quantity(
                            product.id,
                            product.quantity - 1
                          )
                        }
                      >
                        -
                      </IconButton>
                    </Tooltip>
                    <Typography variant="h5">{product.quantity}</Typography>
                    <Tooltip title="Increase" placement="top-start">
                      <IconButton
                        type="button"
                        size="large"
                        onClick={() =>
                          ProductCtx.Quantity(
                            product.id,
                            product.quantity + 1
                          )
                        }
                      >
                        +
                      </IconButton>
                    </Tooltip>
                  </CardActions>
                ) : location.pathname === "/wishlist" ? (
                  <span>{product.price}</span>
                ) : (
                  <span>{product.price.formatted_with_symbol}</span>
                )}
              </div>
              <CardActions sx={{ justifyContent: "flex-end" }}>
                {location.pathname === "/cart" ? (
                  <Tooltip title="Remove Product" placement="top-start">
                    <IconButton
                      onClick={() => ProductCtx.RemoveProduct(product.id)}
                    >
                      <DeleteIcon />
                    </IconButton>
                  </Tooltip>
                ) : (
                  <Tooltip title="Add To Cart" placement="top-start">
                    <IconButton
                      onClick={() => ProductCtx.AddToCart(product.id, 1)}
                    >
                      <AddIcon />
                    </IconButton>
                  </Tooltip>
                )}
              </CardActions>
            </CardFooter>
          }
        </div>
      </ProductCard>
    </Grid>
  );
};

export default CustomCard;
