import { NavLink } from 'react-router-dom';
import { Card, Box } from '@mui/material';
import { styled } from '@mui/material/styles';

import FavoriteIcon from '@mui/icons-material/Favorite';
import AddShoppingCartIcon from '@mui/icons-material/AddShoppingCart';// import Context from 'store/Context';
import HighlightOffIcon from '@mui/icons-material/HighlightOff';



export const ProductCard = styled(Card)(({ theme }) => `
  background-color: ${theme.palette.colors.secondBg};
 	width: 100%;
  text-transform: capitalize;
  border-radius: 7px;
  padding: 15px;
`);

export const FavoriteBtn = styled(FavoriteIcon)(({ theme }) => `
  position: absolute;
  top: 5px;
  right: 5px;
  cursor: pointer;
  color: ${theme.palette.colors.primary};
`);

export const ImageWrapper = styled(Box)(({ theme }) => `
  position: relative;
  border-radius: 7px;
  overflow: hidden;
  padding: 15px;
  height: 300px;

  img {
    max-width: 70%;
    max-height: 80%;
    margin: auto;
  }
`);


export const ProductName = styled('h4')(({ theme }) => `
  text-align: center;
  display: flex !important;
  align-items: center;
  justify-content: center;
  a {
    text-decoration: none !important;
  }
`);

export const More = styled(NavLink)(({ theme }) => `
  color: ${theme.palette.colors.textColor};
  display: flex;
  align-items: center;
  span {
    color: red;
    display: inherit;
    margin-left: 5px;
    svg {
      font-size: 23px !important;
      animation: poping 1s infinite linear;
      color: ${theme.palette.colors.primary};
    };
  };
  @keyframes poping {
    0% {
      transform: translateX(0);
    }
    50% {
      transform: translateX(-7px);
    }
    100% {
      transform: translateX(7px);
    }
  };
`);


export const CardFooter = styled(Box)(({ theme }) => `
  display: flex;
  flex-wrap: no-wrap;
  align-items: center;
  width: 100%;
  div {
    width: 50%;
    color: ${theme.palette.colors.textColor};
    display: flex;
  };
  div:first-of-type {
    justify-content: flex-start;
  };
  span {
    font-weight: bold;
    font-size: 25px;
    display: block;
    color: ${theme.palette.colors.textColor};
  };
  button {
    width: fit-content;
    color: ${theme.palette.colors.textColor};
  };
`);


export const AddIcon = styled(AddShoppingCartIcon)(({ theme }) => `
  color: ${theme.palette.colors.primary};
`);


export const DeleteIcon = styled(HighlightOffIcon)(({ theme }) => `
  color: ${theme.palette.colors.primary};
`);

export const H1 = styled('h1', {
  shouldForwardProp: prop =>
    prop !== 'color'
})(props => ({
  color: props.color
}))

