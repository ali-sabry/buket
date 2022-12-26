import { styled, alpha } from '@mui/material/styles';
import { InputBase, Box } from '@mui/material';

export const Navbar = styled('nav')(({ theme }) => `
  background-color: ${theme.palette.colors.secondBg};
  position: fixed;
  top: 0;
  left: 0;
  z-index: 1000;
  width: 100%;
  box-shadow: 0 0 20px 0 rgb(0 0 0 / 30%);
  @media screen and (max-width: 600px) {
    position: fixed;
    top: unset;
    bottom: 0;
    left: 0;
  }
`);

export const LogoBrand = styled(Box)(({ theme }) => `
  color: ${theme.palette.colors.primary};
  display: flex;
  align-items: center;
  font-size: 25px;
  font-weight: bold;
  letter-spacing: 3px;
  text-transform: capitalize;
  a {
    outline: none;
  };
  
  svg {
    font-size: inherit;
  };

  @media screen and (max-width: 600px) {
    font-size: 25px;
  };
`);

export const NavbarActions = styled(Box)(({ theme }) => `
  display: flex;
  align-items: center;
  justify-content: space-around;
  
  a, button {
    display: inline-block;
    width: fit-content;
    padding: 0;
    color: ${theme.palette.colors.primary};
    &:hover {
      background-color: transparent;
    };
  };
  
  .BaseBadge-badge {
    width: 25px;
    height: 25px;
    font-size: 18px;
    background: red;
    top: 5px;
  };
  
  svg {
    font-size: 30px !important;
  };
  
  @media screen and (max-width: 600px) {
  
    .BaseBadge-badge {
      width: fit-content;
      height: fit-content;
      font-size: 15px;
      padding: 4px;
      display: inline-block;
      border-radius: 6px;
      right: -8px;
      top: 2px;
    };

    svg {
      font-size: 25px !important;
    };
  };
`);

export const HeaderDetails = styled('div')(({ theme }) => `
  width: 80%;
  margin: 0 auto;
  @media screen and (max-width: 600px) {
    width: 100%;
  }
`);

export const HeaderContent = styled('div')(({ theme }) => `
  width: 100%;
  color: ${theme.palette.colors.textColor};
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  padding: 40px 0px;
  text-transform: capitalize;

  h4 {
    text-align: center;
    font-size: 34px;
    width: 90%;
    margin: auto;
  };

  p {
    line-height: 2;
    width: 80%;
    margin: 25px auto;
    text-align: center;
  };

  .MuiInputBase-input {
    padding: 15px 47px !important;
  }

  @media screen and (max-width: 600px) {
    padding: 0;
    h4 {
      font-weight: bold;
      font-size: 25px;
    }
  }
`);

export const CtegoryList = styled('div')(({ theme }) => `
  background-color: transparent;
  margin: 15px 0 50px;
  button { 
    color: ${theme.palette.colors.textColor} !important;
    text-transform: capitalize !important;
  }
  .MuiTabs-indicator {
    background-color: ${theme.palette.colors.textColor}
  }
  .MuiTabs-flexContainer {
    justify-content: space-between;
  }
`)

export const Search = styled('section')(({ theme }) => ({
  position: 'relative',
  borderRadius: theme.shape.borderRadius,
  backgroundColor: alpha(theme.palette.common.white, 0.15),
  boxShadow: '0 0 15px 0 rgb(0 0 0 / 10%)',
  '&:hover': {
    backgroundColor: alpha(theme.palette.common.white, 0.25),
  },
  width: '80%',
  margin: 'auto',
}));

export const SearchIconWrapper = styled('span')(({ theme }) => `
  padding: ${theme.spacing(0, 1)};
  height: 100%;
  position: absolute;
  left: 15px;
  pointer-events: none;
  display: flex;
  align-items: center;
  justify-content: center;
`);

export const StyledInputBase = styled(InputBase)(({ theme }) => ({
  width: '100%',
  color: 'inherit',
  '& .MuiInputBase-input': {

    '&:focus': {
      backgroundColor: 'rgba(255, 255, 255, 0.25)',
    },
    padding: theme.spacing(1, 1, 1, 0),
    paddingTop: '10px !important',
    paddingBottom: '10px !important',
    textIndent: '10px',

    // vertical padding + font size from searchIcon
    paddingLeft: `calc(1em + ${theme.spacing(4)})`,
    transition: theme.transitions.create('width'),
    width: '100%',
    [theme.breakpoints.up('sm')]: {
      width: '100%',
      '&:focus': {
        width: '100%',
      },
    },
  },
}));

