import React from "react";
import {
    Button,
    MenuItem,
    MenuList,
    Popper,
    Grow,
    Paper,
    ClickAwayListener,
    useMediaQuery,
} from "@material-ui/core";
import { useHistory } from "react-router";
import { ArrowDropDown, ArrowDropUp } from "@material-ui/icons";

import { makeStyles, Theme, useTheme } from "@material-ui/core/styles";

const useStyles = makeStyles((theme: Theme) => ({
    menu: {
        padding: "0",
        [theme.breakpoints.down("sm")]: {
            position: "relative",
        },
    },
}));

const Dropdown = ({ title, children }: any) => {
    const theme = useTheme();
    const classes = useStyles();
    const [open, setOpen] = React.useState(false);
    const anchorRef = React.useRef<HTMLButtonElement>(null);

    const media = useMediaQuery(theme.breakpoints.down("md"));
    const history = useHistory();
    const handleToggle = () => {
        setOpen((prevOpen) => !prevOpen);
    };

    // return focus to the button when we transitioned from !open -> open
    const prevOpen = React.useRef(open);
    React.useEffect(() => {
        if (prevOpen.current === true && open === false) {
            anchorRef.current!.focus();
        }

        prevOpen.current = open;
    }, [open]);
    return (
        <>
            <Button
                disableRipple
                ref={anchorRef}
                aria-controls={open ? "menu-list-grow" : undefined}
                aria-haspopup='true'
                onClick={handleToggle}
                onMouseOver={() => {
                    !media && setOpen(true);
                }}
                endIcon={open ? <ArrowDropUp /> : <ArrowDropDown />}
            >
                {title}
            </Button>
            <Popper
                open={open}
                anchorEl={!media ? anchorRef.current : null}
                role={undefined}
                transition
                disablePortal
                placement='bottom-start'
                onMouseLeave={handleToggle}
                style={{
                    borderRadius: "5px",
                    display: "block",
                    width: media ? "100%" : undefined,
                }}
            >
                {({ TransitionProps, placement }) => (
                    <Grow
                        {...TransitionProps}
                        style={{
                            transformOrigin: placement,
                        }}
                    >
                        <Paper>
                            <ClickAwayListener
                                onClickAway={() => setOpen(false)}
                            >
                                <MenuList
                                    autoFocusItem={open}
                                    id='menu-list-grow'
                                    className={classes.menu}
                                >
                                    {children.map(
                                        ({ name, path }: any, idx: number) => (
                                            <MenuItem
                                                onClick={() => {
                                                    history.push(path);
                                                    setOpen(false);
                                                }}
                                                key={idx}
                                            >
                                                {name}
                                            </MenuItem>
                                        )
                                    )}
                                </MenuList>
                            </ClickAwayListener>
                        </Paper>
                    </Grow>
                )}
            </Popper>
        </>
    );
};

export default Dropdown;
