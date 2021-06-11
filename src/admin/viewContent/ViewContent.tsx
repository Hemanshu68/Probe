import { Dialog } from "@material-ui/core";
import React, { useState } from "react";
import View from "./View";

const ViewContent = () => {
    const [open, setopen] = useState(true);
    return (
        <Dialog open={open} onClose={() => setopen(!open)}>
            <View />
        </Dialog>
    );
};

export default ViewContent;
