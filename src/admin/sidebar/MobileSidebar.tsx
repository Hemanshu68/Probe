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
import { AddBox, ExpandLess, ExpandMore } from "@material-ui/icons";
import { useDispatch, useSelector } from "react-redux";
import { sidebarItems } from "./sidebaritems";
import { Sidebar } from "../../redux/types/Sidebar";
import { State } from "../../redux/reducers";

const useStyles = makeStyles((theme: Theme) => ({
    list: {
        width: 250,
    },
    nested: {
        paddingLeft: theme.spacing(6),
    },
    addicon: {
        color: theme.palette.primary.main,
        verticalAlign: "middle",
        display: "inline-flex",
        marginLeft: "0.3rem",
        fontSize: "1.3rem",
    },
}));

const MobileSidebar = () => {
    let { path, url } = useRouteMatch();

    const opened = useSelector((state: State) => state).sidebar;
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

            dispatch({ type: opened ? Sidebar.HIDE : Sidebar.SHOW });
        };
    //here we need to return mouse event as onclick requires mouseevent
    const handleClick = (e: string) => (event: any) => {
        dispatch({ type: Sidebar.HIDE });
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
                                    {name === "New Post" ? (
                                        <AddBox className={classes.addicon} />
                                    ) : null}
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
