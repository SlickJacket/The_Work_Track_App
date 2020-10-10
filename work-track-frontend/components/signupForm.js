import React, { Fragment } from 'react';

import { makeStyles } from '@material-ui/core/styles';
import Box from '@material-ui/core/Box';
import TextField from '@material-ui/core/TextField'

const useStyles = makeStyles((theme) => ({
    container: {
        width: "30vw",
        margin: "auto",
        top: "20px",
        position: "relative"
    },
    form: {
        display: "flex",
        flexDirection: "column"
    }
}))

export default function SignupForm() {
    const classes = useStyles()

    return (
        <Box className={classes.container}>
            <form className={classes.form} noValidate autoComplete="off">
                <TextField label="First Name"/>
                <TextField label="Last Name"/>
                <TextField label="Username"/>
                <TextField label="Email"/>
                <TextField label="Phone Number"/>
                <TextField label="Password"/>
                <TextField label="Password Confirmation"/>
            </form>
        </Box>
    )
}