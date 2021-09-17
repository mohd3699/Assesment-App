import { Box, Button, Grid, Typography, Checkbox } from '@material-ui/core';
import React, { useEffect, useState } from 'react'
import { makeStyles } from '@material-ui/styles';
import Header from '../../Component/Header'
import clsx from 'clsx';
import Timer from "../../Component/Timer"
import { useHistory } from 'react-router-dom';


const useStyles = makeStyles((theme) => ({
    root: {
        height: 'auto',
        width: "90%",
        margin: '70px auto auto auto',
        display: "flex",
        justifyContent: "flex-start",
        [theme.breakpoints.down('lg')]: {
            width: "100%",

        }
    },
    header:{
        height:"65px",
        width:"100%",
    },
    timer:{
        height:"20px",
        width:"80px",
        border:"1px solid red",
        display:"flex",
        justifyContent:"center",
        alignItems:"center",
        marginLeft:"70%",
        fontWeight:"bold",
        borderRadius:"10px",
        marginTop:"5px"

    },
    root1: {
        [theme.breakpoints.down('xs')]: {
            margin: "5px"
        },

    },

    btn: {
        height: "auto",
        justifyContent: "space-Between",
        display: "flex",

        [theme.breakpoints.down('xs')]: {
            justifyContent: "space-around",
            display: "flex",
            flexDirection: "row"
        },


    },
    button: {
        minHeight: "40px",
        minWidth: "40px ",
        borderRadius: "50%",
        textAlign: "center",
        color: "black",



    },
    activebtn: {
        background: "#00d1b2",
        "&:hover": {
            background: "#00d1b2",
            color: "white",
            border: "1px solid"
        },
    },
    question: {
        marginTop: "50px",
        height: "300px",
        width: "90%",
        [theme.breakpoints.only('xs')]: {
            margin: "40px auto auto auto",
        },
        [theme.breakpoints.only('sm')]: {
            margin: "40px auto auto 40px",
        },
        [theme.breakpoints.only('md')]: {
            margin: "40px auto auto 60px",
        },
        [theme.breakpoints.only('lg')]: {
            margin: "40px auto auto 70px",
        },
        [theme.breakpoints.only('xl')]: {
            margin: "40px auto auto 130px",
        },
    },

    text: {
        marginTop: "10px",
        fontSize: "20px",
    },
    checkbox: {
        height: "200px",
        width: "98%",
        marginTop: "20px",
        flexDirection: "column",
        display: "flex",
        justifyContent: "flex-start"


    },

    actionBtn: {
        display: "flex",
        justifyContent: "space-between",
        [theme.breakpoints.down('xs')]: {
            margin: "5px 5px auto 5px",

        },
        [theme.breakpoints.only('sm')]: {
            margin: "10px auto auto 40px",

        },
        [theme.breakpoints.only('md')]: {
            margin: "20px auto auto 60px",


        },
        [theme.breakpoints.only('lg')]: {
            margin: "20px auto auto 70px",

        },
        [theme.breakpoints.only('xl')]: {
            margin: "20px auto auto 200px",

        },

    },
    pregrid: {
        maxWidth: "10px"

    },

    nxt: {
        background: "#00d1b2",
        width: "80px",
        marginLeft: "260px",
        textAlign: "center",
        borderRadius: "10px",
        color: "white",
        "&:hover": {
            background: "#00d1b2",
            color: "white"
        },
        [theme.breakpoints.only('lg')]: {
            margin: "auto auto auto 590px",


        },
        [theme.breakpoints.only('xl')]: {
            margin: "auto auto auto 990px",

        },
        [theme.breakpoints.between('xs', 'sm')]: {

        },
        [theme.breakpoints.between('sm', 'md')]: {
            margin: "8px auto auto 180px",


        },

    },


    prev: {


        background: "#f14668",
        width: "80px",
        textAlign: "center",
        borderRadius: "10px",
        marginTop: "5px",
        color: "#ffffff",
        "&:hover": {
            background: "#f14668",
            color: "white"
        }
    },
    submit: {
        background: "#f14668",
        width: "80px",
        textAlign: "center",
        borderRadius: "10px",
        marginTop: "7px",
        marginLeft: "150px",
        color: "#ffffff",
        [theme.breakpoints.only('xs')]: {
            marginTop: "50px"

        },
        "&:hover": {
            background: "#f14668",
            color: "white"
        }
    },

    startbtn: {
        background: "#f14668",
        width: "80px",
        textAlign: "center",
        borderRadius: "10px",
        marginLeft: "440px",
        color: "#ffffff",
        [theme.breakpoints.only('xs')]: {
            marginLeft: "150px"
        },
        "&:hover": {
            background: "#f14668",
            color: "white"
        }

    },

}))

