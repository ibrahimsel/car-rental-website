import React from 'react'
import { Typography } from "@mui/material";

function CustomerTestimonialHeader() {
  return (
    <Typography variant='h3' component='h3' sx={{
        display: 'flex',
        justifyContent: 'center',
        marginTop: 5,
    }}>
        Our customers absolutely love us
    </Typography>
  )
}

export default CustomerTestimonialHeader