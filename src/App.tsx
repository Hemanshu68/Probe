import React from "react";
import Admin from "./admin";

import { BrowserRouter, Route } from "react-router-dom";
import ViewContent from "./admin/viewContent/ViewContent";

const App = () => {
    return (
        <BrowserRouter>
            <Route path='/admin' component={Admin} />
            <Route path='/modal/:id' component={ViewContent} />
        </BrowserRouter>
    );
};

export default App;
