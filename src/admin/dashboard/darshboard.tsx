import { Box, Paper, makeStyles, Theme, Typography } from "@material-ui/core";
import { AddBox } from "@material-ui/icons";
import React from "react";
import { useHistory } from "react-router";
import MyAdminCard from "../Mycard/MyAdminCard";

const useStyles = makeStyles((theme: Theme) => ({
    container: {
        marginTop: "2rem",
        display: "grid",
        gridTemplateColumns: "repeat(3,1fr)",
        gridGap: "2rem",
        [theme.breakpoints.down("md")]: {
            gridTemplateColumns: "repeat(2,1fr)",
        },
        [theme.breakpoints.down("xs")]: {
            gridTemplateColumns: "1fr",
        },
    },
    newpost: {
        "&:hover": {
            cursor: "pointer",
        },
    },
    paper: {
        padding: "1rem",
        width: "50%",
    },
    addicon: {
        color: theme.palette.primary.main,
        verticalAlign: "middle",
        display: "inline-flex",
        marginLeft: "0.3rem",
        fontSize: "1.3rem",
    },
}));

const Dashboard = () => {
    const classes = useStyles();
    const history = useHistory();
    return (
        <Box>
            <Paper className={classes.paper} elevation={2}>
                <Typography
                    variant='h6'
                    onClick={() => history.push("/admin/newpost")}
                    className={classes.newpost}
                >
                    Add New Post
                    {<AddBox className={classes.addicon} />}
                </Typography>
            </Paper>
            <br />
            <Paper className={classes.paper} elevation={2}>
                <Typography variant='h6'>Recent Posts</Typography>
            </Paper>
            <Box className={classes.container}>
                <MyAdminCard />
                <MyAdminCard />

                <MyAdminCard />
                <MyAdminCard />
            </Box>
        </Box>
    );
};

export default Dashboard;
