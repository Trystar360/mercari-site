import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import {Typography, Button, Grid, Paper} from "@material-ui/core/";

const shadow = "0 4px 20px 0 rgba(0, 0, 0,.14), 0 7px 10px -5px rgba(0, 0, 0,.4)";

const useStyles = makeStyles((theme) => ({
    root: {
        //position: "absolute",
        //top: "101px",
    },
    appBar: {
      top: "20px",
      left: "20px",
      width: "calc(100% - 80px)",
      position: "fixed",
      borderRadius: "15px",
      padding: "20px",
      backgroundColor: "#fffffc",
      boxShadow: "0 1px 4px 0 rgba(0, 0, 0, 0.14)"

    },
    title:{
        fontSize: "28px",
        fontWeight: "700",
        flexGrow: 1,
        textAlign: "left",
        fontFamily: "'Roboto Mono'"
        
        
    },
    main:{
        //width: "calc(100% - 40px)",
        marginTop: "120px",
        height: "300px",
        borderRadius: "15px",
        margin: "20px",
        boxShadow: "0 1px 4px 0 rgba(0, 0, 0, 0.14)"

    },
    mainImage: {
        backgroundImage: "url('https://images.pexels.com/photos/3182826/pexels-photo-3182826.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940')" ,
        backgroundColor: "#000000",
        backgroundSize: "cover",
        backgroundPosition: "0 -180px",
        height: "33%",
        borderRadius: "15px 15px 0 0"
    },
    mainTitle: {
        fontSize: "28px",
        fontWeight: "500",
        color: "#FFFFFF",
        textAlign: "left",
        padding: "20px"
    },
    layer: {
        backgroundColor: "rgba(17, 138, 178, 0.3)",
        position: "relative",
        width: "100%",
        height: "100%",
        borderRadius: "inherit"
    }
  }));

export default function LandingPage(){
    const classes = useStyles();

    return(
        <Grid container justify="center" className={classes.root} spacing={2}>
            <Grid item xs={12} s={12} md={12}>
                <Paper className={classes.appBar}>
                    <Typography className={classes.title}>Site Name</Typography>
                </Paper>

                <Paper xs={12} s={12} md={12} className={classes.main}>
                    <div className={classes.mainImage}>
                        <div className={classes.layer}>
                            <Typography className={classes.mainTitle}>About Us</Typography>
                        </div>
                        
                    </div>
                </Paper>
            </Grid>
        </Grid>
    );
};