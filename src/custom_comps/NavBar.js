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
        width: `calc(100% - ${theme.spacing(8)})`,
        top: "-5px",
        backgroundColor: "hsla(0, 0%, 0%, .45)",
        //borderRadius: "0 0 10vw 10vw",
        borderRadius: "0 0 3vw 3vw",
        marginLeft: theme.spacing(4),
        marginRight: theme.spacing(4)
    },
    navContent: {
        width: "%100",
        height: "auto",
        paddingTop: theme.spacing(3),
        paddingBottom: theme.spacing(3),
        paddingLeft: theme.spacing(3),
        paddingRight: theme.spacing(3)
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