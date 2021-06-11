import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import { StylesProvider } from "@material-ui/core/styles";
import { Provider } from "react-redux";
import { createStore } from "redux";
import sideBarReducer from "./redux/reducers/sidebarreducer";
import { composeWithDevTools } from "redux-devtools-extension";

//redux will also be wrapper here
const store = createStore(sideBarReducer, composeWithDevTools());

ReactDOM.render(
    <React.StrictMode>
        <Provider store={store}>
            <StylesProvider injectFirst>
                <App />
            </StylesProvider>
        </Provider>
    </React.StrictMode>,
    document.getElementById("root")
);
