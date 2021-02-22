import { Box, Button, Grid, TextField, Typography } from '@material-ui/core';
import React from 'react';
import { useDispatch } from 'react-redux';

function CompanyRegister() {
  const dispatch = useDispatch();
  return (
    <React.Fragment>
      <Grid container spacing={4}>
        <Grid item xs={6}>
          <TextField label='Company Name' variant='outlined' fullWidth size='small' />
        </Grid>
        <Grid item xs={6}>
          <TextField label='Email' variant='outlined' fullWidth size='small' />
        </Grid>
        <Grid item xs={6}>
          <TextField label='Registration No' variant='outlined' fullWidth size='small' />
        </Grid>
        <Grid item xs={6}>
          <TextField label='GST Number' variant='outlined' fullWidth size='small' />
        </Grid>
        <Grid item xs={6}>
          <TextField label='WebSite URL' variant='outlined' fullWidth size='small' />
        </Grid>
        <Grid item xs={6}>
          <TextField label='Phone Number' variant='outlined' fullWidth size='small' />
        </Grid>
        <Grid item xs={6}>
          <TextField label='Company Address' variant='outlined' fullWidth size='small' />
        </Grid>
        <Grid item xs={6}>
          <TextField label='Password' variant='outlined' fullWidth size='small' />
        </Grid>
        <Grid item xs={6}>
          <TextField label='Confirm Pwd' variant='outlined' fullWidth size='small' />
        </Grid>
        <Grid item xs={12}>
          <Box textAlign='end'>
            <Button color='secondary' variant='contained'>
              <Typography variant='button'>Submit</Typography>
            </Button>
          </Box>
        </Grid>
      </Grid>
    </React.Fragment>
  );
}

export default CompanyRegister;
