import { styled } from '@mui/material/styles';
import { Box } from '@mui/material';

export const PersonalStyled = styled(Box)(({ theme }) => `
	form {
		margin-top: 45px;

		.MuiGrid-item {
			margin-bottom: 15px;
		};

		input {
			background-color: ${theme.palette.colors.secondBg};
			color: ${theme.palette.colors.textColor};
		};

		.MuiInputLabel-root {
			color: ${theme.palette.colors.textColor};
			opacity: .7;
		};

		.Mui-focused {	
			.MuiOutlinedInput-notchedOutline {
				border-color: ${theme.palette.colors.primary};
			};
		};

		a[type='button'], button {
			background-color: ${theme.palette.colors.primary};
			margin-top: 25px;
			display: flex;
			font-weight: bold;

			&:hover {
				background-color: ${theme.palette.colors.primary};
				opacity: .8;
			};
			
			span {
				display: flex;
				align-items: center;
				justify-content: center;
			};

			svg {
				display: inline-block;
			};
		};

		p {
			color: ${theme.palette.colors.textColor}
		}

		button {
			margin-left: auto;
		}
	};
`);


export const AddressStyled = styled(Box)(({ theme }) => `
	form {
		margin-top: 45px;

		.MuiGrid-item {
			margin-bottom: 15px;
		}

		.MuiSelect-icon {
			color: ${theme.palette.colors.textColor};
		};

		.MuiMenu-list {
			background-color: ${theme.palette.colors.secondBg} !important;
		};

		.MuiSelect-select {
			background-color: ${theme.palette.colors.secondBg};
			color: ${theme.palette.colors.textColor};
			margin-bottom: 15px;
		};
		
		label {
			margin-bottom: 5px;
			color: ${theme.palette.colors.textColor};
		};

		fieldset {
			border: none;
		};

		button {
			background-color: ${theme.palette.colors.primary};
			margin-top: 25px;
			font-size: 15px;
			display: flex;
			font-weight: 700;
			
			&:hover {
				background-color: ${theme.palette.colors.primary};
				opacity: .8;
			};

			svg {
				display: inline-block;
				margin: 0 2px;
			};
		};

	};
`);

export const PaymentStyled = styled(Box)(({ theme }) => `
	
	.StripeElement {
			input, .InputElement {
			color: ${theme.palette.colors.textColor};
			
			&.is-invalid {
				color: red;
				font-weight: bold
			};

			svg {
				color: ${theme.palette.colors.primary};
			};
		};		
	};

	button {
		background-color: ${theme.palette.colors.primary};
		font-weight: bold;
		margin-top: 25px;
		font-size: 15px;
		
		&:hover {
			background-color: ${theme.palette.colors.primary};
			opacity: .8;
		};
	};
`);

export const CardElementStyled = styled(Box)(({ theme }) => `
	border: 2px solid ${theme.palette.colors.primary};
	border-radius: 7px;
	padding: 20px 8px;
`);
