import { makeStyles, Box, Theme } from "@material-ui/core";
import React from "react";
import { useParams } from "react-router-dom";
import MyAdminCard from "../Mycard/MyAdminCard";

const useStyles = makeStyles((theme: Theme) => ({
    div: {
        display: "grid",
        gridTemplateColumns: "repeat(3,1fr)",
        gridGap: "2rem",
        [theme.breakpoints.down("sm")]: {
            gridTemplateColumns: "repeat(2,1fr)",
        },
        [theme.breakpoints.down("xs")]: {
            gridTemplateColumns: "repeat(1,1fr)",
        },
    },
}));
const CategoryPosts = () => {
    const classes = useStyles();
    const { category } = useParams<{ category?: string }>();
    console.log(category);
    return (
        <Box className={classes.div}>
            <MyAdminCard />
            <MyAdminCard />
            <MyAdminCard />
            <MyAdminCard />
            <MyAdminCard />
            <MyAdminCard />
            <MyAdminCard />
            <MyAdminCard />
            <MyAdminCard />
            <MyAdminCard />
            <MyAdminCard />
            <MyAdminCard />
            <MyAdminCard />
            <MyAdminCard />
        </Box>
    );
};

export default CategoryPosts;
