import { CircularProgress } from '@mui/material';
import React from 'react';
import { StyledDiv } from './styledComponents';

export const TLoading = (): JSX.Element => {
  return (
    <StyledDiv>
      <CircularProgress
        sx={{
          position: 'absolute',
          left: 0,
          right: 0,
          top: 0,
          bottom: 0,
          margin: 'auto'
        }}
      />
    </StyledDiv>
  );
};
