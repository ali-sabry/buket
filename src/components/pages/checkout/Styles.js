import { styled } from '@mui/material/styles';


export const CheckoutPage = styled('section')(({ theme })=>`
	
	h4 {
		color: ${theme.palette.colors.textColor};
		padding: 15px 0;
	}; 

	.MuiPaper-elevation {
		background-color: transparent;
		box-shadow: none;
	};

	.MuiStepper-horizontal {
		margin: 25px 0;
		
		svg {
			color: ${theme.palette.colors.primary};
			opacity: .5;
			 font-size: 25px;
			&.Mui-active {
				opacity: 1;
			};
		};

		.Mui-completed {
			opacity: 1;
		};

		.MuiStepLabel-label {
			color: ${theme.palette.colors.textColor};
			font-size: 15px;
		};

		.MuiStepConnector-line {
			border-top-width: 2px;
		};
	};

`);