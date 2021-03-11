import {
  Box,
  Button,
  createStyles,
  Grid,
  makeStyles,
  TextField,
  Theme,
  Typography,
} from "@material-ui/core";
import CloudUploadIcon from "@material-ui/icons/CloudUpload";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useHistory } from "react-router-dom";

import { RootState } from "..";
import { onRegister } from "../store/actions/actions.auth";
import { setCompany } from "../store/actions/actions.company";

function CompanyRegister() {
  const [companyName, setCompanyName] = useState("");
  const [email, setEmail] = useState("");
  const [registrationNo, setRegistrationNo] = useState("");
  const [gstNumber, setGstNumber] = useState("");
  const [websiteUrl, setWebsiteUrl] = useState("");
  const [companyAddress, setCompanyAddress] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [uploadAvatar, setUploadAvatar] = useState<any>();
  const [error, setError] = useState("");
  const authState = useSelector((state: RootState) => state.authState);
  const state = useSelector((state: RootState) => state.studentState);
  const formData = new FormData();
  const history = useHistory();
  const classes = useStyles();
  const handleAvatarSelected = (e: any) => {
    const files: any[] = Array.from(e.target.files);
    setUploadAvatar(files[0]);
  };
  useEffect(() => {
    console.log(authState.error);
    setError({ ...authState.error });
    authState.isLogin && history.push("/company-dashboard");
    authState.token && dispatch(setCompany(authState.token));
  }, [authState.error, authState.isLogin]);

  const dispatch = useDispatch();
  const onCompanyRegister = () => {
    formData.append("avatar", uploadAvatar, uploadAvatar?.name);
    formData.append("gstNumber", gstNumber);
    formData.append("name", companyName);
    formData.append("webSiteURL", websiteUrl);
    formData.append("registrationNumber", registrationNo);
    formData.append("phoneNumber", phoneNumber);
    formData.append("address", companyAddress);
    formData.append("password", password);
    formData.append("confirmPassword", confirmPassword);
    formData.append("email", email);
    dispatch(onRegister(formData, "companies"));
  };
  return (
    <React.Fragment>
      <Grid container spacing={4}>
        <Grid item xs={6}>
          <TextField
            label='Company Name'
            variant='outlined'
            fullWidth
            size='small'
            onChange={(e) => setCompanyName(e.target.value)}
          />
        </Grid>
        <Grid item xs={6}>
          <TextField
            label='Email'
            variant='outlined'
            fullWidth
            size='small'
            onChange={(e) => setEmail(e.target.value)}
          />
        </Grid>
        <Grid item xs={6}>
          <TextField
            label='Registration No'
            variant='outlined'
            fullWidth
            size='small'
            onChange={(e) => setRegistrationNo(e.target.value)}
          />
        </Grid>
        <Grid item xs={6}>
          <TextField
            label='GST Number'
            variant='outlined'
            fullWidth
            size='small'
            onChange={(e) => setGstNumber(e.target.value)}
          />
        </Grid>
        <Grid item xs={6}>
          <TextField
            label='WebSite URL'
            variant='outlined'
            fullWidth
            size='small'
            onChange={(e) => setWebsiteUrl(e.target.value)}
          />
        </Grid>
        <Grid item xs={6}>
          <TextField
            label='Phone Number'
            variant='outlined'
            fullWidth
            size='small'
            onChange={(e) => setPhoneNumber(e.target.value)}
          />
        </Grid>
        <Grid item xs={6}>
          <TextField
            label='Company Address'
            variant='outlined'
            fullWidth
            size='small'
            onChange={(e) => setCompanyAddress(e.target.value)}
          />
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
          <TextField
            label='Password'
            variant='outlined'
            fullWidth
            size='small'
            onChange={(e) => setPassword(e.target.value)}
          />
        </Grid>
        <Grid item xs={6}>
          <TextField
            label='Confirm Pwd'
            variant='outlined'
            fullWidth
            size='small'
            onChange={(e) => setConfirmPassword(e.target.value)}
          />
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
              onClick={onCompanyRegister}
              disabled={
                !(
                  companyName &&
                  email &&
                  registrationNo &&
                  gstNumber &&
                  websiteUrl &&
                  phoneNumber &&
                  companyAddress &&
                  uploadAvatar?.name &&
                  password &&
                  confirmPassword
                )
              }
            >
              <Typography variant='button'>Submit</Typography>
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
export default CompanyRegister;
