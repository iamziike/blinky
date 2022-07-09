import styled from "styled-components";

import GlobalStyles from "../../styles/GlobalStyles";
import StoreProvider from "../../store/StoreProvider";
import ThemingProvider from "../../styles/ThemingProvider";
import BgSrc from "../../../assets/home-bg.gif";
import MenuBar from "./MenuBar";

const StyledApp = styled.div`
  width: ${({ theme }) => theme.structure.width};
  height: ${({ theme }) => theme.structure.height};
  color: ${({ theme }) => theme.colors.black};
  background-image: radial-gradient(
      hsl(0 0% 0% / 12%) 1px,
      hsl(0 0% 0% / 2%) 1px
    ),
    url(${BgSrc});
  background-size: 8px 8px, cover;
  background-repeat: repeat, no-repeat;
`;

const App = () => {
  return (
    <ThemingProvider>
      <StoreProvider>
        <GlobalStyles />
        <StyledApp>
          <MenuBar />
        </StyledApp>
      </StoreProvider>
    </ThemingProvider>
  );
};

export default App;