function FirstAssesment() {
    
  
   

    const classes = useStyles();
    const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
    const [questions, setQuestions] = useState([]);
    const [currentQuestion, setCurrentQuestion] = useState();
    const [startTest, setStartTest] = useState(false);
    const history = useHistory();
    





    const adminQuestions = [
        {
            "id": "jhsvdcgadsvka",
            "question": "Who is the First Prime Minister of Rampur?",
            "isQuestionBoolean": false,
            "choices":
                [{
                    "id": "aefae",
                    "option": "Dr. Irfan Ansari",
                    "isTrue": false
                },
                {
                    "id": "qsnvgd ",
                    "option": "Dr. Mukesh Kumar",
                    "isTrue": true
                },
                {
                    "id": "eregew",
                    "option": "Dr. Jahangir Ansari",
                    "isTrue": false
                },
                {
                    "id": "sdfasdfq",
                    "option": "Dr. Farmullah Ansari",
                    "isTrue": false
                }]
        },
        {
            "id": "jhsvdcgadsvka",
            "question": "Who is the son in law of CITS Principal?",
            "isQuestionBoolean": true,
            "choices":
                [{
                    "id": "aefae",
                    "option": "Javed Ansari",
                    "isTrue": false
                },
                {
                    "id": "qsnvgd ",
                    "option": "A.S Nasim Ahmed",
                    "isTrue": true
                },
                {
                    "id": "eregew",
                    "option": "Md Shabbu Alam",
                    "isTrue": true
                },
                {
                    "id": "sdfasdfq",
                    "option": "Altaf Ahmad",
                    "isTrue": false
                }]
        },
        {
            "id": "jhsvdcgadsvka",
            "question": "Deewana 2.O first Award goes to?",
            "isQuestionBoolean": true,
            "choices":
                [{
                    "id": "aefae",
                    "option": "Anwar Ansari",
                    "isTrue": false
                },
                {
                    "id": "qsnvgd ",
                    "option": "Asgar Ansari",
                    "isTrue": true
                },
                {
                    "id": "eregew",
                    "option": "Dr. Jahangir Ansari",
                    "isTrue": false
                },
                {
                    "id": "sdfasdfq",
                    "option": "Dr. Farmullah Ansari",
                    "isTrue": false
                }]
        }
    ]




    const renderQuestion = () => {
        return currentQuestion && <Grid className={classes.question} xs={12} sm={8} md={10} lg={10} xl={10}>
            <Box >

                <Typography className={classes.text} >
                    {currentQuestion.question}
                </Typography>
                {renderCheckbox(currentQuestion.choices)}
            </Box>
        </Grid>
    }
    const renderCheckbox = (choices) => {
        return <Grid item xs={12}>
            <Box className={classes.checkbox}>
                {startTest && choices && choices.map((obj, ci) => {
                    return <label type='CheckBox' ><Checkbox checked={obj.isTrue} onChange={() => handleCheckbox(currentQuestionIndex, ci)} />
                        {obj.option}
                    </label>
                })}
            </Box>
        </Grid>
    }

    const handleCheckbox = (qIndex, cIndex) => {
        questions.forEach((q, i) => {
            if (i === qIndex) {
                q.choices.forEach((c, ci) => {
                    if (ci === cIndex) {
                        c.isTrue = !c.isTrue
                    }
                });
            }
        });
        setCurrentQuestion((old) => ({ ...old, ...questions[qIndex] }));
    }

    useEffect(() => {
        const userQuestions = [
            {
                "id": "jhsvdcgadsvka",
                "question": "Who is the First Prime Minister of Rampur?",
                "isQuestionBoolean": false,
                "choices":
                    [{
                        "id": "aefae",
                        "option": "Dr. Irfan Ansari",
                        "isTrue": false
                    },
                    {
                        "id": "qsnvgd ",
                        "option": "Dr. Mukesh Kumar",
                        "isTrue": false
                    },
                    {
                        "id": "eregew",
                        "option": "Dr. Jahangir Ansari",
                        "isTrue": false
                    },
                    {
                        "id": "sdfasdfq",
                        "option": "Dr. Farmullah Ansari",
                        "isTrue": false
                    }]
            },
            {
                "id": "jhsvdcgadsvka",
                "question": "Who is the son in law of CITS Principal?",
                "isQuestionBoolean": true,
                "choices":
                    [{
                        "id": "aefae",
                        "option": "Javed Ansari",
                        "isTrue": false
                    },
                    {
                        "id": "qsnvgd ",
                        "option": "A.S Nasim Ahmed",
                        "isTrue": false
                    },
                    {
                        "id": "eregew",
                        "option": "Md Shabbu Alam",
                        "isTrue": false
                    },
                    {
                        "id": "sdfasdfq",
                        "option": "Altaf Ahmad",
                        "isTrue": false
                    }]
            },
            {
                "id": "jhsvdcgadsvka",
                "question": "Deewana 2.O first Award goes to?",
                "isQuestionBoolean": true,
                "choices":
                    [{
                        "id": "aefae",
                        "option": "Anwar Ansari",
                        "isTrue": false
                    },
                    {
                        "id": "qsnvgd ",
                        "option": "Asgar Ansari",
                        "isTrue": false
                    },
                    {
                        "id": "eregew",
                        "option": "Dr. Jahangir Ansari",
                        "isTrue": false
                    },
                    {
                        "id": "sdfasdfq",
                        "option": "Dr. Farmullah Ansari",
                        "isTrue": false
                    }]
            }
        ]

        if (questions.length === 0) {
            setQuestions(userQuestions)
        }
        if (!currentQuestion)
            setCurrentQuestion(() => questions[0]);
    }, [questions[0]]);

    const changeQuestion = (i, direction) => {
        if (i) {
            setCurrentQuestion(questions[i]);
            setCurrentQuestionIndex(i)
        }
        else if (direction === "next") {

            setCurrentQuestion(questions[currentQuestionIndex + 1]);
            setCurrentQuestionIndex(currentQuestionIndex + 1)
        }
        else {
            setCurrentQuestion(questions[currentQuestionIndex - 1]);
            setCurrentQuestionIndex(currentQuestionIndex - 1)
        }

    };





    const handleSubmit = (e) => {

        let correct = 0;
        let attempted = 0;

        //TODO: LOGIC TO CALCULATIONS OF MARKS
        adminQuestions.forEach((a, aI) => {
            let falseCount = 0;
            let attemptedCount = 0;
            a.choices.forEach((c, ci) => {
                //questions ke choice (c1) of choices
                const c1 = questions[aI].choices[ci];
                if (c1.isTrue) {
                    attemptedCount += 1;
                }
                if ((c.isTrue && !c1.isTrue) || (!c.isTrue && c1.isTrue)) {
                    ++falseCount;
                }

            });
            if (attemptedCount > 0)
                attempted += 1;
            if (falseCount === 0) {
                correct += 1;
            }
        });

        const result = {
            assessmentName: "assessment name should be here...",
            totalQuestions: questions.length,
            score: correct * 5,
            incorrect: attempted - correct,
            attempted,
        }
        const data = JSON.parse(localStorage.getItem("results"));
        if (data && data.length !== "undefined") {
            localStorage.clear();
            localStorage.setItem("results", JSON.stringify([...data, result]));
        } else {
            localStorage.setItem("results", JSON.stringify([result]))
        }

       
       
        history.push("/result");

    }

    return (
        <div>
            <div className={classes.header} >
                <Header />
            </div>
            <div className={classes.timer}>
                <Typography>
                   {startTest &&  <Timer handleSubmit={handleSubmit} />}
                </Typography>
            </div>
            <Grid container className={classes.root}>

                <Typography variant="h5">
                    This is My First Assesment
                </Typography>
            </Grid>

            <Grid itemn xs={12} md={6} lg={8} xl={8} sm={8} className={classes.btn}>
                {questions.map((q, i) => <Button key={i} className={clsx(classes.button, currentQuestionIndex === i && classes.activebtn)} onClick={() => changeQuestion(i)}>
                    {i + 1}
                </Button>)}
            </Grid>

            {renderQuestion()}

            <Grid container className={classes.actionBtn} >
                <Grid className={classes.pregrid} item sm={12} md={10} lg={10} xl={10} >

                    {(currentQuestionIndex !== 0) && startTest && <Button className={classes.prev} onClick={() => changeQuestion()}>
                        Previous
                    </Button>}
                </Grid>
                <Grid item sm={8} md={10} lg={10} xl={10}>
                    {(currentQuestionIndex !== questions.length - 1) && startTest && <Button className={classes.nxt} onClick={() => changeQuestion(undefined, "next")}>

                        Next
                    </Button>}
                </Grid>

                <Grid item xs={12} sm={12} md={10} lg={10} xl={10} className={classes.start} >

                    {!startTest &&  <Button className={classes.startbtn} type='button' onClick={() => setStartTest(true)}>

                        Start
                    </Button>
                    }
                </Grid>
                <Grid item sm={12} md={10} lg={10} xl={10} >

                    {startTest  && <Button className={classes.submit} type='button' onClick={handleSubmit}
                    >

                        Submit
                    </Button>}
                </Grid>
            </Grid>
        </div>
    )
}


export default FirstAssesment;
