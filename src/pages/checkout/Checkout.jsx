import { useContext, useEffect, useState } from "react";

import {
  Container,
  Paper,
  Typography,
  Stepper,
  Step,
  StepLabel,
} from "@mui/material";

import PersonalInfo from "./forms/PersonalInfo";
import ShippingAddress from "./forms/ShippingAddress";
import PaymentForm from "./forms/PaymentForm";
import Confirmation from "./messages/Confirmation";

import Context from "store/Context";
import Loader from "components/global/loader/Loader";

import { CheckoutPage } from "./Styles";

const Checkout = () => {
  const CheckoutCtx = useContext(Context);
  const Steps = ["Info", "Address", "Credit"];
  const [ActiveStep, setActiveStep] = useState(CheckoutCtx.ActiveStep);

  const Form = () => {
    if (ActiveStep === 0) {
      return <PersonalInfo />;
    } else if (ActiveStep === 1) {
      return <ShippingAddress />;
    } else {
      return <PaymentForm />;
    }
  };

  useEffect(() => {
    if (!CheckoutCtx.IsCartLoading)
      CheckoutCtx.GenerateToken(CheckoutCtx.Cart.id, "cart");
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [CheckoutCtx.IsCartLoading]);

  useEffect(() => {
    if (CheckoutCtx.TokenId) CheckoutCtx.AllCountries(CheckoutCtx.TokenId.id);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [CheckoutCtx.TokenId]);

  useEffect(() => {
    setActiveStep(CheckoutCtx.ActiveStep);
  }, [CheckoutCtx.ActiveStep]);

  return (
    <CheckoutPage>
      {CheckoutCtx.IsCheckoutLoading ? (
        <Loader
          type="rectiangle"
          width="100%"
          height="100vh"
          position="fixed"
        />
      ) : (
        <Container>
          <Paper>
            <Typography variant="h4" gutterBottom textAlign="center">
              {" "}
              checkout{" "}
            </Typography>
            <Stepper activeStep={ActiveStep}>
              {Steps.map((step) => (
                <Step key={step}>
                  <StepLabel>{step}</StepLabel>
                </Step>
              ))}
            </Stepper>
            {ActiveStep === Steps.length ? <Confirmation /> : <Form />}
          </Paper>
        </Container>
      )}
    </CheckoutPage>
  );
};

export default Checkout;
