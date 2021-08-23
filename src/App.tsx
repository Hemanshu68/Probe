import React from "react";
import Admin from "./admin";

import { Route, Switch } from "react-router-dom";

import User from "./user";

const App = () => {
    return (
        <>
            <Switch>
                <Route path='/admin' component={Admin} />

                <Route path='/' component={User} />
            </Switch>
        </>
    );
};

export default App;
