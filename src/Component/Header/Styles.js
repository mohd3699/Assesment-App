import { makeStyles } from "@material-ui/core";


const useStyles = makeStyles({

    appBar: {
        background: "#5cf3ff",
        color: "black",
        height:"64px"
    },
    login: {
        fontWeight: "bold",
        // fontFamily: theme.typography.poppinsMedium,
        textTransform: 'none',
        justifyContent:"flex-end",
    },

    title: {
        flexGrow: "1",
        marginLeft: "80px",
    },
    // assesment:{
    //     textTransform:"none"
    // },
})

export default useStyles;