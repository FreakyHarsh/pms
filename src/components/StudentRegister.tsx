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
  IconButton,
  InputAdornment,
  OutlinedInput,
} from "@material-ui/core";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { StudentActionTypes } from "../store/reducers/StudentReducer/student.actionTypes";
import CloudUploadIcon from "@material-ui/icons/CloudUpload";
import { makeStyles, Theme, createStyles } from "@material-ui/core";
import { onRegister } from "../store/actions/actions.auth";
import { useHistory } from "react-router-dom";
import { setStudent } from "../store/actions/actions.student";
import { Visibility, VisibilityOff } from "@material-ui/icons";

function StudentRegister() {
  const classes = useStyles();
  const [gender, setGender] = useState("");
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [department, setDepartment] = useState("");
  const [uinNumber, setUinNumber] = useState("");
  const [program, setProgram] = useState("");
  const [email, setEmail] = useState("");
  const [currentAddress, setCurrentAddress] = useState("");
  const [homeAddress, setHomeAddress] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [uploadresume, setUploadresume] = useState<any>();
  const [uploadAvatar, setUploadAvatar] = useState<any>();
  const [error, setError] = useState<any>();
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const formData = new FormData();
  const history = useHistory();

  const dispatch = useDispatch();
  const authState = useSelector((state: any) => state.authState);

  useEffect(() => {
    console.log(authState.error);
    setError({ ...authState.error });
    authState.isLogin && history.push("/login");
    authState.token && dispatch(setStudent(authState.token));
  }, [authState.error, authState.isLogin]);

  const handleresumeSelected = (e: any) => {
    const files: any[] = Array.from(e.target.files);
    setUploadresume(files[0]);
  };

  const handleAvatarSelected = (e: any) => {
    const files: any[] = Array.from(e.target.files);
    setUploadAvatar(files[0]);
  };

  const onChangeGender = (event: React.ChangeEvent<{ value: unknown }>) => {
    setGender(event.target.value as string);
  };

  const onStudentRegister = () => {
    formData.append("avatar", uploadAvatar, uploadAvatar?.name);
    formData.append("firstName", firstName);
    formData.append("lastName", lastName);
    formData.append("uinNumber", uinNumber);
    formData.append("phoneNumber", phoneNumber);
    formData.append("gender", gender);
    formData.append("department", department);
    formData.append("program", program);
    formData.append("currentAddress", currentAddress);
    formData.append("homeAddress", homeAddress);
    formData.append("password", password);
    formData.append("confirmPassword", confirmPassword);
    formData.append("resume", uploadresume, uploadresume?.name);
    formData.append("email", email);
    dispatch(onRegister(formData, "students"));
  };
  return (
    <React.Fragment>
      <Grid container spacing={4}>
        <Grid item xs={6}>
          <TextField
            label='First Name'
            error={error?.key === "fistName"}
            helperText={error?.key === "fistName" && error?.message}
            variant='outlined'
            fullWidth
            size='small'
            onChange={(e: React.ChangeEvent<HTMLInputElement>) => setFirstName(e.target.value)}
          />
        </Grid>
        <Grid item xs={6}>
          <TextField
            label='Last Name'
            error={error?.key === "lastName"}
            helperText={error?.key === "lastName" && error?.message}
            variant='outlined'
            fullWidth
            size='small'
            onChange={(e: React.ChangeEvent<HTMLInputElement>) => setLastName(e.target.value)}
          />
        </Grid>
        <Grid item xs={6}>
          <TextField
            label='UIN Number'
            error={error?.key === "uinNumber"}
            helperText={error?.key === "uinNumber" && error?.message}
            variant='outlined'
            fullWidth
            size='small'
            onChange={(e: React.ChangeEvent<HTMLInputElement>) => setUinNumber(e.target.value)}
          />
        </Grid>
        <Grid item xs={6}>
          <TextField
            label='Phone Number'
            error={error?.key === "phoneNumber"}
            helperText={error?.key === "phoneNumber" && error?.message}
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
            error={error?.key === "email"}
            helperText={error?.key === "email" && error?.message}
            variant='outlined'
            fullWidth
            size='small'
            onChange={(e: React.ChangeEvent<HTMLInputElement>) => setEmail(e.target.value)}
          />
        </Grid>
        <Grid item xs={6}>
          <TextField
            label='Department'
            error={error?.key === "department"}
            helperText={error?.key === "department" && error?.message}
            variant='outlined'
            fullWidth
            size='small'
            onChange={(e: React.ChangeEvent<HTMLInputElement>) => setDepartment(e.target.value)}
          />
        </Grid>
        <Grid item xs={6}>
          <TextField
            label='Program'
            error={error?.key === "program"}
            helperText={error?.key === "program" && error?.message}
            variant='outlined'
            fullWidth
            size='small'
            onChange={(e: React.ChangeEvent<HTMLInputElement>) => setProgram(e.target.value)}
          />
        </Grid>
        <Grid item xs={6}>
          <TextField
            label='Current Address'
            error={error?.key === "currentAddress"}
            helperText={error?.key === "currentAddress" && error?.message}
            variant='outlined'
            fullWidth
            size='small'
            onChange={(e: React.ChangeEvent<HTMLInputElement>) => setCurrentAddress(e.target.value)}
          />
        </Grid>
        <Grid item xs={6}>
          <TextField
            label='Home Address'
            error={error?.key === "homeAddress"}
            helperText={error?.key === "homeAddress" && error?.message}
            variant='outlined'
            fullWidth
            size='small'
            onChange={(e: React.ChangeEvent<HTMLInputElement>) => setHomeAddress(e.target.value)}
          />
        </Grid>
        <Grid item xs={6}>
          <FormControl variant='outlined' size='small' fullWidth>
            <InputLabel htmlFor='password'>Password</InputLabel>
            <OutlinedInput
              id='password'
              type={showPassword ? "text" : "password"}
              value={password}
              onChange={(e: React.ChangeEvent<HTMLInputElement>) => setPassword(e.target.value)}
              endAdornment={
                <InputAdornment position='end'>
                  <IconButton
                    aria-label='toggle password visibility'
                    onClick={() => setShowPassword(!showPassword)}
                    edge='end'
                  >
                    {showPassword ? (
                      <Visibility fontSize='small' />
                    ) : (
                      <VisibilityOff fontSize='small' />
                    )}
                  </IconButton>
                </InputAdornment>
              }
              labelWidth={70}
            />
          </FormControl>
        </Grid>
        <Grid item xs={6}>
          <FormControl variant='outlined' size='small' fullWidth>
            <InputLabel htmlFor='password'>Confirm Password</InputLabel>
            <OutlinedInput
              id='password'
              type={showConfirmPassword ? "text" : "password"}
              value={confirmPassword}
              onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
                setConfirmPassword(e.target.value)
              }
              endAdornment={
                <InputAdornment position='end'>
                  <IconButton
                    aria-label='toggle password visibility'
                    onClick={() => setShowConfirmPassword(!showConfirmPassword)}
                    edge='end'
                  >
                    {showConfirmPassword ? (
                      <Visibility fontSize='small' />
                    ) : (
                      <VisibilityOff fontSize='small' />
                    )}
                  </IconButton>
                </InputAdornment>
              }
              labelWidth={130}
            />
          </FormControl>
        </Grid>
        <Grid item xs={6}>
          <label htmlFor='avatar' style={{ display: "inline-block" }}>
            <Box
              className={classes.uploadBtnStyling}
              display='flex'
              mr={2}
              width='auto'
              alignItems='center'
            >
              <CloudUploadIcon style={{ fontSize: "1rem", marginRight: "5px" }} />
              <div style={{ paddingRight: "10px" }}>Upload Avatar</div>
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
          <label htmlFor='resume' style={{ display: "inline-block" }}>
            <Box
              className={classes.uploadBtnStyling}
              display='flex'
              mr={2}
              width='auto'
              alignItems='center'
            >
              <CloudUploadIcon style={{ fontSize: "1rem", marginRight: "5px" }} />
              <div style={{ paddingRight: "10px" }}>Upload resume</div>
            </Box>
          </label>
          {uploadresume?.name && (
            <div className={classes.selectedFileName}>{uploadresume?.name}</div>
          )}
          <input type='file' id='resume' hidden onChange={handleresumeSelected} accept='.pdf' />
        </Grid>
        <Grid item xs={12}>
          <Typography variant='caption' color='error'>
            * All fields are required
          </Typography>
        </Grid>
        <Grid item xs={12}>
          <Box textAlign='end'>
            <Button
              color='secondary'
              variant='contained'
              disabled={
                !(
                  firstName &&
                  lastName &&
                  uploadresume?.name &&
                  uploadAvatar?.name &&
                  phoneNumber &&
                  uinNumber &&
                  gender &&
                  email &&
                  department &&
                  program &&
                  currentAddress &&
                  homeAddress &&
                  password &&
                  confirmPassword
                )
              }
            >
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
const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    uploadBtnStyling: {
      color: theme.palette.primary.main,
      padding: ".6rem",
      border: "1px solid #6087F6",
      borderRadius: "1rem",
      fontSize: "0.8rem",
    },
    selectedFileName: {
      color: theme.palette.secondary.main,
      padding: ".6rem",
      border: "1px solid " + theme.palette.secondary.main,
      borderRadius: "1rem",
      fontSize: "0.8rem",
      marginTop: "1rem",
    },
  })
);
export default StudentRegister;
