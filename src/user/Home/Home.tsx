import {
    Box,
    makeStyles,
    Theme,
    Card,
    CardMedia,
    CardContent,
    CardHeader,
} from "@material-ui/core";

import React from "react";
import test from "../../assets/test.jpg";

import { useSelector } from "react-redux";
import { State } from "../../redux/reducers";
import PostSection from "./PostSection";

const useStyles = makeStyles((theme: Theme) => ({
    outerdiv: {
        width: "70%",
        margin: "2rem auto",
        [theme.breakpoints.down("md")]: {
            width: "90%",
        },
    },
    div1: {
        width: "100%",
        display: "flex",
        flexDirection: "row",
        justifyContent: "space-between",
        [theme.breakpoints.down("xs")]: {
            flexDirection: "column",
        },
    },
    Crousal: {
        width: "65%",
        maxHeight: "350px",
        [theme.breakpoints.down("xs")]: {
            width: "100%",
        },
    },
    img: {
        height: "100%",
    },
    News: {
        width: "30%",
        height: "350px",
        display: "flex",
        flexDirection: "column",
        paddingBottom: "0.8rem",
        [theme.breakpoints.down("xs")]: {
            width: "100%",
            marginTop: "1.5rem",
            minHeight: "200px",
        },
    },
    NewsHeader: {
        textAlign: "center",
        backgroundColor: theme.palette.primary.main,
    },
}));

const Home = () => {
    const classes = useStyles();

    const loading = useSelector((state: State) => state.loading);
    if (loading) return <h2>Loading</h2>;

    return (
        <Box className={classes.outerdiv}>
            <Box className={classes.div1}>
                <Card className={classes.Crousal}>
                    <CardMedia
                        component='img'
                        src={test}
                        className={classes.img}
                    />
                </Card>
                <Card className={classes.News}>
                    <CardHeader
                        title='Latest News'
                        className={classes.NewsHeader}
                    />
                    <CardContent
                        style={{
                            overflowX: "hidden",
                            overflowY: "scroll",
                        }}
                    ></CardContent>
                </Card>
            </Box>
            <PostSection category='Insti' />
            <PostSection category='Alumni' />
            <PostSection category='pata nahi' />
            <PostSection category='ok' />
        </Box>
    );
};

export default Home;
