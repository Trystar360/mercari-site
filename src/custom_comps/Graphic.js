import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Particles from 'react-particles-js';
import Theme from '../theme.js'

const useStyles = makeStyles((theme) => ({
    root: {
        [theme.breakpoints.down('sm')]: {
            height: "640px",
        },
        [theme.breakpoints.down('md')]: {
            height: "730px",
        },
        backgroundImage: "url(https://images.pexels.com/photos/3184325/pexels-photo-3184325.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940)",
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
        zIndex: theme.zIndex.appBar - 3

    }
}));

export default function Graphic(color) {
    const classes = useStyles();
    let particleColor = "#f2f2f2"

    return (
        <div className={classes.root}>
            <div style={{width: "inherit", height: "inherit", backgroundColor: "hsla(0, 0%, 0%, .5)"}}>
                <Particles
                    params={{
                        "particles": {
                            "number": {
                                "value": 100
                            },
                            "size": {
                                "value": 3
                            },
                            "color": {
                                "value": particleColor
                            },
                            line_linked: {
                                "color": {
                                    "value": particleColor
                                }
                            }
                        }
                    }}>

                </Particles>
            </div>
        </div>
    );
};