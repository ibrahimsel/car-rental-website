import React from 'react'
import { Typography, TypographyProps } from '@mui/material'
import Link from '@mui/material/Link'

function Copyright(props: TypographyProps) {
    const { color = "text.secondary", ...rest } = props;
    return (
      <Typography variant="body2" color={color} align="center" {...rest}>
        {"Copyright © "}
        <Link color="inherit" href="#">
          Car Rental
        </Link>{" "}
        {new Date().getFullYear()}
        {"."}
      </Typography>
    );
  }

export default Copyright