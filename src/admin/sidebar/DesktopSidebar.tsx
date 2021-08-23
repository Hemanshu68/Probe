import React, { useState } from "react";
import { makeStyles, Theme } from "@material-ui/core/styles";
import { List, ListItem, Collapse, ListItemText } from "@material-ui/core";
import { useHistory, useRouteMatch } from "react-router-dom";
import { AddBox, ExpandLess, ExpandMore } from "@material-ui/icons";
import { sidebarItems } from "./sidebaritems";

const useStyles = makeStyles((theme: Theme) => ({
    SideDiv: {
        maxWidth: "fit-content",
        minWidth: "15rem",
        padding: "1rem",
        margin: "0.9rem 1.5rem",
        Height: "fit-content",
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

const DesktopSidebar = () => {
    let { url } = useRouteMatch();
    const classes = useStyles();
    const history = useHistory();
    const [open, setopen] = useState(true);

    //here we need to return mouse event as onclick requires mouseevent
    const handleClick = (e: string) => (event: any) => {
        history.push(url + e);
    };

    return (
        <div className={classes.SideDiv}>
            <List>
                {sidebarItems.map(({ name, path, children }, idx) => {
                    return !!children ? (
                        <>
                            <ListItem
                                button
                                onClick={() => setopen(!open)}
                                key={idx}
                            >
                                <ListItemText primary='Posts by Category' />
                                {open ? <ExpandLess /> : <ExpandMore />}
                            </ListItem>
                            <Collapse in={open} timeout='auto' unmountOnExit>
                                <List component='div' disablePadding>
                                    {children.map(({ subname, path }, idx) => (
                                        <ListItem
                                            button
                                            className={classes.nested}
                                            onClick={handleClick(path)}
                                            key={idx}
                                        >
                                            {subname}
                                        </ListItem>
                                    ))}
                                </List>
                            </Collapse>
                        </>
                    ) : (
                        !!path && (
                            <ListItem
                                button
                                onClick={handleClick(path)}
                                key={idx}
                            >
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
    );
};

export default DesktopSidebar;
