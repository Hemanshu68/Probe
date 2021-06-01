import React, { useState } from "react";
import { makeStyles, Theme } from "@material-ui/core/styles";
import {
    List,
    ListItem,
    Collapse,
    ListItemText,
    SwipeableDrawer,
} from "@material-ui/core";
import { useHistory } from "react-router-dom";
import { ExpandLess, ExpandMore } from "@material-ui/icons";

const useStyles = makeStyles((theme: Theme) => ({
    list: {
        width: 250,
    },
    nested: {
        paddingLeft: theme.spacing(6),
    },
}));

const categoryList: { name: string }[] = [
    { name: "Cultural" },
    { name: "Technical" },
    { name: "Inst" },
];

const MobileSidebar = () => {
    const classes = useStyles();
    const [open, setopen] = useState(true);
    const history = useHistory();

    const toggleDrawer =
        (open: boolean) => (event: React.KeyboardEvent | React.MouseEvent) => {
            if (
                event &&
                event.type === "keydown" &&
                ((event as React.KeyboardEvent).key === "Tab" ||
                    (event as React.KeyboardEvent).key === "Shift")
            ) {
                return;
            }

            setopen(open);
        };
    //here we need to return mouse event as onclick requires mouseevent
    const handleClick = (e: string) => (event: any) => {
        history.push(`/${e.toLowerCase()}`);
    };
    return (
        <SwipeableDrawer
            anchor={"left"}
            open={open}
            onClose={toggleDrawer(false)}
            onOpen={toggleDrawer(true)}
        >
            <div
                className={classes.list}
                role='presentation'
                onClick={toggleDrawer(false)}
                onKeyDown={toggleDrawer(false)}
            >
                <List>
                    <ListItem selected button onClick={() => history.push("/")}>
                        DashBoard
                    </ListItem>
                    <ListItem
                        button
                        onClick={() => history.push("/all-post-this-month")}
                    >
                        All Post This Month
                    </ListItem>
                    <ListItem button onClick={() => setopen(!open)}>
                        <ListItemText primary='Posts by Category' />
                        {open ? <ExpandLess /> : <ExpandMore />}
                    </ListItem>
                    <Collapse in={open} timeout='auto' unmountOnExit>
                        <List component='div' disablePadding>
                            {categoryList.map(({ name }, idx) => (
                                <ListItem
                                    button
                                    className={classes.nested}
                                    onClick={handleClick(name)}
                                    key={idx}
                                >
                                    {name}
                                </ListItem>
                            ))}
                        </List>
                    </Collapse>
                </List>
            </div>
        </SwipeableDrawer>
    );
};

export default MobileSidebar;
