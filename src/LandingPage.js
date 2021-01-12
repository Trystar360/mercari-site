import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import {Typography, Button} from "@material-ui/core/";

const useStyles = makeStyles((theme) => ({
    root: {

    },
    fuckText: {
        color: "#06D6A0",
    },
    button: {
        backgroundColor: "#EF476F"
    }
  }));

export default function LandingPage(){
    const classes = useStyles();

    return(
        <div className={classes.root}>
                 <Typography className={classes.fuckText} >Fuck</Typography> 
                 <Button className={classes.button}>Yeet</Button>

        </div>
    );
};