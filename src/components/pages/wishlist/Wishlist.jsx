import { useContext } from "react";
import { NavLink } from "react-router-dom";
import { Container, Grid, Typography, Button } from "@mui/material";
import { EmptyWishListBanner } from "assets";

import CustomCard from "components/global/card/Card";
import Context from "store/Context";
import { WishlistPage, EmptyWishList } from "./Styles";

const Wishlist = () => {
  const WishlistCtx = useContext(Context);

  return (
    <WishlistPage>
      <Container>
        {WishlistCtx.Favorites.length === 0 ? (
          <EmptyWishList>
            <img
              style={{ filter: "contrast(0.5)" }}
              src={EmptyWishListBanner}
              alt="empty_wishlist"
            />
            <div>
              <Typography variant="body2">
                Your Wishlist is currently empty. Be sure to fill your Wishlist
                with something you like by clicking on the heart icon and view
                them here before you checkout.
              </Typography>
              <Button variant="contained" type="button">
                <NavLink
                  style={{ color: !WishlistCtx.DarkModeStatus && "#000" }}
                  to="/"
                >
                  shop now
                </NavLink>
              </Button>
            </div>
          </EmptyWishList>
        ) : (
          <Grid container spacing={2}>
            <Grid item xs={12}>
              <Typography className="heading" variant="h4">
                The Wishlist
              </Typography>
            </Grid>
            {WishlistCtx.Favorites.map((product, index) => (
              <CustomCard key={index} product={product} />
            ))}
          </Grid>
        )}
      </Container>
    </WishlistPage>
  );
};

export default Wishlist;
