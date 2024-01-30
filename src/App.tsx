import { BrowserRouter } from "react-router-dom";
import { Router } from "./Router";
import { StyleSheetManager, ThemeProvider } from "styled-components";
import { themeDefault } from "./styles/themes/default";
import { GlobalStyles } from "./styles/global";
import isPropValid from '@emotion/is-prop-valid'

export function App() {

  return (
    <BrowserRouter>
      <StyleSheetManager shouldForwardProp={isPropValid}>
        <ThemeProvider theme={themeDefault}>
          <GlobalStyles />
          <Router />
        </ThemeProvider>
      </StyleSheetManager>
    </BrowserRouter>
  )
}
