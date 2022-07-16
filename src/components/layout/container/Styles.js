// import  { useEffect } from 'react'
import { styled } from '@mui/material/styles';

export const Wrapper = styled('section')(({ theme })=>`
	background-color: ${theme.palette.colors.mainBg};
	min-height: 100vh;
  	@media screen and (max-width: 576px) {
  		padding-top: 0;
	};
`);