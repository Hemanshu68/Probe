import React from "react";
import { makeStyles, Theme } from "@material-ui/core/styles";
import { Box } from "@material-ui/core";
import { useHistory } from "react-router";
import { AddBox } from "@material-ui/icons";

const useStyles = makeStyles((theme: Theme) => ({
    mainContent: {
        flexGrow: 1,
        margin: "0.5rem",
        padding: "2rem",
    },
    newPost: {
        padding: "1rem 1.5rem 1rem 1.5rem",
        cursor: "pointer",
        display: "flex",
        alignItems: "center",
    },
}));

const MainContent = () => {
    const classes = useStyles();
    const history = useHistory();
    const handleClick = () => history.push("/new-post");
    return (
        <Box className={classes.mainContent}>
            <Box
                className={classes.newPost}
                width={"75%"}
                onClick={handleClick}
            >
                Create new Post&nbsp;&nbsp;
                <AddBox />
            </Box>
        </Box>
    );
};

export default MainContent;
