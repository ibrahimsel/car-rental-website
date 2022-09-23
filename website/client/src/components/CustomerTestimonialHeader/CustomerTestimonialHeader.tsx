import React from 'react'
import { Typography } from "@mui/material";
import {styled} from '@mui/system'

const CustomerTestimonialHead = styled(Typography)({
  display: 'flex',
  justifyContent: 'center',
  marginTop: 40,
  color: '#fff',
});

function CustomerTestimonialHeader() {
  return (
    <CustomerTestimonialHead variant='h4'>
        Our customers love us
    </CustomerTestimonialHead>
  )
}

export default CustomerTestimonialHeader