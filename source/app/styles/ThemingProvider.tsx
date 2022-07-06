import { ThemeProvider as Provider } from "styled-components";

import theme from "./theme";

const ThemingProvider = ({ children }: { children: React.ReactNode }) => {
  return <Provider theme={theme}>{children}</Provider>;
};

export default ThemingProvider;
