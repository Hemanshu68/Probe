import {
    Box,
    Card,
    CardContent,
    CardHeader,
    IconButton,
    CardMedia,
} from "@material-ui/core";
import { CloseOutlined } from "@material-ui/icons";
import { useFormikContext } from "formik";
import React, { Dispatch, SetStateAction } from "react";

interface ViewProps {
    setClose: Dispatch<SetStateAction<boolean>>;
    imgpath: string;
}
interface FormProps {
    title: string;
    category: string;
    file: File | null;
    content: string;
}
const View = ({ setClose, imgpath }: ViewProps) => {
    const { values } = useFormikContext<FormProps>();
    return (
        <Box
            style={{
                backgroundColor: "white",
                width: "90%",
                margin: "1.5rem auto",
                position: "relative",
                minHeight: "90vh",
                padding: "1rem 0",
            }}
        >
            <IconButton
                style={{ position: "absolute", top: "1rem", right: "1rem" }}
                onClick={() => setClose(false)}
            >
                <CloseOutlined />
            </IconButton>
            <Card
                style={{
                    width: "40%",
                    margin: "2rem auto",
                    background: "transparent",
                }}
                elevation={0}
            >
                <CardHeader title={values.title} subheader={values.category} />
                <CardMedia component='img' src={imgpath} />
                <CardContent>{values.content}</CardContent>
            </Card>
        </Box>
    );
};

export default View;
