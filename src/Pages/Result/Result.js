import React, { useState, useEffect } from 'react'
import { makeStyles } from '@material-ui/styles'
import Header from '../../Component/Header'
import { Box, Grid, Typography } from '@material-ui/core';



const useStyles = makeStyles({


    header: {
        height: "65px",
        width: "100%",
    },
    resulttext: {
        marginTop: "30px"
    },
    root: {
        // border: "1px solid red",
        width: "100%",
        height: "auto",
        marginLeft: "5px",
        marginTop: "20px",

    },
    firstbox: {
        border: "1px solid blue",
        width: "100%",
        height: "180px",
        display: "flex",
        justifyContent: "space-between"
    },

    scored: {
        border: "1px solid black",
        height: "130px",
        width: "27%",
        margin: "auto auto auto 7px"
    },
    main: {
        display: "flex",
        // flexDirection:"column",
        justifyContent: "space-between",
        width: "100%",
        height: "160px",
        // border:"1px solid",
    },
    arraybox: {
        border: "1px solid",
        height: "120px",
        width: "100%",
        margin: "auto auto auto 7px",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        borderRadius: "5px",
        flexDirection: "column"

    },



});





function Result() {
    const [results, setResults] = useState([]);
    const classes = useStyles();

    useEffect(() => {
        const data = JSON.parse(localStorage.getItem("results"));
        setResults(data ? data : [])
        console.log(data)
    }, [])

    const renderResultItem = (result, i) => {
        return <Grid item key={i} xs={12}>
            <Typography variant='h6'>My first Assesment</Typography>
            <Box className={classes.main}>

                <Box className={classes.arraybox} >
                    <Typography variant="h6">Total Questions</Typography>
                    <Typography variant="body1">{result.totalQuestions}</Typography>
                </Box>

                <Box className={classes.arraybox} >
                    <Typography variant="h6">Score</Typography>
                    <Typography variant="body1">{result.score}</Typography></Box>
                <Box className={classes.arraybox} >
                    <Typography variant="h6">Attempted</Typography>
                    <Typography variant="body1">{result.attempted}</Typography></Box>
                <Box className={classes.arraybox} >
                    <Typography variant="h6">Wrong</Typography>
                    <Typography variant="body1">{result.incorrect}</Typography>
                </Box>
            </Box>
        </Grid>
    }

    return (<>
        <div className={classes.header}>
            <Header />

        </div>
        <Typography variant='h4' className={classes.resulttext}>
            Result
        </Typography>

        <Box className={classes.root}>

            <Grid container>
                {results && results.map((r, i) => renderResultItem(r, i))}
            </Grid>
        </Box>


    </>

    )
}

export default Result;
