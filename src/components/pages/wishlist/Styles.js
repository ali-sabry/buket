import { styled } from '@mui/material/styles';
import { Box } from '@mui/material';


export const WishlistPage = styled(Box)(({ theme })=>`
	min-height: 100vh;

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

export const EmptyWishList = styled(Box)(({ theme })=>`
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
		color: ${theme.palette.colors.textColor};
		text-transform: capitalize;
		opacity: .9;
		width: 250px;
	  padding: 15px 0;
	  font-size: 20px;
	  a {
	  	text-decoration: none !important;
	  }
		&:hover {
		   opacity: 1;
		   background-color: ${theme.palette.colors.primary};
		};
	};
	@media screen and (max-width: 600px) {
		align-items: stretch;
		img, div {
	  		width: 100%;
		};
		div {
			p {
				font-size: 22px;
			};
			button {
				padding: 9px 15px;
	    		font-size: 20px;
	    		width: fit-content;
			};
		};
	};
`);