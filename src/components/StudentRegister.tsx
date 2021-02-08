import {
  Grid,
  TextField,
  FormControl,
  InputLabel,
  Select,
  MenuItem,
  Box,
  Button,
  Typography,
} from '@material-ui/core';
import React, { useState } from 'react';

function StudentRegister() {
  const [gender, setGender] = useState('');
  const onChangeGender = (event: React.ChangeEvent<{ value: unknown }>) => {
    setGender(event.target.value as string);
  };
  return (
    <React.Fragment>
      <Grid container spacing={4}>
        <Grid item xs={6}>
          <TextField label='First Name' variant='outlined' fullWidth size='small' />
        </Grid>
        <Grid item xs={6}>
          <TextField label='Last Name' variant='outlined' fullWidth size='small' />
        </Grid>
        <Grid item xs={6}>
          <TextField label='UIN Number' variant='outlined' fullWidth size='small' />
        </Grid>
        <Grid item xs={6}>
          <TextField label='Phone Number' variant='outlined' fullWidth size='small' />
        </Grid>
        <Grid item xs={6}>
          <FormControl variant='outlined' fullWidth size='small'>
            <InputLabel>Gender</InputLabel>
            <Select value={gender} onChange={onChangeGender} label='Gender'>
              <MenuItem value=''>
                <em>None</em>
              </MenuItem>
              <MenuItem value='male'>Male</MenuItem>
              <MenuItem value='female'>Female</MenuItem>
              <MenuItem value='other'>Other</MenuItem>
            </Select>
          </FormControl>
        </Grid>
        <Grid item xs={6}>
          <TextField label='Email' variant='outlined' fullWidth size='small' />
        </Grid>
        <Grid item xs={6}>
          <TextField label='Department' variant='outlined' fullWidth size='small' />
        </Grid>
        <Grid item xs={6}>
          <TextField label='Programme' variant='outlined' fullWidth size='small' />
        </Grid>
        <Grid item xs={6}>
          <TextField label='Current Address' variant='outlined' fullWidth size='small' />
        </Grid>
        <Grid item xs={6}>
          <TextField label='Home Address' variant='outlined' fullWidth size='small' />
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

export default StudentRegister;
