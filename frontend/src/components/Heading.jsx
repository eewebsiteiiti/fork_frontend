import { Typography } from '@mui/material';
import React from 'react'

const Heading = (props) => {
    return (
        <>
            <Typography variant="h1" component="h2" sx={{ borderBottom: "2px solid #BBBBBB", my: 2 }}>{props.heading}</Typography>
        </>
    )
}

export default Heading;