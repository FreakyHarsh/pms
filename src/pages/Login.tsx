import {
  Box,
  Button,
  CircularProgress,
  createStyles,
  FormControl,
  FormControlLabel,
  FormHelperText,
  Grid,
  Hidden,
  IconButton,
  InputAdornment,
  InputLabel,
  makeStyles,
  OutlinedInput,
  Radio,
  RadioGroup,
  TextField,
  Theme,
  Typography,
  useTheme,
} from "@material-ui/core";
import { Visibility, VisibilityOff } from "@material-ui/icons";
import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { Link, useHistory } from "react-router-dom";

import TermsAndConditions from "../components/TermsAndConditions";
import { onLogin } from "../store/actions/actions.auth";
import { setCompany } from "../store/actions/actions.company";
import { setStudent } from "../store/actions/actions.student";
import { capitalizeFirstWord } from "../utils/capitalizeFirstWord";
import { getStudentLogin } from "../utils/studentLogin";

function Login() {
  const history = useHistory();
  const classes = useStyles();
  const theme = useTheme();
  const [loginType, setLoginType] = useState("student");
  const [showPassword, setShowPassword] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<{ key: string; message: string; status: number }>();
  const handleRadioChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setLoginType((event.target as HTMLInputElement).value);
  };
  const dispatch = useDispatch();

  const onStudentLogin = async () => {
    setLoading(true);
    if (email === "admin" && password === "admin") {
      const response = await fetch(baseURL + "/admin/login", {
        method: "POST",
        body: JSON.stringify({
          username: email,
          password: password,
        }),
      })
        .then((res) => res.json())
        .then((data) => data)
        .catch((error) => console.error(error));
      console.log(response);
      dispatch(onLogin(response));
      history.push("/admin-dashboard");
      setLoading(false);
      return;
    }
    const response: any = await getStudentLogin(email, password);
    console.log(response);
    if (response.accessToken) {
      dispatch(onLogin(response));
      dispatch(setStudent(response.accessToken));
      history.push("/student-dashboard");
    }
    setLoading(false);
    response?.status === 400 && setError(response);
    response?.status === 401 && setError(response);
  };

  const onCompanyLogin = async () => {
    setLoading(true);
    const response: any = await fetch(baseURL + "/companies/login", {
      method: "POST",
      body: JSON.stringify({
        email,
        password,
      }),
    })
      .then((res) => res.json())
      .then((data) => data)
      .catch((error) => console.error(error));
    console.log(response);
    if (response.accessToken) {
      dispatch(onLogin(response));
      dispatch(setCompany(response.accessToken));
      history.push("/company-dashboard");
    }
    setLoading(false);
    response?.status === 400 && setError(response);
    response?.status === 401 && setError(response);
  };

  return (
    <div>
      <Grid container style={{ height: "100vh" }}>
        <Hidden smDown>
          <Grid item md={4} style={{ backgroundColor: theme.palette.primary.main, height: "100%" }}>
            <Box display='flex' height='100%' alignItems='center' p={3}>
              <TermsAndConditions />
            </Box>
          </Grid>
        </Hidden>

        <Grid item md={8} xs={12}>
          <Box p={4}>
            <Box mb={1} style={{ fontFamily: "Playfair Display" }}>
              <Typography variant='h4' className={classes.headerTextAlign}>
                Login{" "}
                <span style={{ fontSize: ".9rem", marginLeft: "1rem" }}>
                  or <Link to='/'>register</Link>
                </span>
              </Typography>
            </Box>
            <Box component='section'>
              <Box p={1} style={{ backgroundColor: theme.palette.primary.main }}>
                <RadioGroup
                  aria-label='quiz'
                  name='quiz'
                  value={loginType}
                  onChange={handleRadioChange}
                  style={{ display: "block", color: "#fff" }}
                >
                  <Box display='flex' justifyContent='space-around'>
                    <FormControlLabel
                      value='student'
                      control={<Radio style={{ color: "#FFF" }} />}
                      label={<Typography>Student</Typography>}
                    />
                    <FormControlLabel
                      value='company'
                      control={<Radio style={{ color: "#FFF" }} />}
                      label={<Typography>Company</Typography>}
                    />
                  </Box>
                </RadioGroup>
              </Box>

              <Box mt={4}>
                <Grid container spacing={4}>
                  <Grid item xs={12} md={6}>
                    <TextField
                      label={capitalizeFirstWord(loginType) + " email"}
                      variant='outlined'
                      size='small'
                      fullWidth
                      onChange={(e) => setEmail(e.target.value)}
                      error={error?.key === "email"}
                      helperText={error?.key === "email" ? error?.message : ""}
                    />
                  </Grid>
                  <Grid item xs={12} md={6}>
                    <FormControl
                      variant='outlined'
                      size='small'
                      fullWidth
                      error={error?.key === "password"}
                    >
                      <InputLabel htmlFor='password'>Password</InputLabel>
                      <OutlinedInput
                        id='password'
                        type={showPassword ? "text" : "password"}
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        // helperText={error?.key === 'email' ? error?.message : ''}
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
                      {error?.key === "password" && (
                        <FormHelperText id='password-error'>{error.message}</FormHelperText>
                      )}
                    </FormControl>
                  </Grid>
                  <Grid item xs={12}>
                    <Typography>{error?.status === 401 && error?.message}</Typography>
                    <Box textAlign='end'>
                      <Button
                        color='secondary'
                        variant='contained'
                        onClick={loginType === "student" ? onStudentLogin : onCompanyLogin}
                      >
                        {loading ? (
                          <CircularProgress size={20} style={{ color: "white" }} />
                        ) : (
                          <Typography variant='button'>Submit</Typography>
                        )}
                      </Button>
                    </Box>
                  </Grid>
                </Grid>
              </Box>
            </Box>
          </Box>
        </Grid>
      </Grid>
    </div>
  );
}

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    headerTextAlign: {
      [theme.breakpoints.down("sm")]: {
        textAlign: "center",
      },
      [theme.breakpoints.up("md")]: {
        textAlign: "left",
      },
    },
  })
);

export default Login;
