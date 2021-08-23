import {
    Box,
    Card,
    CardContent,
    CardHeader,
    CardMedia,
    makeStyles,
    Theme,
} from "@material-ui/core";
import React from "react";
import test from "../../assets/test.jpg";
import TextTruncate from "react-text-truncate";

const useStyles = makeStyles((theme: Theme) => ({
    media: {
        maxWidth: "100%",
        // paddingTop: "56.25%", // 16:9
    },
    cardhref: {
        "&:visited": {
            color: "blue",
        },
    },
}));

const text =
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis tincidunt lacus feugiat lacus pellentesque, a ullamcorper metus placerat. Etiam feugiat ornare velit. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. In molestie mattis sem et posuere. Donec commodo efficitur urna eget sodales. Integer tincidunt, velit vel aliquam suscipit, nulla urna luctus libero, quis egestas justo nisl vel eros. Nam arcu lacus, molestie non enim sit amet, fermentum commodo velit. Fusce nec velit a leo rhoncus fermentum in pretium ligula. Mauris placerat tortor a fringilla commodo. Nulla nibh ipsum, suscipit eget porta eget, consectetur suscipit purus. Etiam dapibus, tellus eu efficitur ullamcorper, sapien nulla tristique nulla, at vulputate elit felis eget libero. In nisi leo, imperdiet vitae vestibulum id, rhoncus id tortor.";

const CardDektop = () => {
    const classes = useStyles();
    return (
        <Card style={{ maxWidth: "380px", padding: "10px " }}>
            <CardHeader
                title='Placement'
                subheader={
                    <Box
                        style={{
                            display: "flex",
                            justifyContent: "space-between",
                        }}
                    >
                        <span>Subheading</span>
                        <span>Date</span>
                    </Box>
                }
            />
            <CardMedia
                component='img'
                className={classes.media}
                image={test}
                title='test'
            />

            <CardContent>
                <Box
                    style={{
                        display: "flex",
                        justifyContent: "space-between",
                        marginBottom: "1rem",
                    }}
                >
                    <span>edit/delete</span>
                    <span>Hemanshu Chaudhari</span>
                </Box>
                <TextTruncate
                    line={3}
                    text={text}
                    textTruncateChild={
                        ///change this href
                        <a href='save-post' className={classes.cardhref}>
                            Read more
                        </a>
                    }
                />
            </CardContent>
        </Card>
    );
};

export default CardDektop;
