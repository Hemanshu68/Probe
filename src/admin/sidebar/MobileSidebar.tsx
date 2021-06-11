import React, { useState } from "react";
import { makeStyles, Theme } from "@material-ui/core/styles";
import {
    List,
    ListItem,
    Collapse,
    ListItemText,
    SwipeableDrawer,
} from "@material-ui/core";
import { useHistory, useRouteMatch } from "react-router-dom";
import { ExpandLess, ExpandMore } from "@material-ui/icons";
import { useDispatch, useSelector } from "react-redux";
import { SIDEBAR_OPEN } from "../../redux/types";
import { TOGGLE_SIDEBAR } from "../../redux/actions/sidebaraction";
import { sidebarItems } from "./sidebaritems";

const useStyles = makeStyles((theme: Theme) => ({
    list: {
        width: 250,
    },
    nested: {
        paddingLeft: theme.spacing(6),
    },
}));

const MobileSidebar = () => {
    let { path, url } = useRouteMatch();

    const opened = useSelector((state: SIDEBAR_OPEN) => state);
    const classes = useStyles();
    const history = useHistory();
    const dispatch = useDispatch();
    const [open, setopen] = useState(true);
    const toggleDrawer =
        () => (event: React.KeyboardEvent | React.MouseEvent) => {
            if (
                event &&
                event.type === "keydown" &&
                ((event as React.KeyboardEvent).key === "Tab" ||
                    (event as React.KeyboardEvent).key === "Shift")
            ) {
                return;
            }

            dispatch({ type: TOGGLE_SIDEBAR });
        };
    //here we need to return mouse event as onclick requires mouseevent
    const handleClick = (e: string) => (event: any) => {
        dispatch({ type: TOGGLE_SIDEBAR });
        if (path !== e) {
            history.push(url + e);
        }
    };
    return (
        <SwipeableDrawer
            anchor={"left"}
            open={opened}
            onClose={toggleDrawer()}
            onOpen={toggleDrawer()}
        >
            <div className={classes.list} role='presentation'>
                <List>
                    {sidebarItems.map(({ name, path, children }, idx) => {
                        return !!children ? (
                            <>
                                <ListItem button onClick={() => setopen(!open)}>
                                    <ListItemText primary='Posts by Category' />
                                    {open ? <ExpandLess /> : <ExpandMore />}
                                </ListItem>
                                <Collapse
                                    in={open}
                                    timeout='auto'
                                    unmountOnExit
                                >
                                    <List component='div' disablePadding>
                                        {children.map(
                                            ({ subname, path }, idx) => (
                                                <ListItem
                                                    button
                                                    className={classes.nested}
                                                    onClick={handleClick(path)}
                                                    key={idx}
                                                >
                                                    {subname}
                                                </ListItem>
                                            )
                                        )}
                                    </List>
                                </Collapse>
                            </>
                        ) : (
                            !!path && (
                                <ListItem button onClick={handleClick(path)}>
                                    {name}
                                </ListItem>
                            )
                        );
                    })}
                </List>
            </div>
        </SwipeableDrawer>
    );
};

export default MobileSidebar;
