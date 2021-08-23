import {
    AppBar,
    Toolbar,
    Box,
    Button,
    IconButton,
    useMediaQuery,
} from "@material-ui/core";
import { MoreVert } from "@material-ui/icons";
import React, { useState, useEffect } from "react";
import logo from "../../assets/probe.png";
import { appbarlist } from "./appbarlist";
import { makeStyles, Theme, useTheme } from "@material-ui/core/styles";
import Dropdown from "./Dropdown";
import { useHistory } from "react-router";

const useStyles = makeStyles((theme: Theme) => ({
    toolbar: {
        display: "flex",
        padding: "0.5rem 0",
        flexDirection: "row",
        justifyContent: "space-between",
        width: "95%",
        margin: "0 auto",
        [theme.breakpoints.down("sm")]: {
            justifyContent: "center",
        },
    },
    navtems: {
        display: "flex",
        position: "relative",
        flexDirection: "row",
        justifyContent: "space-evenly",
        alignItems: "center",
        "& button": {
            margin: "3px 0.5rem",
        },
        [theme.breakpoints.down("sm")]: {
            flexDirection: "column",
            width: "70%",
            top: "0",
            alignItems: "flex-start",
        },
    },
    morebtn: {
        display: "none",
        [theme.breakpoints.down("sm")]: {
            display: "block",
            position: "absolute",
            top: "0.6rem",
            right: "0.6rem",
        },
    },
    logo: {
        height: "2.8rem",
    },
    logoBox: {
        "& :hover": {
            cursor: "pointer",
        },
    },
}));

const UserAppBar = () => {
    const classes = useStyles();
    const history = useHistory();
    const theme = useTheme();
    const media = useMediaQuery(theme.breakpoints.down("sm"));
    const [showMenu, setshowMenu] = useState(false);
    const [showLogo, setshowLogo] = useState(true);

    useEffect(() => {
        setshowMenu(!media);
        setshowLogo(true);
    }, [media, setshowMenu, setshowLogo]);
    return (
        <AppBar
            position='static'
            variant='elevation'
            elevation={0}
            color='secondary'
        >
            <Toolbar className={classes.toolbar}>
                {showLogo && (
                    <Box className={classes.logoBox}>
                        <img
                            onClick={() => history.push("/")}
                            src={logo}
                            alt='probe'
                            className={classes.logo}
                        />
                    </Box>
                )}
                {showMenu && (
                    <Box className={classes.navtems}>
                        {appbarlist.map(
                            ({ name, path, children }: any, idx: number) => {
                                return children ? (
                                    <Dropdown title={name} key={idx}>
                                        {children}
                                    </Dropdown>
                                ) : (
                                    <Button
                                        onClick={() => history.push(path)}
                                        key={idx}
                                    >
                                        {name}
                                    </Button>
                                );
                            }
                        )}
                    </Box>
                )}
                <IconButton
                    className={classes.morebtn}
                    onClick={() => {
                        setshowMenu(!showMenu);
                        setshowLogo(!showLogo);
                    }}
                >
                    <MoreVert />
                </IconButton>
            </Toolbar>
        </AppBar>
    );
};

export default UserAppBar;
