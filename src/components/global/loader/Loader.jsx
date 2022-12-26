import { Skeleton, Box, CircularProgress } from "@mui/material";

import { styled } from "@mui/material/styles";

const Loading = styled(Box)(
  ({ theme }) => `
  .MuiSkeleton-root {
    background-color: ${theme.palette.colors.primary};
    margin-bottom: 15px;
    top: 0;
    left: 0;
    display: flex;
    align-items: center;
    justify-content: center;

    .MuiCircularProgress-root {
      visibility: visible;
      color: ${theme.palette.colors.textColor}
    };
  };

  .MuiSkeleton-root::after {
    background: linear-gradient(90deg, transparent, transparent, ${theme.palette.colors.textColor})
  }

`
);

const Loader = ({ type, width, height, position, card }) => {
  return (
    <Loading>
      <Skeleton
        sx={{ position: position }}
        variant={type}
        width={width}
        height={height}
        animation="wave"
      >
        {card ? null : <CircularProgress />}
      </Skeleton>
    </Loading>
  );
};

export default Loader;
