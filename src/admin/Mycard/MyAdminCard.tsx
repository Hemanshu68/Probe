import React from "react";
import { makeStyles } from "@material-ui/core/styles";

import {
    Box,
    Button,
    Card,
    CardContent,
    CardHeader,
    CardMedia,
    Typography,
} from "@material-ui/core";

const useStyles = makeStyles(() => ({
    card: {
        maxWidth: "400px",
        minHeight: "220px",
        display: "flex",
        padding: "0.6rem 0.3rem",
    },
    cover: {
        height: "75%",
    },
    txt: {
        overflow: "hidden",
        textOverflow: "ellipsis",
        display: "-webkit-box",
        WebkitBoxOrient: "vertical",
        WebkitLineClamp: 3,
        lineHeight: "1rem",
        maxHeight: "3rem",
    },
    btndiv: {
        marginTop: "1.5rem",
        "& button": {
            margin: "0 0.5rem",
        },
    },
}));

const text =
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis tincidunt lacus feugiat lacus pellentesque, a ullamcorper metus placerat. Etiam feugiat ornare velit. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. In molestie mattis sem et posuere. Donec commodo efficitur urna eget sodales. Integer tincidunt, velit vel aliquam suscipit, nulla urna luctus libero, quis egestas justo nisl vel eros. Nam arcu lacus, molestie non enim sit amet, fermentum commodo velit. Fusce nec velit a leo rhoncus fermentum in pretium ligula. Mauris placerat tortor a fringilla commodo. Nulla nibh ipsum, suscipit eget porta eget, consectetur suscipit purus. Etiam dapibus, tellus eu efficitur ullamcorper, sapien nulla tristique nulla, at vulputate elit felis eget libero. In nisi leo, imperdiet vitae vestibulum id, rhoncus id tortor.";

const MyAdminCard = () => {
    const classes = useStyles();

    return (
        <Card className={classes.card}>
            <Box style={{ flex: "3" }}>
                <CardHeader
                    title='Placement'
                    subheader='internship'
                    style={{ padding: "0.8rem" }}
                />
                <CardContent
                    style={{ padding: "0.8rem", paddingRight: "0.5rem" }}
                >
                    <Box className={classes.txt}>{text}</Box>
                    <Box className={classes.btndiv}>
                        <Button
                            color='primary'
                            variant='contained'
                            disableElevation
                            disableRipple
                            disableFocusRipple
                        >
                            EDIT
                        </Button>
                        <Button
                            color='primary'
                            variant='contained'
                            disableElevation
                            disableRipple
                            disableFocusRipple
                        >
                            Delete
                        </Button>
                    </Box>
                </CardContent>
            </Box>
            <Box
                style={{
                    flex: "2",
                    alignContent: "space-around",
                }}
                alignContent='space-around'
            >
                <CardMedia
                    component='img'
                    src={
                        "https://res.cloudinary.com/alphatest68/image/upload/v1622648332/test1.jpg"
                    }
                    style={{
                        width: "90%",
                        margin: "1rem auto",
                    }}
                />
                <Typography component='h5' align='center'>
                    12/06/2021
                </Typography>
                <Typography component='h5' align='center'>
                    Jessica Pierce
                </Typography>
            </Box>
        </Card>
    );
};

export default MyAdminCard;
