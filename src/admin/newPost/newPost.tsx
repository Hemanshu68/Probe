import {
    Box,
    Button,
    makeStyles,
    MenuItem,
    Select,
    TextField,
    Theme,
    Typography,
} from "@material-ui/core";
import React, { useState } from "react";
import { Formik } from "formik";
import RichEditor from "../Editor/RichEditor";
import Thumbnail from "./Thumbnail";
import { CategoryOptions } from "./CategoryOptions";
import { useHistory } from "react-router";

const useStyles = makeStyles((theme: Theme) => ({
    outergrid: {
        width: "90%",
        margin: "0 auto",
        display: "grid",
        gridTemplateColumns: "repeat(1,1fr 1fr)",
        [theme.breakpoints.down("sm")]: {
            display: "flex",
            flexDirection: "column",
        },
        "& * :not(svg)": {
            margin: "1.2rem 0",
        },
    },
    innergrid: {
        display: "grid",
        gridTemplateColumns: "1fr 2fr",
        alignItems: "center",
    },
    imgg: {
        padding: "0.2rem 0.5rem",
        display: "flex",
        flexDirection: "column",
        justifyContent: "flex-end",
    },
    img: {
        maxHeight: "180px",
        margin: "0 auto",
    },
    btn: {
        backgroundColor: "#fab856",
        margin: "10px",
        minWidth: "100px",
    },
}));

interface InitalValues {
    title: string;
    category: string;
    fn: File | null;
    editor: string;
}

const NewPost: React.FC = () => {
    const classes = useStyles();
    const history = useHistory();
    const [imgpath, setimgpath] = useState<string | null>(null);

    const initialValues: InitalValues = {
        title: "",
        category: "",
        fn: null,
        editor: "",
    };
    return (
        <Box>
            <Typography variant='h4'>Add New Post</Typography>
            <Formik
                initialValues={initialValues}
                onSubmit={(data) => {
                    console.log(data);
                }}
            >
                {({ values, handleBlur, handleChange, handleSubmit }) => (
                    <form
                        onSubmit={handleSubmit}
                        style={{ backgroundColor: "#FFFFFF", margin: "15px 0" }}
                    >
                        <Box className={classes.outergrid}>
                            <Box className={classes.innergrid}>
                                <Typography
                                    style={{
                                        padding: "1.1rem 0.8rem",
                                    }}
                                >
                                    Title
                                </Typography>
                                <TextField
                                    variant='outlined'
                                    name='title'
                                    value={values.title}
                                    onChange={handleChange}
                                    onBlur={handleBlur}
                                    style={{ maxWidth: "270px" }}
                                />
                                <Typography
                                    style={{
                                        padding: "1.1rem 0.8rem",
                                    }}
                                >
                                    Category
                                </Typography>
                                <Select
                                    variant='outlined'
                                    name='category'
                                    labelId='category-select'
                                    id='category-selector'
                                    value={values.category}
                                    onChange={handleChange}
                                    style={{ width: "250px" }}
                                >
                                    {CategoryOptions.map((category, idx) => {
                                        return (
                                            <MenuItem
                                                value={category}
                                                key={idx}
                                            >
                                                {category}
                                            </MenuItem>
                                        );
                                    })}
                                </Select>
                            </Box>
                            <Box className={classes.imgg}>
                                <Typography variant='h5' align='center'>
                                    Thumbnail Image
                                </Typography>
                                <Thumbnail
                                    name='fn'
                                    setinput={setimgpath}
                                    imgpath={imgpath}
                                />
                            </Box>
                        </Box>
                        <RichEditor name='editor' />
                        <Box
                            style={{ width: "100%", textAlign: "center" }}
                            flex
                        >
                            <Button
                                className={classes.btn}
                                onClick={() => {
                                    history.push("/modal/jdnjnfjn");
                                }}
                            >
                                view
                            </Button>
                            <Button type='submit' className={classes.btn}>
                                Submit
                            </Button>
                        </Box>
                    </form>
                )}
            </Formik>
        </Box>
    );
};

export default NewPost;
