import React, { Fragment } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Avatar from '@material-ui/core/Avatar';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import Progress from '../Progress/Progress';
import { deepOrange, deepPurple } from '@material-ui/core/colors';

const avatarStyles = makeStyles((theme) => ({
    root: {
        display: 'flex',
        '& > *': {
            margin: theme.spacing(1),
        },
    },
    orange: {
        color: theme.palette.getContrastText(deepOrange[500]),
        backgroundColor: deepOrange[500],
    },
    purple: {
        color: theme.palette.getContrastText(deepPurple[500]),
        backgroundColor: deepPurple[500],
    },
}));

const style = {
    height: '70px'
}

const avi = {
    margin: '13px'
}

export default function FacilityUpgrades() {
    const classes = avatarStyles();

return (   
    <Fragment> 
    <Grid item xs={12}>
                <Paper style={style} className={classes.paper}>
                    <div className={classes.root}>
                        <Avatar style={avi} className={classes.orange}>H</Avatar>

                        <Progress upgrade={'Hospital Lv.5'}/>
                    </div>

                </Paper>
            </Grid>

            <Grid item xs={12}>
                <Paper style={style} className={classes.paper}>
                    <div className={classes.root}>
                        <Avatar style={avi} className={classes.orange}>L</Avatar>

                        <Progress upgrade={'Lab Lv.1'}/>
                    </div>

                </Paper>
            </Grid>

            <Grid item xs={12}>
                <Paper style={style} className={classes.paper}>
                    <div className={classes.root}>
                        <Avatar style={avi} className={classes.orange}>C</Avatar>

                        <Progress upgrade={'Clinic Lv.3'}/>
                    </div>

                </Paper>
            </Grid>

            <Grid item xs={12}>
                <Paper style={style} className={classes.paper}>
                    <div className={classes.root}>
                        <Avatar style={avi} className={classes.orange}>DT</Avatar>

                        <Progress upgrade={'Drive-Thru Testing Lv.2'}/>
                    </div>

                </Paper>
            </Grid>
            </Fragment>

    )
}