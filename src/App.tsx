import React from "react";
import Admin from "./admin";

import { BrowserRouter, Route } from "react-router-dom";

const App = () => {
    return (
      
            <BrowserRouter>
                <Route path='/admin' component={Admin} />
            </BrowserRouter>
    );
};

export default App;
