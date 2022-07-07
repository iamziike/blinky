import styled from "styled-components";

import GlobalStyles from "../../styles/GlobalStyles";
import StoreProvider from "../../store/StoreProvider";
import ThemingProvider from "../../styles/ThemingProvider";
import Sidebar from "./Sidebar";
import Main from "./Main";

const StyledApp = styled.div`
  width: ${({ theme }) => theme.structure.width};
  height: ${({ theme }) => theme.structure.height};
  color: ${({ theme }) => theme.colors.black};
  background-color: ${({ theme }) => theme.colors.yellow};
  background-image: radial-gradient(
    hsl(0 0% 0% / 12%) 1px,
    hsl(0 0% 0% / 2%) 1px
  );
  background-size: 8px 8px;
`;

const App = () => {
  return (
    <ThemingProvider>
      <StoreProvider>
        <GlobalStyles />
        <StyledApp>
          <Main />
          <Sidebar />
        </StyledApp>
      </StoreProvider>
    </ThemingProvider>
  );
};

export default App;
