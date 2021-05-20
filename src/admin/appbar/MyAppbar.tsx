import React from "react";
import { makeStyles, Theme } from "@material-ui/core/styles";
import {
    AppBar,
    Avatar,
    Box,
    IconButton,
    Toolbar,
    Typography,
} from "@material-ui/core";
import logo from "../../assets/probe.png";

const useStyles = makeStyles((theme: Theme) => ({
    toolbar: {
        display: "flex",
        justifyContent: "space-between",
        margin: "0 auto",
        [theme.breakpoints.up("md")]: {
            width: "80%",
        },
        [theme.breakpoints.down("md")]: {
            width: "95%",
            padding: "0",
        },
    },
    avbtn: {
        display: "flex",
        justifyContent: "space-around",
        alignItems: "center",
    },
}));

const MyAppBar = () => {
    const classes = useStyles();
    return (
        <AppBar position='static'>
            <Toolbar className={classes.toolbar}>
                <img src={logo} alt='probe' style={{ height: "2.8rem" }} />
                <Box className={classes.avbtn}>
                    <Typography variant='h5'>User</Typography>
                    <IconButton>
                        <Avatar alt={"user"} />
                    </IconButton>
                </Box>
            </Toolbar>
        </AppBar>
    );
};

export default MyAppBar;
