import React from "react";
import { makeStyles, Theme, useTheme } from "@material-ui/core/styles";
import {
    AppBar,
    Avatar,
    Box,
    IconButton,
    Toolbar,
    Typography,
    useMediaQuery,
} from "@material-ui/core";
import logo from "../../assets/probe.png";
import { Menu as Ham } from "@material-ui/icons";

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
    mobile: {
        display: "flex",
        alignItems: "center",
    },
}));

const MyAppBar = () => {
    const classes = useStyles();
    const theme = useTheme();
    const media = useMediaQuery(theme.breakpoints.down("md"));
    return (
        <AppBar position='static'>
            <Toolbar className={classes.toolbar}>
                <Box className={classes.mobile}>
                    {media && (
                        <IconButton>
                            <Ham />
                        </IconButton>
                    )}
                    {/* change the logo with media */}
                    <img src={logo} alt='probe' style={{ height: "2.8rem" }} />
                </Box>
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
