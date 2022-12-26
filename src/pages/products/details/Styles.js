import { styled } from '@mui/material/styles';
import { Box } from '@mui/material';


export const ProductStyled = styled(Box)(({ theme })=>`
	h5 {
		color: ${theme.palette.colors.textColor};
		font-weight: bold;
	};
	.related_head {
	  width: 85%;
      margin: 0 auto 35px;
      text-transform: capitalize;
      text-align: center;
      position: relative;
      &:after {
      	content: "";
	    position: absolute;
	    left: 050%;
	    transform: translateX(-50%);
	    width: 15%;
	    height: 2px;
	    bottom: -10px;
      	background-color: ${theme.palette.colors.primary}
      }
	}
`);

export const ProductImage = styled(Box)(({ theme })=>`
	height: fit-content;
	margin-bottom: 25px;
	overflow: hidden;
	padding: 35px 0;

	img {
		width: 70%;
		margin: auto;
		display: block;
		border-radius: 7px;
	};
`);

export const ProductContent = styled(Box)(({ theme })=>`
	color: ${theme.palette.colors.textColor};
	padding: 35px 0;

	p {
		line-height: 2;
		font-size: 18px;
	};

	div {
		display: flex;
		justify-content: space-between;
		margin-top: 25px;

		button, h4 {
			width: 50%;
		};

		h4 {
			text-align: left;
		};

		button {
			display: flex;
    		justify-content: flex-end;
			svg {
				font-size: 30px;
				color: ${theme.palette.colors.primary};
			};

			&:hover {
				background-color: transparent;
			};
		};
	};
`);

export const Related = styled(Box)(({ theme })=>`
	overflow: hidden;
    height: 225px;
    background: ${theme.palette.colors.primary};
    border-radius: 7px;
    padding: 15px;
    position: relative;
    display: flex;
    align-items: center;
    justify-content: center;
    
    &::after {
    	content: "";
	    position: absolute;
	    top: 0;
	    left: 0;
	    background-color: rgba(0, 0, 0, .5);
	    width: 100%;
	    height: 100%;
	    z-index: 1;
    };

    button {
    	position: absolute;
    	top: 50%;
	    left: 50%;
	    z-index: 10;
	    transform: translate(-50%, -50%);
	    padding: 7px 40px;
	    font-weight: bold;
	    background-color: ${theme.palette.colors.primary};
	    &:hover {
	    	background: ${theme.palette.colors.primary};
	    	opacity: 8;
	    };
    };

	img {
		max-width: 80%;
	    max-height: 80%;
	    margin: auto;
	};
`);