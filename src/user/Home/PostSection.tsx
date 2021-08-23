import { Box, makeStyles, Theme } from "@material-ui/core";
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getPost, getPostByCatAndPage } from "../../redux/actions/Posts";
import { State } from "../../redux/reducers";
import { Post } from "../../redux/types/PostsTypes";
import UserCard from "../Card/UserCard";

const useStyles = makeStyles((theme: Theme) => ({
    indiPosts: {
        display: "grid",
        gridTemplateColumns: "repeat(4,1fr)",
        gridGap: "2.5rem",
        [theme.breakpoints.down("md")]: {
            gridTemplateColumns: "repeat(3,1fr)",
        },
        [theme.breakpoints.down("sm")]: {
            gridTemplateColumns: "repeat(2,1fr)",
        },
        [theme.breakpoints.down("xs")]: {
            gridTemplateColumns: "repeat(1,1fr)",
        },
    },
}));

const PostSection = ({ category }: { category: string }) => {
    const classes = useStyles();
    const dispatch = useDispatch();

    useEffect(() => {
        console.log("hell");
        dispatch(getPostByCatAndPage(category, 1, 4));
    }, [dispatch, category]);

    const posts: any = useSelector((state: State) => state.post);

    return (
        <Box>
            <h2>{category}</h2>
            <Box className={classes.indiPosts}>
                {posts.data &&
                    posts.data.map((item: any, idx: number) => {
                        return <UserCard {...item} key={idx} />;
                    })}
            </Box>
        </Box>
    );
};

export default PostSection;
