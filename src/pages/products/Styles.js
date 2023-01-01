import styled from '@emotion/styled';
import { createTheme } from '@mui/material';

export default createTheme({
  container: {
    padding: '25px 0',
  },
  card: {
    width: '100%',
    height: 'fit-content',
    backgroundColor: '#ccc',
    textTransform: 'capitalize',
    borderRadius: '7px',
    p: {
      lineHeight: '2',
    },
  },
  image: {
    padding: '15px 0',
    height: '45%',
    margin: 'auto',
    position: 'relative',
    borderBottom: '2px solid #000',
    backgroundColor: '#000000b5',
    img: {
      width: '70%',
      margin: 'auto',
      height: '100%',
      boxShadow: '2px 2px 5px 0 rgba(255, 255, 255, .3)',
      cursor: 'pointer',
    }
  },
  active: {
    color: 'red',
  },
});

export const ProductsContainer = styled('div')(() => `
  padding: 25px 0 0;

  @media screen and (max-width: 600px) {
    padding: 0 0 40px;
  }
`);

export const EmptySearchMsg = styled('h4')(() => `
  color: red;
  margin-left: 15px;
  margin-top: 15px;
  text-align: center;
  width: 100%;
`);

export const PaginationWrapper = styled('div')(({ theme }) => `
  margin: 25px 0;

  ul {
    justify-content: center;

    li {

      button {
        background-color: ${theme.palette.colors.primary};
        color: ${theme.palette.colors.textColor === "#fff" ? "#000" : "#fff"};
        opacity: .5;

        &:hover {
         background-color: ${theme.palette.colors.primary} !important;
        }
      };

      button.Mui-selected {
        background-color: ${theme.palette.colors.primary};
        opacity: 1;
      };

      button.MuiPaginationItem-previousNext {
        opacity: 1
      };

      button.Mui-disabled {
        opacity: .38
      };
    };
  }

`);