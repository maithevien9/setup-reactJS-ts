import React from "react";
import { HashRouter as Router, Route, Switch } from "react-router-dom";
import { PersistGate } from "redux-persist/integration/react";
import { Provider } from "react-redux";
import { ThemeProvider } from "styled-components";

import Home from "./pages/Home/index";
import Organization from "./pages/Organizations/index";
import Header from "./components/Header/index";
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
          <Router>
            <div>
              <Header />
              <Switch>
                <Route exact path="/" component={Home} />
                <Route exact path="/organizations" component={Organization} />
              </Switch>
            </div>
          </Router>
        </ThemeProvider>
      </PersistGate>
    </Provider>
  );
};

export default App;
