import { useEffect, useState } from "react";
import { Container, Grid, Typography } from "@mui/material";

import { styled } from "@mui/material/styles";

const FooterBar = styled("footer")(
  ({ theme, margin }) => `
	background-color: ${theme.palette.colors.mainBg};
	color: ${theme.palette.colors.textColor};
	padding: 15px 0;
	text-transform: capitalize;
	border-top: 1px solid ${theme.palette.colors.textColor};
  
  p {
    font-size: 25px;
  };

	a {
		display: inline-block;
		margin-left: 5px;
		color: ${theme.palette.colors.primary};
    font-weight: bold;
	};

   @media screen and (max-width: 576px) {
  	 margin-bottom: ${margin - 15}px;
     p {
      font-size: 20px;
     }
   };
`
);

const Footer = () => {
  const [Margin, setMargin] = useState(50);

  useEffect(() => {
    setMargin(document.querySelector("nav").clientHeight);
  }, []);

  return (
    <FooterBar margin={Margin}>
      <Container>
        <Grid container>
          <Grid item xs={12} textAlign="center">
            <Typography variant="body2">
              all copyright resarved &copy; 2022 made by
              <a
                href="https://www.linkedin.com/in/ali-sabry"
                target="_blank"
                rel="noreferrer"
              >
                ali sabry
              </a>
            </Typography>
          </Grid>
        </Grid>
      </Container>
    </FooterBar>
  );
};

export default Footer;
