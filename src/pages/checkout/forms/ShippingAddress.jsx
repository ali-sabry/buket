import { useContext, useState } from "react";
import {
  Select,
  MenuItem,
  InputLabel,
  Grid,
  Container,
  Button,
} from "@mui/material";

import { AddressStyled } from "./Styles";

import Context from "store/Context";
import ArrowRightAltIcon from "@mui/icons-material/ArrowRightAlt";
import KeyboardBackspaceIcon from "@mui/icons-material/KeyboardBackspace";
import ArrowBtn from "./ArrowBtn";

const ShippingAddress = () => {
  const CheckoutCtx = useContext(Context);

  const countries = Object.entries(CheckoutCtx.ShippingCountries).map(
    ([id, label]) => ({ key: id, name: label })
  );
  const subdivisions = Object.entries(CheckoutCtx.ShippingSubdivisions).map(
    ([id, label]) => ({ key: id, name: label })
  );
  const options = CheckoutCtx.ShippingOptionsData.map((Option) => ({
    id: Option.id,
    label: `${Option.description} - (${Option.price.formatted_with_symbol})`,
  }));

  const FirstShippingCountry = CheckoutCtx.FirstCountry;
  const [FirstShippingSubdivision, setFirstShippingSubdivision] = useState(
    subdivisions[0].name
  );
  const [FirstShippingOption, setFirstShippingOption] = useState(
    options[0].label
  );

  return (
    <AddressStyled>
      <Container>
        <form>
          <Grid container spacing={{ xs: '2', sm: '4' }}>
            <>
              <Grid item xs={12} md={6}>
                <InputLabel> Country </InputLabel>
                <Select
                  fullWidth
                  value={FirstShippingCountry}
                  onChange={(e) =>
                    CheckoutCtx.SelectedCountryCode(
                      e.target.value,
                      countries
                        .filter((country) => country.name === e.target.value)
                        .map((item) => item.key)
                        .join("")
                    )
                  }
                >
                  {countries.map((country) => (
                    <MenuItem key={country.key} value={country.name}>
                      {" "}
                      {country.name}{" "}
                    </MenuItem>
                  ))}
                </Select>
              </Grid>
              <Grid item xs={12} md={6}>
                <InputLabel> City </InputLabel>
                <Select
                  fullWidth
                  value={FirstShippingSubdivision}
                  onChange={(e) => setFirstShippingSubdivision(e.target.value)}
                >
                  {subdivisions.map((division) => (
                    <MenuItem key={division.key} value={division.name}>
                      {" "}
                      {division.name}{" "}
                    </MenuItem>
                  ))}
                </Select>
              </Grid>
              <Grid item xs={12} md={6}>
                <InputLabel> Shipping Options </InputLabel>
                <Select
                  fullWidth
                  value={FirstShippingOption}
                  onChange={(e) => setFirstShippingOption(e.target.value)}
                >
                  {options.map((option) => (
                    <MenuItem key={option.id} value={option.label}>
                      {" "}
                      {option.label}{" "}
                    </MenuItem>
                  ))}
                </Select>
              </Grid>
            </>
            <Grid container spacing={2}>
              <Grid item xs={6} md={6}>
                <ArrowBtn onClick={() => CheckoutCtx.SetActiveStep("prev")} type="left" color={CheckoutCtx.DarkModeStatus && "#000"}>
                  <KeyboardBackspaceIcon /> Back
                </ArrowBtn>
              </Grid>
              <Grid item xs={6} md={6} sx={{ display: 'flex', justifyContent: 'flex-end' }}>
                <Button
                  sx={{
                    display: { md: "block" },
                    width: { md: "50%" },
                    padding: { md: "13px 0" },
                    textAlign: { md: "center" },
                  }}
                  style={{ color: CheckoutCtx.DarkModeStatus && "#000" }}
                  type="submit"
                  variant="contained"
                  onClick={() =>
                    CheckoutCtx.SetSubmitData(
                      {
                        FirstShippingCountry,
                        FirstShippingSubdivision,
                        FirstShippingOption,
                      },
                      "shippingAddress",
                      "next"
                    )
                  }
                >
                  Next <ArrowRightAltIcon />
                </Button>
              </Grid>
            </Grid>
          </Grid>
        </form>
      </Container>
    </AddressStyled>
  );
};

export default ShippingAddress;
