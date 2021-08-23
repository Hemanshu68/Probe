import { Box, makeStyles, Theme } from "@material-ui/core";
import React, { useEffect } from "react";
import Pagination from "@material-ui/lab/Pagination";
import UserCard from "../Card/UserCard";
import { useHistory, useParams } from "react-router";
import { useDispatch, useSelector } from "react-redux";
import { getPostByCatAndPage } from "../../redux/actions/Posts";
import { State } from "../../redux/reducers";

const useStyles = makeStyles((theme: Theme) => ({
    outerdiv: {
        width: "80%",
        margin: "2rem auto",
    },
    container: {
        marginTop: "2rem",
        display: "grid",
        gridTemplateColumns: "repeat(3,1fr)",
        gridGap: "2rem",
        [theme.breakpoints.down("md")]: {
            gridTemplateColumns: "repeat(2,1fr)",
        },
        [theme.breakpoints.down("xs")]: {
            gridTemplateColumns: "1fr",
        },
    },
    pagination: {
        margin: "2rem 0",
        display: "flex",
        justifyContent: "center",
    },
}));

const CategoryLaning = () => {
    const { category }: any = useParams();
    const classes = useStyles();
    const history = useHistory();
    const maxPost: number = 12;
    const { pageNo }: any = useParams();
    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(getPostByCatAndPage(category, pageNo || 1, maxPost));
    }, [dispatch, category, pageNo, maxPost]);

    const handleChange = (event: React.ChangeEvent<unknown>, value: number) => {
        history.push(`/category/${category}/${value}`);
    };

    const post: any = useSelector((state: State) => state.post);
    const loading: any = useSelector((state: State) => state.loading);

    console.log(post.totalPages);
    if (loading) return <h2>LOading</h2>;
    return (
        <>
            <Box className={classes.outerdiv}>
                <h2>
                    Category:{"  "}
                    {category.charAt(0).toUpperCase() + category.slice(1)}
                </h2>
                <Box className={classes.container}>
                    {post.data &&
                        post.data.map((item: any, idx: number) => {
                            return <UserCard {...item} />;
                        })}
                </Box>
            </Box>

            {post && post.totalPages > 1 && (
                <Pagination
                    count={post.totalPages}
                    //page requires to be number
                    page={pageNo ? Number(pageNo) : 1}
                    size='medium'
                    siblingCount={1}
                    onChange={handleChange}
                    className={classes.pagination}
                />
            )}
        </>
    );
};

export default CategoryLaning;
