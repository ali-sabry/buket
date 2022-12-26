import { useContext } from "react";

import { TextField, Container, Grid } from "@mui/material";
import { useForm, FormProvider } from "react-hook-form";
import { PersonalStyled } from "./Styles";

import ArrowRightAltIcon from "@mui/icons-material/ArrowRightAlt";
import KeyboardBackspaceIcon from "@mui/icons-material/KeyboardBackspace";

import Context from "store/Context";
import ArrowBtn from "./ArrowBtn";

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
              <Grid item xs={6} textAlign="left">
                <ArrowBtn type="left" color={CheckoutCtx.DarkModeStatus && "#000"}>
                  <span>
                    <KeyboardBackspaceIcon /> Back
                  </span>
                </ArrowBtn>
              </Grid>
              <Grid item xs={6} textAlign="right">
                <ArrowBtn type="right" color={CheckoutCtx.DarkModeStatus && "#000"}>
                  <span>
                    Next <ArrowRightAltIcon />
                  </span>
                </ArrowBtn>
              </Grid>
            </Grid>
          </form>
        </FormProvider>
      </Container>
    </PersonalStyled>
  );
};

export default PersonalInfo;
