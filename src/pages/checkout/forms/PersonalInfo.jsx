import { useContext, useState } from "react";

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

  //=== First Name Regx Status & Pattern
  const [firstNameRegxError, setFirstNameRegxError] = useState(false);
  const [lastNameRegxError, setLastNameRegxError] = useState(false);

  const userNameRegx = /^[a-z]+$/i;

  //=== Email Regx Status & Pattern
  const [emailRegxError, setEmailRegxError] = useState(false);
  const emailRegx = /[^\s@]+@[^\s@]+\.[^\s@]+/;

  //=== Zip Code Regx
  const [zipRegxError, setzipRegxError] = useState(false);
  const zipRegx = /[0-9]/i;

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
                  error={firstNameRegxError ? true : false}
                  helperText={`${firstNameRegxError ? "Invalid name, special character and numbers not allowed" : ""}`}
                  onInput={(e) => userNameRegx.test(e.target.value) ? setFirstNameRegxError(false) : setFirstNameRegxError(true)}
                  onBlur={(e) => userNameRegx.test(e.target.value) ? setFirstNameRegxError(false) : setFirstNameRegxError(true)}
                />
              </Grid>
              <Grid item xs={12} md={6}>
                <TextField
                  autoComplete="off"
                  fullWidth
                  {...register("lastname")}
                  label="LastName"
                  required
                  error={lastNameRegxError ? true : false}
                  helperText={`${lastNameRegxError ? "Invalid name, special character and numbers not allowed" : ""}`}
                  onInput={(e) => userNameRegx.test(e.target.value) ? setLastNameRegxError(false) : setLastNameRegxError(true)}
                  onBlur={(e) => userNameRegx.test(e.target.value) ? setLastNameRegxError(false) : setLastNameRegxError(true)}
                />
              </Grid>
              <Grid item xs={12} md={6}>
                <TextField
                  autoComplete="off"
                  fullWidth
                  {...register("email")}
                  label="Email"
                  type="email"
                  required
                  error={emailRegxError ? true : false}
                  helperText={`${emailRegxError ? "Invalid Email" : ""}`}
                  onInput={(e) => emailRegx.test(e.target.value) ? setEmailRegxError(false) : setEmailRegxError(true)}
                  onBlur={(e) => emailRegx.test(e.target.value) ? setEmailRegxError(false) : setEmailRegxError(true)}
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
                  error={zipRegxError ? true : false}
                  helperText={`${zipRegxError ? "Invalid Zip Code accept only numbers" : ""}`}
                  onInput={(e) => zipRegx.test(e.target.value) ? setzipRegxError(false) : setzipRegxError(true)}
                  onBlur={(e) => zipRegx.test(e.target.value) ? setzipRegxError(false) : setzipRegxError(true)}
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
