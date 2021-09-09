import React from 'react'
import { makeStyles } from '@material-ui/styles'
import { Grid, Typography } from '@material-ui/core';
import Checkbox from '@material-ui/core/Checkbox';
import { Label } from '@material-ui/icons';

const useStyles = makeStyles({

})

const questions = [
    {
        "id": "jhsvdcgadsvka",
        "question": "2+2 =?",
        "isQuestionBoolean": true,
        "choices":
            [{
                "id": "aefae",
                "name": "1",
                "isTrue": false
            },
            {
                "id": "qsnvgd ",
                "name": "4",
                "isTrue": true
            },
            {
                "id": "eregew",
                "name": "3",
                "isTrue": false
            },
            {
                "id": "sdfasdfq",
                "name": "8",
                "isTrue": false
            }]
    },
    {
        "id": "jhsvdcgadsvka",
        "question": "2+2 =?",
        "isQuestionBoolean": true,
        "choices":
            [{
                "id": "aefae",
                "name": "1",
                "isTrue": false
            },
            {
                "id": "qsnvgd ",
                "name": "4",
                "isTrue": true
            },
            {
                "id": "eregew",
                "name": "3",
                "isTrue": false
            },
            {
                "id": "sdfasdfq",
                "name": "8",
                "isTrue": false
            }]
    },
    
]

function Example() {
    const classes = useStyles();

    const renderQuestion = () => {
        return questions.map((obj) => {
            return <Grid>
                <Typography> {obj.question}</Typography>
                {renderCheckbox(obj.choices)}

            </Grid>
        })
    }

    const renderCheckbox = (choices) => {
        return choices.map((obj)=>{
             return <Grid>
                <label type="Checkbox"><Checkbox />{obj.name}
                   
                </label>
            </Grid>
        })



    } //be prepare future im coming




    return (
        <div>
            {renderQuestion()}

        </div>
    )
}

export default Example
