import { styled } from '@mui/material/styles';

import { Box } from '@mui/material';


export const SummryStyled = styled(Box)(({ theme }) => `

	ul {
		background-color: ${theme.palette.colors.secondBg} !important;
	    color: ${theme.palette.colors.textColor};
	    padding: 10px 0;
	    margin-bottom: 25px;
		
		li {
			margin: 10px 0;
			border-bottom: 1px solid;
			
			.MuiTypography-subtitle4, p {
				font-weight: bold;
				color: ${theme.palette.colors.primary}
			};

			p {
				margin-top: 10px;
			};
		};
		
		li:last-of-type {
			border-bottom: none;
		};
	};

`);


export const ConfirmationStyled = styled(Box)(({ theme }) => `
	width: 100%;
	height: 100%;
	display: flex;
	flex-wrap: wrap;
	align-items: center;
	justify-content: space-between;
	gap: 20px;
	
	img, .confirm-actions {
	  width: calc(50% - 20px);
	};

	p {
		text-transform: capitalize;
		line-height: 2;
		width: 100%;
		margin: 35px 0;
		font-size: 25px;
		color: ${theme.palette.colors.textColor};
	};
		a {
		display: inline-block;
		background-color: ${theme.palette.colors.primary};
		color: ${theme.palette.colors.textColor === "#fff" ? "#000" : "#fff"};
		text-transform: capitalize;
		width: 250px;
		padding: 9px 0;
		font-size: 20px;
		text-align: center;
		
		&:hover {
			background-color: ${theme.palette.colors.primary};
		};
	};

	@media screen and (max-width: 600px) {
		align-items: stretch;

		img, .confirm-actions {
	  		width: 100%;
		};

		.confirm-actions {
			p {
				font-size: 22px;
			};

			a {
				display: inline-block;
				padding: 7px 30px;
	    		font-size: 20px;
	    		width: fit-content;
			};
		};
	};
`);




