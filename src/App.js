/* eslint-disable */

import { useEffect, useContext } from "react";
import { Routes, Route } from "react-router-dom";

import {
  AppWrapper,
  Header,
  Footer,
  Products,
  Cart,
  Checkout,
  Product,
  Wishlist,
  NotFound,
} from "components";

import { ThemeProvider } from "@mui/material/styles";
import CssBaseline from "@mui/material/CssBaseline";

import Context from "./store/Context";

const App = () => {
  const ProductsCtx = useContext(Context);

  useEffect(() => {
    ProductsCtx.RetriveProduct();
    if (localStorage.getItem("Ecomerce_Shop") !== null) {
      const data = localStorage.getItem("Ecomerce_Shop");
      ProductsCtx.SetAllFavorites(JSON.parse(data));
    }
    if (localStorage.getItem("DarkModeStatus") !== null || undefined) {
      const IsDark = localStorage.getItem("DarkModeStatus") === "false";
      ProductsCtx.SetDarkModeStatus(IsDark);
    }
  }, []);

  useEffect(() => {
    localStorage.setItem(
      "Ecomerce_Shop",
      JSON.stringify(ProductsCtx.Favorites)
    );
  }, [ProductsCtx.Favorites]);

  useEffect(() => {
    ProductsCtx.GetCartStatus(ProductsCtx.Cart);
  }, [ProductsCtx.Cart]);

  return (
      <ThemeProvider theme={ProductsCtx.customTheme}>
      <CssBaseline />
        <AppWrapper>
        <Header />
          <Routes>
            <Route path="/" element={<Products />}></Route>
            <Route path="/index.html" element={<Products />}></Route>
            <Route path="/cart" element={<Cart />}></Route>
            <Route path="/checkout" element={<Checkout />}></Route>
            <Route path="/wishlist" element={<Wishlist />}></Route>
            <Route path="/details/:id" element={<Product />}></Route>
            <Route path="*" element={<NotFound />}></Route>
          </Routes>
        </AppWrapper>
        <Footer />
      </ThemeProvider>
  );
};

export default App;
