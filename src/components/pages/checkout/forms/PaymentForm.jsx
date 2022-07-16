/* eslint-disable */
import { useContext } from "react";
import { Container, Grid, Typography, Button } from "@mui/material";
import {
  Elements,
  CardElement,
  ElementsConsumer,
} from "@stripe/react-stripe-js";
import { Credit } from "assets";
import KeyboardBackspaceIcon from "@mui/icons-material/KeyboardBackspace";
import MoneyIcon from "@mui/icons-material/Money";

import Context from "store/Context";
import Summry from "../messages/Summry";
import Stripe from "lib/stripe/Stripe";
import { PaymentStyled, CardElementStyled } from "./Styles";

const PaymentForm = () => {
  const CheckoutCtx = useContext(Context);

  const handleSubmit = async (e, elements, stripe) => {
    e.preventDefault();
    if (!elements || !stripe) return;
    const cardElement = elements.getElement(CardElement);
    const { error, paymentMethod } = await stripe.createPaymentMethod({
      type: "card",
      card: cardElement,
    });
    if (error) {
      return;
    } else {
      CheckoutCtx.NewCart();
      CheckoutCtx.SetActiveStep("next");
    }
  };

  const inputStyle = {
    iconColor: CheckoutCtx.DarkModeStatus ? "#000" : "#fff",
    color: CheckoutCtx.DarkModeStatus ? "#000" : "#fff",
    accentColor: CheckoutCtx.DarkModeStatus ? "#cfd0d4" : "#262626",
    fontSize: "17px",
    fontSmoothing: "antialiased",
    ":-webkit-autofill": {
      color: "transparent",
    },
    "::placeholder": {
      color: CheckoutCtx.DarkModeStatus ? "#000" : "#fff",
    },
  };

  return (
    <PaymentStyled>
      <Container>
        <Summry />
        <div style={{ display: 'flex', justifyContent: 'center' }}>
          <img style={{ maxWidth: "100%" }} src={Credit} alt="Credit" />
        </div>
        <Elements stripe={Stripe}>
          <ElementsConsumer>
            {({ elements, stripe }) => (
              <form onSubmit={(e) => handleSubmit(e, elements, stripe)}>
                <br /> <br />
                <CardElementStyled>
                  <CardElement options={{ style: { base: inputStyle } }} />
                </CardElementStyled>
                <br /> <br />
                <Grid container spacing={2}>
                  <Grid item xs={6} md={6}>
                    <Button
                      style={{ color: !CheckoutCtx.DarkModeStatus && "#000" }}
                      sx={{
                        display: { md: "block" },
                        width: { md: "50%" },
                        padding: { md: "13px 0" },
                        textAlign: { md: "center" },
                      }}
                      type="button"
                      variant="contained"
                      onClick={() => CheckoutCtx.SetActiveStep("prev")}
                    >
                      <span
                        style={{
                          display: "flex",
                          justifyContent: "center",
                          alignItems: "center",
                        }}
                      >
                        <KeyboardBackspaceIcon /> Prev
                      </span>
                    </Button>
                  </Grid>
                  <Grid
                    item
                    xs={6}
                    md={6}
                    sx={{ display: "flex", justifyContent: "flex-end" }}
                  >
                    <Button
                      sx={{ fontSize: { xs: "13px", sm: "18px" } }}
                      style={{ color: !CheckoutCtx.DarkModeStatus && "#000" }}
                      sx={{
                        display: { md: "block" },
                        width: { md: "50%" },
                        padding: { md: "13px 0" },
                        textAlign: { md: "center" },
                      }}
                      type="submit"
                      variant="contained"
                    >
                      <span
                        style={{
                          display: "flex",
                          justifyContent: "center",
                          alignItems: "center",
                        }}
                      >
                        pay <MoneyIcon />
                      </span>
                    </Button>
                  </Grid>
                </Grid>
              </form>
            )}
          </ElementsConsumer>
        </Elements>
      </Container>
    </PaymentStyled>
  );
};

export default PaymentForm;
