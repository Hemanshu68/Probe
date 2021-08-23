import React, { useState } from "react";
import { makeStyles, Theme, useTheme } from "@material-ui/core/styles";
import {
    AppBar,
    Avatar,
    Box,
    IconButton,
    Toolbar,
    Button,
    useMediaQuery,
    MenuItem,
    Menu,
    PopoverOrigin,
} from "@material-ui/core";
import logo from "../../assets/probe.png";
import { Menu as Ham } from "@material-ui/icons";
import { useDispatch } from "react-redux";
import { Sidebar } from "../../redux/types/Sidebar";

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
    avatar: {
        width: theme.spacing(4),
        height: theme.spacing(4),
    },
    mobile: {
        display: "flex",
        alignItems: "center",
    },
}));

const AnchorOrigin: PopoverOrigin = {
    vertical: "bottom",
    horizontal: "right",
};

const TransformOrigin: PopoverOrigin = {
    vertical: "top",
    horizontal: "right",
};

const MyAppBar = () => {
    const [anchorEl, setAnchorEl] = useState(null);
    const openMenu = Boolean(anchorEl);
    const classes = useStyles();
    const theme = useTheme();
    const media = useMediaQuery(theme.breakpoints.down("md"));
    const dispatch = useDispatch();

    return (
        <AppBar position='static' elevation={0}>
            <Toolbar className={classes.toolbar}>
                <Box className={classes.mobile}>
                    {media && (
                        <IconButton
                            onClick={() => dispatch({ type: Sidebar.SHOW })}
                        >
                            <Ham />
                        </IconButton>
                    )}
                    {/* change the logo with media */}
                    <img src={logo} alt='probe' style={{ height: "2.8rem" }} />
                </Box>
                <Box>
                    <Button
                        startIcon={<Avatar className={classes.avatar} />}
                        onClick={(event: any) =>
                            setAnchorEl(event.currentTarget)
                        }
                    >
                        User
                    </Button>
                    <Menu
                        id='menu-appbar'
                        disableScrollLock
                        anchorEl={anchorEl}
                        anchorOrigin={AnchorOrigin}
                        transformOrigin={TransformOrigin}
                        getContentAnchorEl={null}
                        open={openMenu}
                        onClose={() => setAnchorEl(null)}
                    >
                        <MenuItem>Logout</MenuItem>
                    </Menu>
                </Box>
            </Toolbar>
        </AppBar>
    );
};

export default MyAppBar;
