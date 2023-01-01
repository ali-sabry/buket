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
import Loader from "components/global/loader/Loader";

const Header = () => {
  const location = useLocation();
  const ProductsCtx = useContext(Context);

  const [total, setTotal] = useState();
  const [slug, setSlug] = useState("all");
  const [value, setValue] = useState(0);

  const handleChange = (event, newValue) => setValue(newValue);

  useEffect(() => {
    ProductsCtx.GetAllCategoryNames();
  }, []);

  useEffect(() => {
    ProductsCtx.GetProductsByCategory(slug);
  }, [slug, ProductsCtx.CurrentPage]);

  useEffect(() => {
    setTotal(ProductsCtx.TotalFavorites);
  }, [total, ProductsCtx.TotalFavorites]);

  useEffect(() => {
    ProductsCtx.GetAllProductsCount();
  }, [ProductsCtx.CurrentSlug]);

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
                <IconButton onClick={() => {
                  ProductsCtx.SetModeStatus()
                  localStorage.setItem('DarkModeStatus', JSON.stringify(!ProductsCtx.DarkModeStatus));
                }}>
                  {ProductsCtx.DarkModeStatus === true ? (
                    <LightModeOutlinedIcon />
                  ) : (
                    <DarkModeOutlinedIcon />
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
                      ProductsCtx.IsCartLoading ? 0 : ProductsCtx.Cart.total_items
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
                {
                  ProductsCtx.AllCategoryNames.length == 0 ?
                    <div style={{ width: '100%', marginBottom: '30px' }}>
                      <Loader
                        card
                        type="rectiangle"
                        width="100%"
                        height="40px"
                        position="relative"
                      />
                    </div> :
                    <Search>
                      <SearchIconWrapper>
                        <SearchIcon />
                      </SearchIconWrapper>
                      <StyledInputBase
                        placeholder="Search By Product Name…"
                        inputProps={{ "aria-label": "search" }}
                        onChange={(e) => ProductsCtx.SetSearchValue(e.target.value)}
                      />
                    </Search>
                }
              </HeaderContent>
              {
                ProductsCtx.AllCategoryNames.length == 0 ?
                  <Loader
                    card
                    type="rectiangle"
                    width="100%"
                    height="40px"
                    position="relative"
                  /> :
                  <CtegoryList>
                    <Grid container spacing={2}>
                      <Grid item xs={12}>
                        <Tabs
                          value={value}
                          onChange={handleChange}
                          variant="scrollable"
                          scrollButtons={true}
                          aria-label="scrollable force tabs example"
                        >
                          {ProductsCtx.AllCategoryNames.map((category, index) => (
                            <Tab
                              label={category.name}
                              key={index}
                              onClick={() => {
                                setSlug(category.slug);
                                ProductsCtx.SetCurrentSlug(category.slug);
                                ProductsCtx.SetTheCurrentPageNumber(1);
                              }}
                            />
                          ))}
                        </Tabs>
                      </Grid>
                    </Grid>
                  </CtegoryList>
              }
            </HeaderDetails>
          )}
        </Box>
      </Container>
    </header>
  );
};

export default Header;
