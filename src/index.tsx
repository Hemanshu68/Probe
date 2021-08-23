import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import { StylesProvider, ThemeProvider } from "@material-ui/core/styles";
import { Provider } from "react-redux";
import { applyMiddleware, compose, createStore } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import { BrowserRouter } from "react-router-dom";
import thunk from "redux-thunk";
import { allReducers } from "./redux/reducers";
import theme from "./theme/theme";

//redux will also be wrapper here
const store = createStore(
    allReducers,
    compose(applyMiddleware(thunk), composeWithDevTools())
);

ReactDOM.render(
    <React.StrictMode>
        <Provider store={store}>
            <ThemeProvider theme={theme}>
                <StylesProvider injectFirst>
                    <BrowserRouter>
                        <App />
                    </BrowserRouter>
                </StylesProvider>
            </ThemeProvider>
        </Provider>
    </React.StrictMode>,
    document.getElementById("root")
);
