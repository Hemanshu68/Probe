import {
    Box,
    Button,
    makeStyles,
    MenuItem,
    Modal,
    Select,
    TextField,
    Theme,
    Typography,
} from "@material-ui/core";
import React, { useEffect, useState } from "react";
import { Formik, Form } from "formik";
import RichEditor from "../Editor/RichEditor";
import Thumbnail from "./Thumbnail";
import { CategoryOptions } from "./CategoryOptions";
import View from "../viewContent/View";

import Axios from "axios";
import { useParams } from "react-router";
import { useDispatch, useSelector } from "react-redux";
import { getPostById } from "../../redux/actions/Posts";
import { State } from "../../redux/reducers";
import * as Yup from "yup";

const useStyles = makeStyles((theme: Theme) => ({
    outerdiv: {
        width: "100%",
    },
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
    boxx: {
        "& *": {
            margin: "0!important",
        },
    },
}));

interface InitalValues {
    title: string;
    category: string;
    file: File | null | string;
    content: string;
}

const PostSchema = Yup.object().shape({
    title: Yup.string().required("Field is Required"),
    category: Yup.string().required("Field is Required"),
    content: Yup.string().required("Content cannot be Empty!!"),
    file: Yup.mixed().required("A file is required"),
});

const cloudName = "alphatest68";
const Cloudinary_URL = `https://api.cloudinary.com/v1_1/${cloudName}/upload`;

const upload_preset = "cdtvqkhy";

const getImageUrl = async (formData: FormData) => {
    const url = await Axios.post(`${Cloudinary_URL}`, formData)
        .then((res) => {
            return res.data.secure_url;
        })
        .catch(function (error) {
            console.log(error);
        });
    return url;
};

const NewPost: React.FC = () => {
    const classes = useStyles();
    const [imgpath, setimgpath] = useState<string>("");
    const [showView, setshowView] = useState(false);
    const [initialValues, setinitialValues] = useState<InitalValues>({
        title: "",
        category: "",
        file: null,
        content: "",
    });
    const { id }: any = useParams();
    const dispatch = useDispatch();

    const newpost = Boolean(typeof id === "undefined");
    const post: any = useSelector((state: State) => state.post);
    const error: any = useSelector((state: State) => state.error);

    useEffect(() => {
        if (!newpost) {
            dispatch(getPostById(id));
        }
    }, [dispatch, newpost, id]);

    useEffect(() => {
        if (!newpost) {
            setinitialValues({
                title: post.title,
                category: post.category,
                file: post.thumbnail,
                content: post.title,
            });
            setimgpath(post.thumbnail);
        }
    }, [dispatch, post, newpost]);

    if (error.error) {
        return <h1>No such page found</h1>;
    }

    return (
        <Box className={classes.outerdiv}>
            <Typography variant='h4'>
                {newpost ? "Add New Post" : "Edit Post"}
            </Typography>
            <Formik
                validationSchema={PostSchema}
                enableReinitialize={true}
                initialValues={initialValues}
                onSubmit={async (data) => {
                    console.log(data);
                    if (data.file) {
                        console.log("entered");
                        const formData = new FormData();
                        formData.append("file", data.file);
                        formData.append("upload_preset", upload_preset);
                        const x = await getImageUrl(formData);
                        console.log(x);
                    }
                }}
            >
                {({
                    values,
                    errors,
                    touched,
                    isSubmitting,
                    setFieldValue,
                    handleBlur,
                    handleChange,
                    handleSubmit,
                }) => {
                    console.log(errors);
                    return (
                        <>
                            <Form
                                onSubmit={handleSubmit}
                                style={{
                                    backgroundColor: "#FFFFFF",
                                    margin: "15px 0",
                                }}
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
                                        <Box className={classes.boxx}>
                                            <TextField
                                                variant='outlined'
                                                name='title'
                                                value={values.title}
                                                onChange={handleChange}
                                                onBlur={handleBlur}
                                                style={{ maxWidth: "270px" }}
                                            />
                                            {errors.title && touched.title ? (
                                                <Typography
                                                    variant='caption'
                                                    color='error'
                                                    component='h6'
                                                >
                                                    {errors.title}
                                                </Typography>
                                            ) : null}
                                        </Box>

                                        <Typography
                                            style={{
                                                padding: "1.1rem 0.8rem",
                                            }}
                                        >
                                            Category
                                        </Typography>
                                        <Box className={classes.boxx}>
                                            <Select
                                                variant='outlined'
                                                name='category'
                                                labelId='category-select'
                                                id='category-selector'
                                                value={values.category}
                                                onChange={handleChange}
                                                style={{ width: "250px" }}
                                            >
                                                {CategoryOptions.map(
                                                    (category, idx) => {
                                                        return (
                                                            <MenuItem
                                                                value={category}
                                                                key={idx}
                                                            >
                                                                {category}
                                                            </MenuItem>
                                                        );
                                                    }
                                                )}
                                            </Select>
                                            {errors.category &&
                                            touched.category ? (
                                                <Typography
                                                    variant='caption'
                                                    color='error'
                                                    component='h6'
                                                >
                                                    {errors.category}
                                                </Typography>
                                            ) : null}
                                        </Box>
                                    </Box>
                                    <Box className={classes.imgg}>
                                        <Typography variant='h5' align='center'>
                                            Thumbnail Image
                                        </Typography>
                                        <Thumbnail
                                            name='file'
                                            setinput={setimgpath}
                                            imgpath={imgpath}
                                        />
                                        {errors.file && touched.file ? (
                                            <Typography
                                                variant='caption'
                                                color='error'
                                                component='h6'
                                                align='center'
                                            >
                                                {errors.file}
                                            </Typography>
                                        ) : null}
                                    </Box>
                                </Box>
                                <RichEditor name='content' />
                                <Box
                                    style={{
                                        width: "100%",
                                        textAlign: "center",
                                    }}
                                    flex
                                >
                                    <Button
                                        className={classes.btn}
                                        onClick={() => setshowView(true)}
                                    >
                                        view
                                    </Button>
                                    <Button
                                        type='submit'
                                        className={classes.btn}
                                    >
                                        Submit
                                    </Button>
                                </Box>
                            </Form>
                            <Modal
                                open={showView}
                                style={{ overflow: "scroll" }}
                            >
                                <View
                                    setClose={setshowView}
                                    imgpath={imgpath}
                                />
                            </Modal>
                        </>
                    );
                }}
            </Formik>
        </Box>
    );
};

export default NewPost;
