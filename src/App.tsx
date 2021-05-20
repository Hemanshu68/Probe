import React from "react";
import Layout from "./admin/Layout/Layout";
import { StylesProvider } from "@material-ui/core/styles";

const App = () => {
    return (
        <StylesProvider injectFirst>
            <Layout></Layout>
        </StylesProvider>
    );
};

export default App;
