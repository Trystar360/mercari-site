import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Particles from 'react-particles-js';
import Theme from '../theme.js'


const useStyles = makeStyles((theme) => ({
    graphicRoot: {
        [theme.breakpoints.between("xs", "sm")]: {
            height: "550px"
        },
        [theme.breakpoints.between('sm', "md")]: {
            height: "640px",
        },
        [theme.breakpoints.between("md", "lg")]: {
            height: "730px",
        },
        backgroundImage: "url(https://images.pexels.com/photos/3184325/pexels-photo-3184325.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940)",
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
        zIndex: theme.zIndex.appBar - 3,
        backgroundPosition: "50% 50%"

    }
}));

export default function Graphic(color) {
    const classes = useStyles();
    let particleColor = "#f2f2f2"

    return (
        <div className={classes.graphicRoot}>
            <div style={{ width: "inherit", height: "inherit", backgroundColor: "hsla(0, 0%, 0%, .5)" }}>
                <Particles
                style={{height: "inherit", width: "inherits"}}
                    params={{
                        "particles": {
                            "opacity": {
                                "value": .3
                            },
                            "number": {
                                "value": 1,
                                "density": {
                                    "enable": true,
                                    "value_area": 5
                                }
                            },
                            "size": {
                                "value": 3
                            },
                            "color": {
                                "value": particleColor
                            },
                            "line_linked": {
                                "color": particleColor,
                                "opacity": .3

                            }
                        }
                    }}>

                </Particles>
            </div>
        </div>
    );
};
