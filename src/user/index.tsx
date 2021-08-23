import React from "react";
import { Switch, Route } from "react-router-dom";
import UserAppBar from "./appbar/appbar";
import CategoryLaning from "./category/CategoryLanding";
import Home from "./Home/Home";
import PostLanding from "./postLanding/PostLaning";

const User = () => {
    return (
        <>
            <UserAppBar />
            <Switch>
                <Route exact path='/' component={Home} />
                <Route
                    exact
                    path='/category/:category/:pageNo?'
                    component={CategoryLaning}
                />
                <Route exact path='/landing' component={PostLanding} />
            </Switch>
        </>
    );
};

export default User;
