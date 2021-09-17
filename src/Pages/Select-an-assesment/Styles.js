import { makeStyles } from "@material-ui/core";

const useStyles = makeStyles({
box: {
        border: "1px solid",
        borderRadius: "20px",
        height: "500px",
        width: "90%",
        margin: "130px auto auto auto",
    },
    title1:{
        height:"50px",
        fontWeight: 'bold',
        margin:"50px 0 0 20px",
        width: '100%',
        color:"#44a993",

    },
    list:{
        height:"20px",
        width: '80%',
        margin:"40px 0 0 40px",
        fontSize:"20px",
        "&:hover":{
            color:"red",
        textDecoration: 'none',

        }

    },

})

export default useStyles;