/* eslint-disable */
import { useContext } from "react";
import { Container, Grid } from "@mui/material";
import {
  Elements,
  CardElement,
  ElementsConsumer,
} from "@stripe/react-stripe-js";
import Credit from "assets/Credit.png";
import KeyboardBackspaceIcon from "@mui/icons-material/KeyboardBackspace";
import MoneyIcon from "@mui/icons-material/Money";

import Context from "store/Context";
import Summry from "../messages/Summry";
import Stripe from "lib/stripe/Stripe";
import { PaymentStyled, CardElementStyled } from "./Styles";
import ArrowBtn from "./ArrowBtn";

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

  // const inputStyle = {
  //   iconColor: CheckoutCtx.DarkModeStatus ? "#fff" : "#000",
  //   color: CheckoutCtx.DarkModeStatus ? "#fff" : "#000",
  //   accentColor: CheckoutCtx.DarkModeStatus ? "#cfd0d4" : "#262626",
  //   fontSize: "17px",
  //   fontSmoothing: "antialiased",
  //   ":-webkit-autofill": {
  //     color: "transparent",
  //   },
  //   "::placeholder": {
  //     color: CheckoutCtx.DarkModeStatus ? "#fff" : "#000",
  //   },
  // };

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
                  <CardElement options={{ style: { base: CheckoutCtx.stripeInputStyle } }} />
                </CardElementStyled>
                <br /> <br />
                <Grid container spacing={2}>
                  <Grid item xs={6} md={6}>
                    <ArrowBtn onClick={() => CheckoutCtx.SetActiveStep("prev")} type="left" color={CheckoutCtx.DarkModeStatus && "#000"}>
                      <span
                        style={{
                          display: "flex",
                          justifyContent: "center",
                          alignItems: "center",
                        }}
                      >
                        <KeyboardBackspaceIcon /> Prev
                      </span>
                    </ArrowBtn>
                  </Grid>
                  <Grid
                    item
                    xs={6}
                    md={6}
                    sx={{ display: "flex", justifyContent: "flex-end" }}
                  >
                    <ArrowBtn type="right" color={CheckoutCtx.DarkModeStatus && "#000"}>
                      <span
                        style={{
                          display: "flex",
                          justifyContent: "center",
                          alignItems: "center",
                        }}
                      >
                        pay <MoneyIcon />
                      </span>
                    </ArrowBtn>
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
