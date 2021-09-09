import React, { useEffect } from 'react'
import { Box, Typography, List, ListItem } from '@material-ui/core';
import Link from '@material-ui/core/Link';
import useStyles from './Styles';
import { pagePaths } from "../../utils/constent"
import Header from '../../Component/Header';
import { useHistory, useLocation } from 'react-router-dom';




const list = [
    {
        text: 'Genral Knowledge Exam',
        index: ("1."),
        pagePaths: "/firstAssesment"

    },

    // {
    //     text: 'my second assessment',
    //     index: (2),
    //     pagePaths: "/firstquestion2"

    // },
    // {
    //     text: 'my third assessment',
    //     index: (3),
    //     pagePaths: "login"

    // },

]

function FirstAssesmentselect() {

    const classes = useStyles();
    const location = useLocation();
    const history = useHistory();
    const [email, setEmail] = React.useState("");

    const [value, setvalue] = React.useState();
    const onchange = (event, newvalue) => {
        setvalue(newvalue)
    }

    useEffect(() => {
        if (!location.state) {
            history.push({
                pathname: pagePaths.login,
                state: { message: "Please enter email id." }
            });
        } else if (!location.state.email) {
            history.push({
                pathname: pagePaths.login,
                state: { message: "Please enter email id." }
            });
        } else {

            setEmail(location.state.email);
        }
    }, [])

    return (
        <div>
            <Header email={email} />

            <Box className={classes.box}>

                <Typography variant="h4" className={classes.title1}>
                    Select an Assesment
                </Typography>


                <List >
                    {
                        list.map((obj, i) => {
                            return (
                                <ListItem className={classes.list}
                                    value={value}
                                    component={Link}
                                    href={obj.pagePaths}  >
                                    {obj.index}  {obj.text}
                                </ListItem>
                            )

                        })
                    }

                </List>
                <List >

                </List>

            </Box>
        </div>
    )
}
export default FirstAssesmentselect;