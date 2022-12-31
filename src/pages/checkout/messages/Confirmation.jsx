import { useContext } from "react";
import { NavLink } from "react-router-dom";

import { Typography, Button, Container } from "@mui/material";
import Payment from "assets/payment.gif";

import Context from "store/Context";
import { ConfirmationStyled } from "./Styles";

const Confirmation = () => {
  const CheckoutCtx = useContext(Context);

  return (
    <ConfirmationStyled>
      <Container>
        <img src={Payment} alt="payement" />
        <div className="confirm-actions">
          <Typography variant="body2">
            thanks{" "}
            {`${CheckoutCtx.AllData.firstname} ${CheckoutCtx.AllData.lastname}`}{" "}
            your purshes is sucsses.
          </Typography>
          <Button
            variant="contained"
            component={NavLink}
            to="/"
            onClick={() => CheckoutCtx.SetActiveStep("reset")}
          >
            home
          </Button>
        </div>
      </Container>
    </ConfirmationStyled>
  );
};

export default Confirmation;
