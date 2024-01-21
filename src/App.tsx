import { BrowserRouter } from "react-router-dom";
import { Router } from "./Router";
import { ThemeProvider } from "styled-components";
import { themeDefault } from "./styles/themes/default";
import { GlobalStyles } from "./styles/global";

export function App() {

  return (
    <BrowserRouter>
      <ThemeProvider theme={themeDefault}>
        <GlobalStyles />
        <Router />
      </ThemeProvider>
    </BrowserRouter>
  )
}
