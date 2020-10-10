import React, { Fragment } from 'react';

import { makeStyles } from '@material-ui/core/styles';
import SignupForm from '../components/signupForm'

const useStyles = makeStyles((theme) => ({
    form: {
        margin: "auto",
        width: "50%"
    }
}))

export default function Signup() {
    const classes = useStyles();

    return(
    <SignupForm className={classes.form}/>
    )
}