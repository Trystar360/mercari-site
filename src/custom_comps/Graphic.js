import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Particles from 'react-particles-js';
import theme from '../theme.js'
import clsx from 'clsx'


const useStyles = makeStyles((theme) => ({
    graphicRoot: {
        backgroundImage: "url(https://images.pexels.com/photos/3184325/pexels-photo-3184325.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940)",
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
        //backgroundPosition: "50% 50%"

    },
    graphicHeight: {
        [theme.breakpoints.between("xs", "sm")]: {
            height: "550px"
        },
        [theme.breakpoints.between('sm', "md")]: {
            height: "640px",
        },
        [theme.breakpoints.between("md", "lg")]: {
            height: "730px",
        },
    }
}));

export default function Graphic(color) {
    const classes = useStyles();
    let particleColor = "#f2f2f2"

    return (
        <div className={clsx(classes.graphicRoot, classes.graphicHeight)}>
            <div className={classes.graphicHeight} style={{ width: "inherit", height: "inherit", backgroundColor: "hsla(0, 0%, 0%, .45)" }}>
                <Particles
                    className={classes.graphicHeight}
                    style={{ height: "inherit", width: "inherit" }}
                    params={theme.particles.variant1}>
                </Particles>
            </div>
        </div>
    );
};
