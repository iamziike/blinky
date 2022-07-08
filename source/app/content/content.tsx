import ReactDOM from "react-dom/client";

import App from "./App";
import StoreProvider from "../store/StoreProvider";
import ThemingProvider from "../styles/ThemingProvider";

const app = document.createElement("div");
document.querySelector("body")!.appendChild(app);
app.id = "app";

ReactDOM.createRoot(app).render(
  <ThemingProvider>
    <StoreProvider>
      <App />
    </StoreProvider>
  </ThemingProvider>
);
