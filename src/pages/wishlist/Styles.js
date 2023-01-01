import { styled } from '@mui/material/styles';
import { Box } from '@mui/material';


export const WishlistPage = styled(Box)(({ theme }) => `
	min-height: 100vh;
	padding: 25px 0;

	h4.heading {
		width: 80%;
		margin: 0 auto 25px;
		color: ${theme.palette.colors.textColor};
		text-align: center;
		position: relative;
		&::after {
			content: "";
		    position: absolute;
		    bottom: -5px;
		    left: 50%;
		    width: 24%;
		    height: 2px;
			transform: translateX(-50%);
			background-color: ${theme.palette.colors.primary}
		};
	};
`);

export const RemoveAllAction = styled('div')(({ theme }) => `
	margin: 25px auto 0;
	width: 100%;

	@media screen and (max-width: 600px) {
		margin-bottom: 35px;
	};
	
	button {
		background-color: ${theme.palette.colors.primary};
		text-transform: capitalize;
		width: 250px;
		display: block;
		margin: auto;
		padding: 10px 0;
		font-size: 20px;
		color: ${theme.palette.colors.textColor === "#fff" ? "#000" : "#fff"};

		&:hover {
			background-color: ${theme.palette.colors.primary};
		};
	}
`);

export const EmptyWishList = styled(Box)(({ theme }) => `
	width: 100%;
	height: 100%;
	display: flex;
	flex-wrap: wrap;
	align-items: center;
	justify-content: space-between;
	gap: 20px;

	img, div {
	  width: calc(50% - 20px);
	};

	p {
		line-height: 2;
		width: 100%;
		margin: 35px 0;
		font-size: 25px;
		color: ${theme.palette.colors.textColor};
	};

	button {
		background-color: ${theme.palette.colors.primary};
		text-transform: capitalize;
		width: 250px;
		padding: 15px 0;
		font-size: 20px;
		&:hover {
		   background-color: ${theme.palette.colors.primary};
		};

	  a {
	  	text-decoration: none !important;
		color: ${theme.palette.colors.textColor === '#fff' ? '#000' : '#fff'};
	  }
	  
	};

	@media screen and (max-width: 600px) {
		align-items: stretch;
		padding-bottom: 25px;

		img, div {
	  		width: 100%;
		};

		div {

			p {
				font-size: 22px;
			};

			button {
				padding: 5px 15px;
	    		font-size: 20px;
	    		width: fit-content;
			};
		};
	};
`);