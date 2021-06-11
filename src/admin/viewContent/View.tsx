import {
    Box,
    Card,
    CardContent,
    CardHeader,
    CardMedia,
} from "@material-ui/core";
import React from "react";
import test from "../../assets/test.jpg";

const View = () => {
    return (
        <Box style={{ width: "35%", margin: "5rem auto" }}>
            <Card>
                <CardHeader
                    title={
                        <Box
                            style={{
                                display: "flex",
                                flexDirection: "row",
                                justifyContent: "space-between",
                            }}
                        >
                            <h2>Title</h2>
                            <h5>date</h5>
                        </Box>
                    }
                />
                <CardMedia
                    component='img'
                    src={test}
                    style={{ margin: "0.8rem auto", width: "95%" }}
                />
                <CardContent>This is card content</CardContent>
            </Card>
        </Box>
    );
};

export default View;
