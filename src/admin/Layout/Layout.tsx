import { Box } from "@material-ui/core";
import React from "react";
import MainContent from "../mainconetnt/MainContent";
import Sidebar from "../sidebar/sidebar";
import { makeStyles, Theme } from "@material-ui/core/styles";
import MyAppBar from "../appbar/MyAppbar";

const useStyles = makeStyles((theme: Theme) => ({
    box: {
        display: "flex",
        flexDirection: "column",
        marginBottom: "0",
        height: "100vh",
        width: "100vw",
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
}));

const Layout = () => {
    const classes = useStyles();
    return (
        <Box className={classes.box}>
            <MyAppBar />
            <Box className={classes.innerBox}>
                <Sidebar />
                <MainContent />
            </Box>
        </Box>
    );
};

export default Layout;
