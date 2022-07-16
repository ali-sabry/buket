import { createTheme } from '@mui/material';

// import { createStyles } from '@mui/material';

export default createTheme({
  container: { 
    paddingTop: '25px',
    paddingBottom: '25px',
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