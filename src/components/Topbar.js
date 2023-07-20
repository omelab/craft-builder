// components/Topbar.js
import React, { Fragment } from 'react';
import {
  Box,
  FormControlLabel,
  Switch,
  Grid,
  Button as MaterialButton,
} from '@material-ui/core';

export const Topbar = () => {
  return (
    <Fragment>
      <Box
        sx={{
          width: '100%',
          height: 300,
          backgroundColor: 'primary.dark',
          '&:hover': {
            backgroundColor: 'primary.main',
            opacity: [0.9, 0.8, 0.7],
          },
        }}
      >
        <MaterialButton>Save</MaterialButton>
      </Box>

      <Grid container alignItems="center">
        <Grid item xs>
          <FormControlLabel
            control={<Switch checked={true} />}
            label="Enable"
          />
        </Grid>
        <Grid item>
          <MaterialButton size="small" variant="outlined" color="secondary">
            Serialize JSON to console
          </MaterialButton>
        </Grid>
      </Grid>
    </Fragment>
  );
};
