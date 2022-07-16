import { useContext } from "react";
import { NavLink } from "react-router-dom";

import { TextField, Container, Grid, Button } from "@mui/material";
import { useForm, FormProvider } from "react-hook-form";
import { PersonalStyled } from "./Styles";
import Context from "store/Context";

import ArrowRightAltIcon from "@mui/icons-material/ArrowRightAlt";
import KeyboardBackspaceIcon from "@mui/icons-material/KeyboardBackspace";

const PersonalInfo = () => {
  const CheckoutCtx = useContext(Context);
  const { register, handleSubmit } = useForm();

  return (
    <PersonalStyled>
      <Container>
        <FormProvider>
          <form
            onSubmit={handleSubmit((data) =>
              CheckoutCtx.SetSubmitData(data, "personalInfo", "next")
            )}
          >
            <Grid container spacing={2}>
              <Grid item xs={12} md={6}>
                <TextField
                  autoComplete="off"
                  fullWidth
                  {...register("firstname")}
                  label="FirstName"
                  required
                />
              </Grid>
              <Grid item xs={12} md={6}>
                <TextField
                  autoComplete="off"
                  fullWidth
                  {...register("lastname")}
                  label="LastName"
                  required
                />
              </Grid>
              <Grid item xs={12} md={6}>
                <TextField
                  autoComplete="off"
                  fullWidth
                  {...register("email")}
                  label="Email"
                  required
                />
              </Grid>
              <Grid item xs={12} md={6}>
                <TextField
                  autoComplete="off"
                  fullWidth
                  {...register("street")}
                  label="Street"
                  required
                />
              </Grid>
              <Grid item xs={12} md={6}>
                <TextField
                  autoComplete="off"
                  fullWidth
                  {...register("county city")}
                  label="County City"
                  required
                />
              </Grid>
              <Grid item xs={12} md={6}>
                <TextField
                  autoComplete="off"
                  fullWidth
                  {...register("zip")}
                  label="Zip / Postal Code"
                  required
                />
              </Grid>
              <Grid item xs={6} md={6} textAlign="left">
                <Button
                  sx={{
                    display: { md: "block" },
                    width: { md: "50%" },
                    padding: { md: "13px 0" },
                    textAlign: { md: "center" },
                  }}
                  style={{ color: !CheckoutCtx.DarkModeStatus && "#000" }}
                  type="button"
                  component={NavLink}
                  to="/cart"
                  variant="contained"
                >
                  <span>
                    <KeyboardBackspaceIcon /> Back
                  </span>
                </Button>
              </Grid>
              <Grid item xs={6} md={6} textAlign="right">
                <Button
                  sx={{
                    display: { md: "block" },
                    width: { md: "50%" },
                    padding: { md: "13px 0" },
                    textAlign: { md: "center" },
                  }}
                  style={{ color: !CheckoutCtx.DarkModeStatus && "#000" }}
                  type="submit"
                  variant="contained"
                >
                  Next <ArrowRightAltIcon />
                </Button>
              </Grid>
            </Grid>
          </form>
        </FormProvider>
      </Container>
    </PersonalStyled>
  );
};

export default PersonalInfo;
