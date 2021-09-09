import { makeStyles } from "@material-ui/core";
import theme from "../../Theme/index"


const useStyles = makeStyles({

    appBar: {
        background: "#5cf3ff",
        color: "black"
    },
    login: {
        fontWeight: "bold",
        fontFamily: theme.typography.poppinsMedium,
        textTransform: 'none'
    },

    title: {
        flexGrow: "1",
        marginLeft: "80px",
    },


    box: {
        border: "1px solid",
        borderRadius: "20px",
        height: "500px",
        width: "90%",
        margin: "130px auto auto auto",
        "& small": {
            width: "100%",
            color: 'red'
        }
    },
    test: {
        margin: "120px auto auto 80px"
    },
    textBox: {
        // border: "1px solid",
        width: "100%",
        borderRadius: "5px",
        margin: "20px auto auto 80px",
        "& .MuiInput-underline:before": {
            borderBottom: "none",
        },

        "& .MuiInput-underline:after": {
            borderBottom: "none",
        },
        "& .MuiInput-underline:hover:not(.Mui-disabled):before": {
            borderBottom: "none",
        },



    },
    continueButton: {
        border: "1px solid",
        margin: "20px auto auto 10px",
        height: "56px",
        background: "#00d1b2",
        fontFamily: theme.typography.poppinsMedium,
        textTransform: 'none',
        "&:hover":{
            background:"#00d1b2",
            textDecoration:"none",
        }
    },
    innerBox1: {
        border: "1px solid",
        width: "85%",
        height: "150px",
        margin: "50px 0px 0px 80px",
        background: "red"
    },

})

export default useStyles;