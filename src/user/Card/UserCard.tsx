import React from "react";
import { makeStyles } from "@material-ui/core/styles";

import {
    Box,
    Card,
    CardHeader,
    CardMedia,
    Typography,
} from "@material-ui/core";
import { Post } from "../../redux/types/PostsTypes";

const useStyles = makeStyles(() => ({
    card: {
        maxWidth: "350px",
    },
    header: {
        padding: "0.5rem",
    },
    txt: {
        margin: "0.8rem 0.3rem",
        overflow: "hidden",
        textOverflow: "ellipsis",
        display: "-webkit-box",
        WebkitBoxOrient: "vertical",
        WebkitLineClamp: 3,
        lineHeight: "1rem",
        maxHeight: "3rem",
    },
    da: {
        display: "flex",
        flexDirection: "row",
        justifyContent: "space-between",
        margin: "0.5rem 0.3rem",
    },
}));

interface temp extends Post {
    name: string;
}

const UserCard = ({
    title,
    category,
    thumbnail,
    content,
    date,
    name,
}: temp) => {
    const classes = useStyles();

    return (
        <Card className={classes.card}>
            <CardHeader
                onClick={() => console.log("hell")}
                title={name}
                subheader={category}
                className={classes.header}
            />
            <CardMedia
                component='img'
                src={thumbnail}
                style={{
                    width: "100%",
                }}
            />
            <Box className={classes.da}>
                <Typography variant='subtitle1'>{date}</Typography>
                <Typography variant='subtitle1'>By Probe</Typography>
            </Box>
            <Box className={classes.txt}>{content}</Box>
        </Card>
    );
};

export default UserCard;
