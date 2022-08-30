import React from 'react'
import { Typography } from "@mui/material";
import {styled} from '@mui/system'

const CustomerTestimonialHead = styled(Typography)({
  display: 'flex',
  justifyContent: 'center',
  marginTop: 20,
});

function CustomerTestimonialHeader() {
  return (
    <CustomerTestimonialHead variant='h3'>
        Our customers absolutely love us
    </CustomerTestimonialHead>
  )
}

export default CustomerTestimonialHeader