import React from "react";
import { PersistGate } from "redux-persist/integration/react";
import { Provider } from "react-redux";
import { ThemeProvider } from "styled-components";

import Routes from "./routes/index";
import "./App.less";
import { defaultTheme } from "./theme/index";

import { persistor, store } from "./store/index";
import GlobalStyle from "./theme/globalStyle";

const App: React.FunctionComponent = () => {
  return (
    <Provider store={store}>
      <PersistGate persistor={persistor} loading={null}>
        <ThemeProvider theme={defaultTheme}>
          <GlobalStyle />
          <Routes />
        </ThemeProvider>
      </PersistGate>
    </Provider>
  );
};

export default App;
