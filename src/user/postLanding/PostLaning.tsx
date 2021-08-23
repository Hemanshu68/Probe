import {
    Card,
    CardHeader,
    CardMedia,
    CardContent,
    makeStyles,
    Theme,
    Box,
    Typography,
} from "@material-ui/core";
import React from "react";
import test from "../../assets/test.jpg";

const useStyles = makeStyles((theme: Theme) => ({
    Card: {
        width: "50%",
        margin: "2rem auto",
        background: "white",
        padding: "2rem 3rem",
    },
    header: {
        display: "flex",
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "flex-end",
    },
}));
const PostLanding = () => {
    const classes = useStyles();
    return (
        <Card className={classes.Card} elevation={0}>
            <CardHeader
                title={
                    <Box className={classes.header}>
                        <Typography variant='h4'>Title</Typography>
                        <Typography variant='subtitle1'>Date</Typography>
                    </Box>
                }
            />
            <CardMedia
                component='img'
                src={test}
                style={{ maxHeight: "350px" }}
            />
            <Typography
                variant='subtitle2'
                style={{ textAlign: "right", margin: "0.5rem 0" }}
            >
                Author
            </Typography>
            <CardContent>This is the cotent</CardContent>
        </Card>
    );
};

export default PostLanding;
