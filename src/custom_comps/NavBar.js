import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Paper } from "@material-ui/core/";

const useStyles = makeStyles((theme) => ({
    root: {
        width: "100%",
        height: theme.spacing(12),
        position: "absolute",
        top: "0"
    },
    navBarPaper: {
        height: "inherit",
        width: "100%",
        top: "-5px",
        backgroundColor: "hsla(0, 0%, 0%, .65)",
        borderRadius: "0 0 10vw 10vw",
        boxShadow: "none",
        borderColor: "white",
        borderWidth: "1px"
    },
    navContent: {
        width: "%100",
        height: "inherit",
        padding: "0 10vw 0 10vw"
    }
}));

export default function NavBar() {
    const classes = useStyles();

    return (
        <div className={classes.root}>
            <Paper className={classes.navBarPaper}>
                <div className={classes.navContent}>
                    <img width="96" height="96" style={{}} src="https://www.mercariconsultants.com/wp-content/uploads/2019/07/MPA_White.png" alt="Mercari"></img>
                    </div>
                </Paper>   

        </div>
    );
};