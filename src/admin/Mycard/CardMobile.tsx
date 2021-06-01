import React from "react";
import { makeStyles } from "@material-ui/core/styles";

import test from "../.././assets/test.jpg";
import {
    Box,
    Button,
    Card,
    CardContent,
    CardHeader,
    CardMedia,
    Typography,
} from "@material-ui/core";
import TextTruncate from "react-text-truncate";

const useStyles = makeStyles(() => ({
    cover: {
        height: "75%",
    },
    card: {
        maxWidth: "400px",
        display: "flex",
    },
}));

const text =
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis tincidunt lacus feugiat lacus pellentesque, a ullamcorper metus placerat. Etiam feugiat ornare velit. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. In molestie mattis sem et posuere. Donec commodo efficitur urna eget sodales. Integer tincidunt, velit vel aliquam suscipit, nulla urna luctus libero, quis egestas justo nisl vel eros. Nam arcu lacus, molestie non enim sit amet, fermentum commodo velit. Fusce nec velit a leo rhoncus fermentum in pretium ligula. Mauris placerat tortor a fringilla commodo. Nulla nibh ipsum, suscipit eget porta eget, consectetur suscipit purus. Etiam dapibus, tellus eu efficitur ullamcorper, sapien nulla tristique nulla, at vulputate elit felis eget libero. In nisi leo, imperdiet vitae vestibulum id, rhoncus id tortor.";

const CardMobile = () => {
    const classes = useStyles();

    return (
        <Card className={classes.card}>
            <Box style={{ width: "60%" }}>
                <CardHeader
                    title='Placement'
                    subheader='internship'
                    style={{ padding: "0.8rem" }}
                />
                <CardContent
                    style={{ padding: "0.8rem", paddingRight: "0.5rem" }}
                >
                    <TextTruncate
                        line={3}
                        text={text}
                        textTruncateChild={
                            ///change this href
                            <a href='save-post'>Read more</a>
                        }
                    />
                    <Button>EDIT</Button>
                    <Button>Delete</Button>
                </CardContent>
            </Box>
            <Box
                style={{
                    width: "40%",
                    alignContent: "space-around",
                }}
                alignContent='space-around'
            >
                <CardMedia
                    component='img'
                    src={test}
                    style={{
                        width: "90%",
                        margin: "1rem auto",
                    }}
                />
                <Typography component='h5' align='center'>
                    DATE
                </Typography>
                <Typography component='h5' align='center'>
                    Author
                </Typography>
            </Box>
        </Card>
    );
};

export default CardMobile;
