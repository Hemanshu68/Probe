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

import test from "../../assets/test.jpg";
import RichEditor from "../Editor/RichEditor";

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
    },
    innergrid: {
        display: "grid",
        gridTemplateColumns: "repeat(1,1fr 1fr)",
        padding: "0.2rem 0.5rem",
        alignItems: "center",
        justifyContent: "space-around",
    },
    imgg: {
        padding: "0.2rem 0.5rem",
        textAlign: "center",
    },
    img: {
        maxHeight: "250px",
        margin: "0 auto",
    },
}));

const NewPost: React.FC = () => {
    const selectValues = ["cultural", "insti", "internship"];
    const classes = useStyles();
    const [imgpath, setimgpath] = useState("");
    return (
        <Box>
            <Typography variant='h4'>Add New Post</Typography>
            <Formik
                initialValues={{
                    fname: "",
                    selectValue: "",
                    fn: null,
                    editor: "",
                }}
                onSubmit={(data) => {
                    console.log(data);
                }}
            >
                {({
                    values,
                    handleBlur,
                    handleChange,
                    handleSubmit,
                    setFieldValue,
                }) => (
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
                                    name='fname'
                                    value={values.fname}
                                    onChange={handleChange}
                                    onBlur={handleBlur}
                                />
                                <Typography
                                    style={{
                                        padding: "1.1rem 0.8rem",
                                    }}
                                >
                                    Category
                                </Typography>
                                <Select
                                    name='selectValue'
                                    labelId='demo-simple-select-filled-label'
                                    id='demo-simple-select-filled'
                                    value={values.selectValue}
                                    onChange={handleChange}
                                    style={{ minWidth: "200px" }}
                                >
                                    {selectValues.map((val, idx) => {
                                        return (
                                            <MenuItem value={val} key={idx}>
                                                {val}
                                            </MenuItem>
                                        );
                                    })}
                                </Select>
                            </Box>
                            <Box className={classes.imgg}>
                                <Typography variant='h5'>
                                    Thumbnail Image
                                </Typography>
                                <Box
                                    style={{
                                        width: "100%",
                                    }}
                                >
                                    <img
                                        src={!imgpath ? test : "default image"}
                                        className={classes.img}
                                        alt={"selected img"}
                                    />
                                </Box>
                            </Box>
                        </Box>
                        <RichEditor />
                        <Box
                            style={{ width: "100%", textAlign: "center" }}
                            flex
                        >
                            <Button style={{ margin: "10px auto" }}>
                                view
                            </Button>
                            <Button
                                type='submit'
                                style={{ margin: "10px auto" }}
                            >
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
