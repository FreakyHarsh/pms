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
import { useDispatch } from 'react-redux';
import { StudentActionTypes } from '../store/reducers/StudentReducer/student.actionTypes';
import CloudUploadIcon from '@material-ui/icons/CloudUpload';
import { makeStyles } from '@material-ui/core';

function StudentRegister() {
  const classes = useStyles();
  const [gender, setGender] = useState('');
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [phoneNumber, setPhoneNumber] = useState('');
  const [department, setDepartment] = useState('');
  const [uinNumber, setUinNumber] = useState('');
  const [program, setProgram] = useState('');
  const [email, setEmail] = useState('');
  const [currentAddress, setCurrentAddress] = useState('');
  const [homeAddress, setHomeAddress] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [uploadResume, setUploadResume] = useState<any>();
  const [uploadAvatar, setUploadAvatar] = useState<any>();
  //res from server for validation purpose
  const [res, setRes] = useState<any>();
  const resumeFormData = new FormData();
  const avatarFormData = new FormData();
  const formData = new FormData();

  const dispatch = useDispatch();
  const handleResumeSelected = (e: any) => {
    const files: any[] = Array.from(e.target.files);
    console.log(files);
    setUploadResume(files[0]);
  };
  const handleAvatarSelected = (e: any) => {
    const files: any[] = Array.from(e.target.files);
    setUploadAvatar(files[0]);
  };

  const onChangeGender = (event: React.ChangeEvent<{ value: unknown }>) => {
    setGender(event.target.value as string);
  };
  const dispatchToGlobalStore = () => {
    dispatch({ type: StudentActionTypes.setFirstName, payload: firstName });
    dispatch({ type: StudentActionTypes.setLastName, payload: lastName });
    dispatch({ type: StudentActionTypes.setUinNumber, payload: uinNumber });
    dispatch({ type: StudentActionTypes.setEmail, payload: email });
    dispatch({ type: StudentActionTypes.setGender, payload: gender });
    dispatch({ type: StudentActionTypes.setDepartment, payload: department });
    dispatch({ type: StudentActionTypes.setPhoneNumber, payload: phoneNumber });
    dispatch({ type: StudentActionTypes.setCurrentAddress, payload: currentAddress });
    dispatch({ type: StudentActionTypes.setHomeAddress, payload: homeAddress });
    dispatch({ type: StudentActionTypes.setProgram, payload: program });
    dispatch({ type: StudentActionTypes.setPassword, payload: password });
  };

  const onStudentRegister = async () => {
    // resumeFormData.append('resume', uploadResume, uploadResume?.name);
    // avatarFormData.append('avatar', uploadAvatar, uploadAvatar?.name);
    formData.append('avatar', uploadAvatar, uploadAvatar?.name);
    formData.append('firstName', firstName);
    formData.append('lastName', lastName);
    formData.append('uinNumber', uinNumber);
    formData.append('phoneNumber', phoneNumber);
    formData.append('gender', gender);
    formData.append('department', department);
    formData.append('program', program);
    formData.append('currentAddress', currentAddress);
    formData.append('homeAddress', homeAddress);
    formData.append('password', password);
    formData.append('confirmPassword', confirmPassword);
    formData.append('resume', uploadResume, uploadResume?.name);
    formData.append('email', email);
    const response = await fetch(baseURL + '/students/register', {
      method: 'POST',
      body: formData,
    })
      .then((res) => res.text())
      .then((data) => {
        //TODO: dispatch to global store here
        dispatchToGlobalStore();
        return JSON.parse(data);
      })
      .catch((error) => console.log(error));
    console.log(response);
    setRes(response);
  };
  return (
    <React.Fragment>
      <Grid container spacing={4}>
        <Grid item xs={6}>
          <TextField
            label='First Name'
            error={res?.key === 'firstName'}
            helperText={res?.key === 'firstName' && res?.message}
            variant='outlined'
            fullWidth
            size='small'
            onChange={(e: React.ChangeEvent<HTMLInputElement>) => setFirstName(e.target.value)}
          />
        </Grid>
        <Grid item xs={6}>
          <TextField
            label='Last Name'
            error={res?.key === 'lastName'}
            helperText={res?.key === 'lastName' && res?.message}
            variant='outlined'
            fullWidth
            size='small'
            onChange={(e: React.ChangeEvent<HTMLInputElement>) => setLastName(e.target.value)}
          />
        </Grid>
        <Grid item xs={6}>
          <TextField
            label='UIN Number'
            error={res?.key === 'uinNumber'}
            helperText={res?.key === 'uinNumber' && res?.message}
            variant='outlined'
            fullWidth
            size='small'
            onChange={(e: React.ChangeEvent<HTMLInputElement>) => setUinNumber(e.target.value)}
          />
        </Grid>
        <Grid item xs={6}>
          <TextField
            label='Phone Number'
            error={res?.key === 'phoneNumber'}
            helperText={res?.key === 'phoneNumber' && res?.message}
            variant='outlined'
            fullWidth
            size='small'
            onChange={(e: React.ChangeEvent<HTMLInputElement>) => setPhoneNumber(e.target.value)}
          />
        </Grid>
        <Grid item xs={6}>
          <FormControl variant='outlined' fullWidth size='small'>
            <InputLabel>Gender</InputLabel>
            <Select value={gender} onChange={onChangeGender} label='Gender'>
              <MenuItem value='male'>Male</MenuItem>
              <MenuItem value='female'>Female</MenuItem>
              <MenuItem value='other'>Other</MenuItem>
            </Select>
          </FormControl>
        </Grid>
        <Grid item xs={6}>
          <TextField
            label='Email'
            error={res?.key === 'email'}
            helperText={res?.key === 'email' && res?.message}
            variant='outlined'
            fullWidth
            size='small'
            onChange={(e: React.ChangeEvent<HTMLInputElement>) => setEmail(e.target.value)}
          />
        </Grid>
        <Grid item xs={6}>
          <TextField
            label='Department'
            error={res?.key === 'department'}
            helperText={res?.key === 'department' && res?.message}
            variant='outlined'
            fullWidth
            size='small'
            onChange={(e: React.ChangeEvent<HTMLInputElement>) => setDepartment(e.target.value)}
          />
        </Grid>
        <Grid item xs={6}>
          <TextField
            label='Program'
            error={res?.key === 'program'}
            helperText={res?.key === 'program' && res?.message}
            variant='outlined'
            fullWidth
            size='small'
            onChange={(e: React.ChangeEvent<HTMLInputElement>) => setProgram(e.target.value)}
          />
        </Grid>
        <Grid item xs={6}>
          <TextField
            label='Current Address'
            error={res?.key === 'currentAddress'}
            helperText={res?.key === 'currentAddress' && res?.message}
            variant='outlined'
            fullWidth
            size='small'
            onChange={(e: React.ChangeEvent<HTMLInputElement>) => setCurrentAddress(e.target.value)}
          />
        </Grid>
        <Grid item xs={6}>
          <TextField
            label='Home Address'
            error={res?.key === 'homeAddress'}
            helperText={res?.key === 'homeAddress' && res?.message}
            variant='outlined'
            fullWidth
            size='small'
            onChange={(e: React.ChangeEvent<HTMLInputElement>) => setHomeAddress(e.target.value)}
          />
        </Grid>
        <Grid item xs={6}>
          <TextField
            label='Password'
            variant='outlined'
            fullWidth
            size='small'
            onChange={(e: React.ChangeEvent<HTMLInputElement>) => setPassword(e.target.value)}
          />
        </Grid>
        <Grid item xs={6}>
          <TextField
            label='Confirm Pwd'
            variant='outlined'
            fullWidth
            size='small'
            onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
              setConfirmPassword(e.target.value)
            }
          />
        </Grid>
        <Grid item xs={6}>
          <label htmlFor='avatar' style={{ display: 'inline-block' }}>
            <Box
              className={classes.uploadBtnStyling}
              display='flex'
              mr={2}
              width='auto'
              alignItems='center'
            >
              <CloudUploadIcon style={{ fontSize: '1rem', marginRight: '5px' }} />
              <div style={{ paddingRight: '10px' }}>Upload Avatar</div>
            </Box>
          </label>
          {uploadAvatar?.name && (
            <div className={classes.selectedFileName}>{uploadAvatar?.name}</div>
          )}
          <input
            type='file'
            id='avatar'
            hidden
            onChange={handleAvatarSelected}
            accept='.jpeg,.png,.jpg'
          />
        </Grid>
        <Grid item xs={6}>
          <label htmlFor='resume' style={{ display: 'inline-block' }}>
            <Box
              className={classes.uploadBtnStyling}
              display='flex'
              mr={2}
              width='auto'
              alignItems='center'
            >
              <CloudUploadIcon style={{ fontSize: '1rem', marginRight: '5px' }} />
              <div style={{ paddingRight: '10px' }}>Upload Resume</div>
            </Box>
          </label>
          {uploadResume?.name && (
            <div className={classes.selectedFileName}>{uploadResume?.name}</div>
          )}
          <input type='file' id='resume' hidden onChange={handleResumeSelected} accept='.pdf' />
        </Grid>
        <Grid item xs={12}>
          <Box textAlign='end'>
            <Button color='secondary' variant='contained'>
              <Typography variant='button' onClick={onStudentRegister}>
                Submit
              </Typography>
            </Button>
          </Box>
        </Grid>
      </Grid>
    </React.Fragment>
  );
}
const useStyles = makeStyles({
  uploadBtnStyling: {
    color: '#1D3A8F',
    backgroundColor: '#EBF0FF',
    padding: '.6rem',
    border: '1px solid #6087F6',
    borderRadius: '1rem',
    fontSize: '0.8rem',
  },
  selectedFileName: {
    color: '#1D3A8F',
    backgroundColor: '#EBF0FF',
    padding: '.6rem',
    border: '1px solid #6087F6',
    borderRadius: '1rem',
    fontSize: '0.8rem',
    marginTop: '1rem',
  },
});
export default StudentRegister;
