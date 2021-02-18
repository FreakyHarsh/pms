import {
  Box,
  Button,
  Card,
  FormControl,
  Grid,
  InputAdornment,
  InputLabel,
  MenuItem,
  OutlinedInput,
  Select,
  TextField,
} from '@material-ui/core';
import React, { useState } from 'react';
import { formatYMD } from '../../utils/formatYMD';

function CreateRequisition() {
  const [position, setPosition] = useState('');
  const [noOfPositions, setNoOfPositions] = useState<number>();
  const [salary, setSalary] = useState<number>();
  const [jobType, setJobType] = useState<
    'Full Time' | 'Contract' | 'Internship' | 'PartTime' | 'Other' | null
  >(null);
  const [location, setLocation] = useState('');
  const [endDate, setEndDate] = useState(formatYMD(new Date()));
  const onJobTypeSelect = (
    e: React.ChangeEvent<{
      name?: string | undefined;
      value: unknown;
    }>
  ) => {
    console.log(e.target.value);
  };
  return (
    <div>
      <Card>
        <Box p={3}>
          <Grid container spacing={3}>
            <Grid item xs={12} md={6}>
              <TextField
                label='Position'
                placeholder='Eg: Data Analyst'
                variant='outlined'
                fullWidth
                size='small'
                onChange={(e) => setPosition(e.target.value)}
              />
            </Grid>
            <Grid item xs={12} md={6}>
              <TextField
                label='No of Positions'
                type='number'
                variant='outlined'
                fullWidth
                size='small'
                onChange={(e) => setNoOfPositions(parseInt(e.target.value))}
              />
            </Grid>
            <Grid item xs={6}>
              <FormControl variant='outlined' fullWidth size='small'>
                <InputLabel id='job-type'>Job Type</InputLabel>
                <Select
                  labelId='job-type'
                  id='demo-simple-select-outlined'
                  value={jobType}
                  onChange={onJobTypeSelect}
                  label='Job Type'
                >
                  <MenuItem value={'Full Time'}>Full Time</MenuItem>
                  <MenuItem value={'Part Time'}>Part Time</MenuItem>
                  <MenuItem value={'Internship'}>Internship</MenuItem>
                  <MenuItem value={'Contract'}>Contract</MenuItem>
                  <MenuItem value={'Other'}>Other</MenuItem>
                </Select>
              </FormControl>
            </Grid>
            <Grid item xs={6}>
              <FormControl fullWidth variant='outlined' size='small'>
                <InputLabel htmlFor='salary'>Salary</InputLabel>
                <OutlinedInput
                  id='salary'
                  type='number'
                  onChange={(e) => setSalary(parseInt(e.target.value))}
                  startAdornment={<InputAdornment position='start'>₹</InputAdornment>}
                  labelWidth={50}
                />
              </FormControl>
            </Grid>
            <Grid item xs={12} md={6}>
              <TextField
                label='Location'
                variant='outlined'
                fullWidth
                size='small'
                onChange={(e) => setLocation(e.target.value)}
              />
            </Grid>
            <Grid item xs={12} md={6}>
              <TextField
                label='Last date to apply'
                type='date'
                variant='outlined'
                size='small'
                defaultValue={endDate}
                fullWidth
                InputLabelProps={{
                  shrink: true,
                }}
                onChange={(e) => console.log(e.target.value)}
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                label='Job Description'
                variant='outlined'
                fullWidth
                multiline
                size='small'
                placeholder='Give a detailed Job description including work experience, qualification criteria, etc.'
                rows={6}
                onChange={(e) => setLocation(e.target.value)}
              />
            </Grid>
            <Grid item xs={12}>
              <Box textAlign='end'>
                <Button color='secondary' variant='contained'>
                  Create
                </Button>
              </Box>
            </Grid>
          </Grid>
        </Box>
      </Card>
    </div>
  );
}

export default CreateRequisition;
