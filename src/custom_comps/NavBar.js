import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Paper } from "@material-ui/core/";

const useStyles = makeStyles((theme) => ({
    root: {
        width: "100%",
        height: "auto",
        position: "absolute",
        top: "0"
    },
    navBarPaper: {
        height: "inherit",
        width: "100%",
        top: "-5px",
        backgroundColor: "hsla(0, 0%, 0%, .65)",
        //borderRadius: "0 0 10vw 10vw",
        borderRadius: "0",
        boxShadow: "none",
        borderColor: "white",
        borderWidth: "1px"
    },
    navContent: {
        width: "%100",
        height: "auto",
        paddingTop: theme.spacing(4),
        paddingBottom: theme.spacing(4),
        paddingLeft: theme.spacing(4),
        paddingRight: theme.spacing(4)
    },
    logo: {
        display: "block",
        width: "96px",
        height: "auto",
        [theme.breakpoints.between("xs", "sm")]: {
            height: "65px",
            width: "auto"
        },
        [theme.breakpoints.between('sm', "md")]: {
            height: "75px",
            width: "auto"
        },
        [theme.breakpoints.between("md", "lg")]: {
            height: "85px",
            width: "auto"
        },
    }
}));

export default function NavBar() {
    const classes = useStyles();

    return (
        <div className={classes.root}>
            <Paper className={classes.navBarPaper}>
                <div className={classes.navContent}>
                    <img className={classes.logo} src="https://www.mercariconsultants.com/wp-content/uploads/2019/07/MPA_White.png" alt="Mercari"></img>
                    </div>
                </Paper>   

        </div>
    );
};