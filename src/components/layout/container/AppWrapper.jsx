import { useEffect, useState } from "react";
import { Wrapper } from "./Styles";

const AppWrapper = ({ children }) => {
  const [Padding, setPadding] = useState(50);

  useEffect(() => {
    setPadding(document.querySelector("nav").clientHeight);
  }, []);

  return <Wrapper sx={{ paddingTop: {xs: '20px' , sm: `${Padding}px`}, paddingBottom: '30px' }}>{children}</Wrapper>;
};

export default AppWrapper;
