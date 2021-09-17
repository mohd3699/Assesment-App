import React from 'react'
import { Button, Typography, TextField,  Grid, makeStyles } from '@material-ui/core'
import { useHistory } from 'react-router-dom';
import { pagePaths } from '../../utils/constent'
import Header from '../../Component/Header';

const useStyles = makeStyles((theme) => ({
    maincontainer: {
        marginTop: "95px",
    },

    typogrid: {
        height:"50px",
        width:"100%",
        marginLeft:"10px",
        [theme.breakpoints.down('xs')]: {
            height: "50px",
            width:"100%",

        },
        [theme.breakpoints.only('sm')]: {
            height: "50px",

        }
    },


   
    box: {
        border: "1px solid ",
        borderRadius: "20px",
        height: "500px",
        width: "90%",
        margin: "130px auto auto auto",
        "& small": {
            width: "100%",
        }
    },
    test: {
        fontFamily:theme.typography.poppinsMedium,
    },
    container:{
        height:"150px",
        width:"100%",
        display:"flex",
        justifyContent:"space-around",

        [theme.breakpoints.only('md')]: {
        display:"flex",
        },
    },
    textBox: {
       
        borderRadius: "5px",
        marginLeft:"10px",
        width:"400px",
        "& .MuiInput-underline:before": {
            borderBottom: "none",
        },

        "& .MuiInput-underline:after": {
            borderBottom: "none",
        },
        "& .MuiInput-underline:hover:not(.Mui-disabled):before": {
            borderBottom: "none",
        },

        [theme.breakpoints.down('sm')]: {
           width:"200px"
            },
        [theme.breakpoints.between('sm','md')]: {
           width:"500px"
            },
        [theme.breakpoints.between('md','lg')]: {
           width:"700px"
            },
    },
    continueButton: {
        border: "1px solid",
        height: "53px",
        background: "#00d1b2",
        fontFamily: theme.typography.poppinsMedium,
        textTransform: 'none',
        "&:hover": {
            background: "#00d1b2",
            textDecoration: "none",
        }
    },
 
}));

function Login() {

    const classes = useStyles();
    const history = useHistory();
    const [email, setEmail] = React.useState("");
    const [error, setError] = React.useState("")
    const handleSubmit = () => {

        if (!email) {
            setError("Please enter your email id.")
        }
        else {
            setError("")
            history.push({
                pathname: pagePaths.firstassesmentselect,
                state: { email }
            });
        }

    }
    return (
        <div >
            <Header />
            <Grid container className={classes.maincontainer}>
                
                <Grid item xs={12} className={classes.typogrid}>
                    <Typography variant='h4' className={classes.test}>
                        Write a test
                    </Typography>
                </Grid>
                <Grid item xs={12} sm={12} md={12} container className={classes.container} alignItems='center'>

                   
                        <TextField variant="outlined" label="Enter your e-mail" className={classes.textBox} placeholder='Enter your email' type='email'
                            value={email} onChange={(e) => setEmail(e.target.value)}></TextField>
                        <small>{error}</small>
                   

                   
                        <Button
                            type='button'
                            className={classes.continueButton}
                            onClick={handleSubmit}
                        >
                            CONTINUE
                        </Button>
                   
                </Grid>
            </Grid>

        </div>

    )
}


export default Login;