import React, { useState } from "react";
import { makeStyles, Theme } from "@material-ui/core/styles";
import { List, ListItem, Collapse, ListItemText } from "@material-ui/core";
import { useHistory } from "react-router-dom";
import { ExpandLess, ExpandMore } from "@material-ui/icons";

const useStyles = makeStyles((theme: Theme) => ({
    SideDiv: {
        backgroundColor: "red",
        maxWidth: "fit-content",
        minWidth: "15rem",
        padding: "1rem",
        margin: "0.9rem 1.5rem",
        Height: "fit-content",
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

const Sidebar = () => {
    const classes = useStyles();
    const history = useHistory();
    const [open, setopen] = useState(true);

    //here we need to return mouse event as onclick requires mouseevent
    const handleClick = (e: string) => (event: any) => {
        history.push(`/${e.toLowerCase()}`);
    };

    return (
        <div className={classes.SideDiv}>
            <List>
                <ListItem
                    selected
                    button
                    onClick={() => history.push("/dashboard")}
                >
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
    );
};

export default Sidebar;
