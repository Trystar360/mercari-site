import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Card, CardContent, CardAction} from "@material-ui/core/";

const useStyles = makeStyles((theme) => ({
    root: {
        margin: "auto"
    },
    midCard: {
        height: "inherit",
        width: "inherit"
    }
  }));

export default function TitleCard(){
    const classes = useStyles();

    return(
        <div className={classes.root}>
                <Card className={classes.midCard}>
                    <CardContent>

                    </CardContent>
                    <CardAction>

                    </CardAction>
                </Card>
        </div>
    );
};