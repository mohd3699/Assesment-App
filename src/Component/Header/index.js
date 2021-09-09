import React from 'react'
import { AppBar, Avatar, Box, Button, Grid, Toolbar, Typography } from '@material-ui/core'
import { makeStyles } from '@material-ui/styles';
import theme from '../../Theme'


const useStyles = makeStyles({

    appBar: {
        background: "#5cf3ff",
        color: "black",
        height: "64px",
        width: "100%",

    },
    
    toolbar: {
        display: "flex",
        justifyContent: "space-between",
        width: "100%",
    },
    login: {
        fontWeight: "bold",
        fontFamily: theme.typography.poppinsMedium,
        textTransform: 'none',
        background: "red",
    },

    mail: {
        marginTop:"8px",
        alignItems:"center",
    },

})


function Header(props) {

    const classes = useStyles();
    return (
        <div>
            <Grid container>

                <AppBar position="fixed" className={classes.appBar} >
                    <Toolbar>
                        <Grid item className={classes.logo}>
                            <Avatar variant='square' src="logo.svg" >
                               
                            </Avatar>
                        </Grid>
                        <Grid item className={classes.toolbar}>
                            <Box>
                                <Button href='/login' style={{ textTransform: 'none' }} className={classes.assesment}>
                                    <Typography variant="h5" className={classes.title}>
                                        Assesment App
                                    </Typography>
                                </Button>
                            </Box>



                            <Box className={classes.mail}>
                                
                                <Typography variant="body1" >
                                    {props.email}
                                </Typography>

                            </Box>
                        </Grid>

                    </Toolbar>
                </AppBar>
            </Grid>
        </div>
    )
}
export default Header;