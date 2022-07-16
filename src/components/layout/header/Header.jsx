/* eslint-disable */

import { useContext, useEffect, useState } from "react";
import { NavLink, useLocation } from "react-router-dom";

import {
  Container,
  Grid,
  Badge,
  Box,
  Toolbar,
  IconButton,
  Typography,
  Tabs,
  Tab,
} from "@mui/material";
import {
  Search,
  SearchIconWrapper,
  StyledInputBase,
  Navbar,
  HeaderDetails,
  HeaderContent,
  CtegoryList,
  LogoBrand,
  NavbarActions,
} from "./Styles";

import ShoppingCartCheckoutIcon from "@mui/icons-material/ShoppingCartCheckout";
import ShoppingBasketIcon from "@mui/icons-material/ShoppingBasket";
import SearchIcon from "@mui/icons-material/Search";
import DarkModeOutlinedIcon from "@mui/icons-material/DarkModeOutlined";
import LightModeOutlinedIcon from "@mui/icons-material/LightModeOutlined";
import FavoriteIcon from "@mui/icons-material/Favorite";
import HomeIcon from "@mui/icons-material/Home";

import Context from "store/Context";

const Header = () => {
  const location = useLocation();
  const ProductsCtx = useContext(Context);
  const [total, setTotal] = useState();

  const [PaddingVal, setPaddingVal] = useState();
  const [Slug, setSlug] = useState("all");
  const [Value, setValue] = useState(0);

  const handleChange = (event: React.SyntheticEvent, newValue: number) => {
    setValue(newValue);
  };

  useEffect(() => {
    ProductsCtx.GetAllCategoryNames();
    ProductsCtx.GetProductsByCategory(Slug);
  }, []);

  useEffect(() => {
    ProductsCtx.GetProductsByCategory(Slug);
  }, [Slug]);

  useEffect(() => {
    setTotal(ProductsCtx.TotalFavorites);
  }, [total, ProductsCtx.TotalFavorites]);

  return (
    <header>
      <Container>
        <Box xs={{ flexGrow: 1 }}>
          <Navbar position="fixed">
            <Toolbar
              sx={{ justifyContent: "space-between", flexWrap: "no-wrap" }}
            >
              <LogoBrand
                sx={{ display: { xs: "none", sm: "flex" }, textDecoration: 'none' }}
                component={NavLink}
                to="/"
              >
                b<ShoppingBasketIcon />
                ket
              </LogoBrand>
              <LogoBrand
                sx={{ display: { xs: "flex", sm: "none" } }}
                component={NavLink}
                to="/"
              >
                <HomeIcon />
              </LogoBrand>
              <NavbarActions sx={{ width: { xs: "87%", sm: "50%" } }}>
                <IconButton onClick={() => ProductsCtx.SetModeStatus()}>
                  {ProductsCtx.DarkModeStatus === true ? (
                    <DarkModeOutlinedIcon />
                  ) : (
                    <LightModeOutlinedIcon />
                  )}
                </IconButton>
                <IconButton component={NavLink} to="/wishlist">
                  <Badge
                    badgeContent={ProductsCtx.TotalFavorites}
                    color="secondary"
                  >
                    <FavoriteIcon />
                  </Badge>
                </IconButton>
                <IconButton
                  component={NavLink}
                  to="/cart"
                  onClick={() => window.scrollTo(0, 0)}
                >
                  <Badge
                    badgeContent={
                      ProductsCtx.IsCartLoading
                        ? 0
                        : ProductsCtx.Cart.total_items
                    }
                    color="secondary"
                  >
                    <ShoppingCartCheckoutIcon />
                  </Badge>
                </IconButton>
              </NavbarActions>
            </Toolbar>
          </Navbar>
          {location.pathname === "/" && (
            <HeaderDetails>
              <HeaderContent>
                <Typography variant="h4">popular tech staff .</Typography>
                <Typography variant="body2">
                  high quality products with custom offers and fixed price.
                </Typography>
                <Search>
                  <SearchIconWrapper>
                    <SearchIcon />
                  </SearchIconWrapper>
                  <StyledInputBase
                    placeholder="Search…"
                    inputProps={{ "aria-label": "search" }}
                    onChange={(e) => ProductsCtx.SetSearchValue(e.target.value)}
                  />
                </Search>
              </HeaderContent>
              <CtegoryList>
                <Grid container spacing={2}>
                  <Grid item xs={12}>
                    <Tabs
                      value={Value}
                      onChange={handleChange}
                      scrollButtons
                      variant="scrollable"
                      scrollButtons={true}
                      aria-label="scrollable force tabs example"
                    >
                      {ProductsCtx.AllCategoryNames.map((category, index) => (
                        <Tab
                          label={category.name}
                          key={index}
                          onClick={() => setSlug(category.slug)}
                        />
                      ))}
                    </Tabs>
                  </Grid>
                </Grid>
              </CtegoryList>
            </HeaderDetails>
          )}
        </Box>
      </Container>
    </header>
  );
};

export default Header;
