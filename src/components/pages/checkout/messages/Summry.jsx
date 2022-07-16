import { useContext } from "react";

import { ListItem, ListItemText, List, Typography } from "@mui/material";

import Context from "store/Context";
import { SummryStyled } from "./Styles";

const Summry = () => {
  const CheckoutCtx = useContext(Context);

  return (
    <SummryStyled>
      <List disablePadding style={{ backgroundColor: "#f9f9f9" }}>
        <Typography variant="h6" gutterBottom textAlign="center">
          {" "}
          Order Summary{" "}
        </Typography>
        {CheckoutCtx.TokenId.live.line_items.map((product) => (
          <ListItem key={product.id}>
            <ListItemText
              primary={product.name}
              secondary={`Quantity: ${product.quantity}`}
            />
            <Typography variant="subtitle4">
              {product.line_total.formatted_with_symbol}
            </Typography>
          </ListItem>
        ))}
        <ListItem>
          <ListItemText primary="Total:" />
          <Typography variant="subtitle1" style={{ fontWeight: "800" }}>
            {CheckoutCtx.TokenId.live.total.formatted_with_symbol}
          </Typography>
        </ListItem>
      </List>
    </SummryStyled>
  );
};

export default Summry;
