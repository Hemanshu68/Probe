import { Box, useMediaQuery } from "@material-ui/core";
import React from "react";
import Sidebar from "./sidebar/DesktopSidebar";
import { makeStyles, Theme, useTheme } from "@material-ui/core/styles";
import MyAppBar from "./appbar/MyAppbar";
import MobileSidebar from "./sidebar/MobileSidebar";
import { Route, Switch } from "react-router-dom";
import NewPost from "./newPost/newPost";
import CardDektop from "./Mycard/CardDesktop";
import Dashboard from "./dashboard/darshboard";
import CardMobile from "./Mycard/CardMobile";

const useStyles = makeStyles((theme: Theme) => ({
    box: {
        display: "flex",
        flexDirection: "column",
        marginBottom: "0",
        height: "100vh",
        width: "100%",
    },
    innerBox: {
        margin: "3.5rem auto",
        marginBottom: "0",
        display: "flex",
        flexDirection: "row",
        flexGrow: 1,
        width: "85%",
        [theme.breakpoints.down("md")]: {
            width: "100%",
        },
    },
    mainContent: {
        flexGrow: 1,
        margin: "0.5rem",
        padding: "1rem",
    },
}));

const Admin = () => {
    const theme = useTheme();
    const classes = useStyles();
    const media = useMediaQuery(theme.breakpoints.down("md"));

    return (
        <Box className={classes.box}>
            <MyAppBar />

            <Box className={classes.innerBox}>
                {!media ? <Sidebar /> : <MobileSidebar />}
                <Box className={classes.mainContent}>
                    <Switch>
                        <Route exact path='/admin' component={Dashboard} />
                        <Route
                            exact
                            path='/admin/card'
                            component={CardDektop}
                        />
                        <Route
                            exact
                            path='/admin/cardm'
                            component={CardMobile}
                        />
                        <Route
                            exact
                            path='/admin/newpost'
                            component={NewPost}
                        />
                    </Switch>
                </Box>
            </Box>
        </Box>
    );
};

export default Admin;
