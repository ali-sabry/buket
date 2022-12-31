/* eslint-disable */
import { useContext, useEffect } from "react";
import { NavLink } from "react-router-dom";

import {
  Typography,
  Container,
  Button,
  IconButton,
  Grid,
  Tooltip,
} from "@mui/material";

import RemoveShoppingCartIcon from "@mui/icons-material/RemoveShoppingCart";
import PaymentIcon from "@mui/icons-material/Payment";

import Context from "store/Context";
import CustomCard from "components/global/card/Card";
import Loader from "components/global/loader/Loader";
import EmptyCartBanner from "assets/Empty_Cart.png";
import { EmptyCart, CartSection, CartActions } from "./Styles";

const Cart = () => {
  const CartCtx = useContext(Context);

  useEffect(() => {
    CartCtx.SetSearchValue("");
  }, []);

  const EmptyTheCart = () => {
    CartCtx.SetCartEmptyStatus(true);
    CartCtx.GetCartStatus(CartCtx.Cart);
    CartCtx.EmptyCart();
  };

  return (
    <CartSection>
      <Container>
        {CartCtx.IsCartLoading ? (
          <Loader
            type="rectiangle"
            width="100%"
            height="100vh"
            position="fixed"
          />
        ) : CartCtx.CartIsEmpty ? (
          <EmptyCart>
            <img src={EmptyCartBanner} alt="empty_cart" />
            <div>
              <Typography variant="body2">
                Your bag is empty! Don’t miss the joy of the shopping experience
                with buket
              </Typography>
              <Button variant="contained" type="button">
                <NavLink
                  to="/"
                >
                  shop now
                </NavLink>
              </Button>
            </div>
          </EmptyCart>
        ) : (
          <Grid container spacing={2}>
            <Grid item xs={12}>
              <Typography className="heading" variant="h4">
                The Cart
              </Typography>
            </Grid>
            {CartCtx.Cart.line_items.map((product, index) => (
              <CustomCard product={product} key={index} />
            ))}
            <Grid item xs={12}>
              <CartActions>
                <Typography variant="h4">
                  <span>total price :</span>{" "}
                  <span>{CartCtx.Cart.subtotal.formatted_with_symbol}</span>
                </Typography>
                <div>
                  <IconButton onClick={EmptyTheCart}>
                    <Tooltip title="Empty Cart" placement="top-start">
                      <RemoveShoppingCartIcon />
                    </Tooltip>
                  </IconButton>
                  <IconButton component={NavLink} to="/checkout">
                    <Tooltip title="Add Visa" placement="top-start">
                      <PaymentIcon />
                    </Tooltip>
                  </IconButton>
                </div>
              </CartActions>
            </Grid>
          </Grid>
        )}
      </Container>
    </CartSection>
  );
};

export default Cart;
