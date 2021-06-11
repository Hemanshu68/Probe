import { Box } from "@material-ui/core";
import { useField } from "formik";
import React, { ChangeEvent } from "react";

const Thumbnail = ({ setinput, imgpath, name }: any) => {
    const [field] = useField(name);
    const type = File;

    const handleEditorChange = (value: File) => {
        field.onChange({ target: { type, name, value } });
    };

    return (
        <Box
            style={{
                margin: "0 auto",
                height: "160px",
                width: "300px",
                position: "relative",
                backgroundImage: `url(${imgpath ? imgpath : null})`,
                backgroundRepeat: "no-repeat",
                backgroundSize: "cover",
                border: "1px solid black",
            }}
        >
            <input
                style={{
                    margin: "0",
                    position: "absolute",
                    height: "100%",
                    width: "100%",
                    cursor: "pointer",
                    opacity: "0",
                }}
                type='file'
                onChange={(e: ChangeEvent<HTMLInputElement>) => {
                    const file: FileList | null = e.target.files;
                    if (file?.length !== 0) {
                        let reader = new FileReader();
                        if (file) {
                            handleEditorChange(file[0]);
                            reader.readAsDataURL(file[0]);
                        }
                        reader.onload = () => {
                            if (reader.result) {
                                const base64 = reader.result.toString();
                                setinput(base64);
                            }
                        };
                    }
                }}
            />
        </Box>
    );
};

export default Thumbnail;
