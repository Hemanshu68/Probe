import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import { StylesProvider } from "@material-ui/core/styles";

//redux will also be wrapper here

ReactDOM.render(
    <React.StrictMode>
        <StylesProvider injectFirst>
            <App />
        </StylesProvider>
    </React.StrictMode>,
    document.getElementById("root")
);
