import { Box, Typography } from '@material-ui/core'
import React from 'react'
import Header from '../../Component/Header'

function PageNotFound() {
    return (
        <div >
            <Header />
            <Box display="flex" height="100vh" alignItems="center" justifyContent="center" width="100%">
                <Typography variant="h4" align="center"> Oops! Resource not found.</Typography>
            </Box>

        </div>
    )
}

export default PageNotFound
