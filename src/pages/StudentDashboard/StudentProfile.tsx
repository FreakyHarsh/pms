import {
  Avatar,
  Box,
  Button,
  Card,
  CardContent,
  createStyles,
  Divider,
  Grid,
  makeStyles,
  TextField,
  Theme,
  Typography,
  useTheme,
} from "@material-ui/core";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";

import { RootState } from "../..";
import { StudentActionTypes } from "../../store/reducers/StudentReducer/student.actionTypes";
import { StudentState } from "../../store/reducers/StudentReducer/student.reducer";

function StudentProfile() {
  const classes = useStyles();
  const theme = useTheme();
  const studentState: StudentState = useSelector((state: RootState) => state.studentState);

  const authState = useSelector((state: RootState) => state.authState);
  const dispatch = useDispatch();
  const [sem1, setSem1] = useState<number | undefined>(studentState.sem1);
  const [sem2, setSem2] = useState<number | undefined>(studentState.sem2);
  const [sem3, setSem3] = useState<number | undefined>(studentState.sem3);
  const [sem4, setSem4] = useState<number | undefined>(studentState.sem4);
  const [sem5, setSem5] = useState<number | undefined>(studentState.sem5);
  const [sem6, setSem6] = useState<number | undefined>(studentState.sem6);
  const [sem7, setSem7] = useState<number | undefined>(studentState.sem7);
  const [sem8, setSem8] = useState<number | undefined>(studentState.sem8);
  const [cgpi, setCgpi] = useState<number | undefined>(studentState.sem2);
  const [hsc, setHsc] = useState(studentState.hsc);
  const [ssc, setSsc] = useState(studentState.ssc);
  const [uploadAvatar, setUploadAvatar] = useState<any>();
  const handleAvatarSelected = (e: any) => {
    const files: any[] = Array.from(e.target.files);
    setUploadAvatar(files[0]);
  };
  const formData = new FormData();

  const onUpdate = async () => {
    const updatedStudent = await fetch(baseURL + "/students", {
      method: "PUT",
      headers: {
        Authorization: `Bearer ${authState.token}`,
      },
      body: JSON.stringify({
        id: studentState.id,
        sem1,
        sem2,
        sem3,
        sem4,
        sem5,
        sem6,
        sem7,
        sem8,
      }),
    })
      .then((res) => res.json())
      .then((data) => data)
      .catch((error) => console.error(error));
    console.log(updatedStudent);
    dispatch({ type: StudentActionTypes.SET_STUDENT, payload: updatedStudent });
  };

  const onUpload = async () => {
    formData.append("avatar", uploadAvatar, uploadAvatar?.name);
    const updatedStudentAvatar = await fetch(baseURL + "/students/avatar", {
      method: "POST",
      headers: {
        Authorization: `Bearer ${authState.token}`,
      },
      body: formData,
    })
      .then((res) => res.json())
      .then((data) => data)
      .catch((error) => console.error(error));
    console.log(updatedStudentAvatar);
    dispatch({ type: StudentActionTypes.SET_STUDENT, payload: updatedStudentAvatar });
  };

  useEffect(() => {
    let count = 1;
    let total = sem1 !== undefined ? sem1 : 0;
    if (sem2 !== undefined) {
      count = 2;
      total += sem2;
    }
    if (sem3 !== undefined) {
      count = 3;
      total += sem3;
    }
    if (sem4 !== undefined) {
      count = 4;
      total += sem4;
    }
    if (sem5 !== undefined) {
      count = 5;
      total += sem5;
    }
    if (sem6 !== undefined) {
      count = 6;
      total += sem6;
    }
    if (sem7 !== undefined) {
      count = 7;
      total += sem7;
    }
    if (sem8 !== undefined) {
      count = 8;
      total += sem8;
    }
    setCgpi(total / count);
  }, [sem1, sem2, sem3, sem4, sem5, sem6, sem7, sem8]);

  const addHighSchoolScores = async () => {
    const updatedStudent = await fetch(baseURL + "/students", {
      method: "PUT",
      headers: {
        Authorization: `Bearer ${authState.token}`,
      },
      body: JSON.stringify({
        id: studentState.id,
        hsc: hsc,
        ssc: ssc,
      }),
    })
      .then((res) => res.json())
      .then((data) => data)
      .catch((error) => console.error(error));
    console.log(updatedStudent);
    dispatch({ type: StudentActionTypes.SET_STUDENT, payload: updatedStudent });
  };

  return (
    <Box display='flex' justifyContent='center'>
      <Box p={2} className={classes.cardWidth}>
        <Card>
          <Box display='flex' p={2}>
            <Avatar
              alt={studentState.firstName}
              className={classes.large}
              src={baseURL + studentState.avatar}
            />
            <Typography
              variant='h6'
              noWrap
              style={{ padding: "1rem", fontFamily: "Playfair Display" }}
            >
              {studentState.firstName + " " + studentState.lastName}
            </Typography>
          </Box>
          <Divider variant='middle' style={{ backgroundColor: theme.palette.primary.main }} />
          <CardContent>
            <Box px={2}>
              <Typography paragraph noWrap>
                Phone number: {studentState.phoneNumber}
              </Typography>
              <Typography paragraph noWrap>
                UIN number: {studentState.uinNumber}
              </Typography>
              <Typography paragraph noWrap>
                Gender: {studentState.gender}
              </Typography>
              <Typography style={{ maxWidth: "80%" }} paragraph noWrap>
                Email: {studentState.email}
              </Typography>
              <Typography paragraph>Department: {studentState.department}</Typography>
              <Typography paragraph>Program: {studentState.program}</Typography>
              <Typography paragraph>Current Address: {studentState.currentAddress}</Typography>
              <Typography paragraph>Home Address: {studentState.homeAddress}</Typography>
              <Divider
                variant='fullWidth'
                style={{ backgroundColor: theme.palette.primary.main, marginBottom: "1.3rem" }}
              />
              <Box display='flex' justifyContent='space-between'>
                <TextField
                  label='HSC'
                  size='small'
                  variant='outlined'
                  onChange={(e: any) => setHsc(e.target.value)}
                />
                <TextField
                  label='SSC'
                  size='small'
                  variant='outlined'
                  onChange={(e: any) => setSsc(e.target.value)}
                />
                <Button
                  size='small'
                  variant='contained'
                  color='secondary'
                  onClick={addHighSchoolScores}
                >
                  Submit
                </Button>
              </Box>
              <Divider
                variant='fullWidth'
                style={{ backgroundColor: theme.palette.primary.main, margin: "1.3rem 0" }}
              />
              <Grid container spacing={3}>
                <Grid item xs={12} md={9}>
                  <label htmlFor='avatar' style={{ display: "inline-block" }}>
                    <Box display='flex' mr={2} width='auto' alignItems='center'>
                      <Typography variant='caption' style={{ paddingRight: "10px" }}>
                        Update Avatar
                      </Typography>
                    </Box>
                  </label>
                  <input
                    type='file'
                    id='avatar'
                    onChange={handleAvatarSelected}
                    accept='.jpeg,.png,.jpg'
                  />
                </Grid>
                <Grid item xs={12} md={3}>
                  <Button size='small' variant='contained' color='secondary' onClick={onUpload}>
                    Upload
                  </Button>
                </Grid>
              </Grid>
              <Divider
                variant='fullWidth'
                style={{
                  backgroundColor: theme.palette.primary.main,
                  marginTop: "1rem",
                  marginBottom: "1.5rem",
                }}
              />
              <Grid container spacing={3} style={{ marginBottom: ".5rem" }}>
                <Grid item xs={4} md={3}>
                  <TextField
                    label='Sem 1'
                    value={sem1}
                    type='number'
                    variant='outlined'
                    size='small'
                    InputProps={{
                      inputProps: {
                        max: 10,
                        min: 0,
                      },
                    }}
                    onChange={(e) => setSem1(parseInt(e.target.value))}
                  />
                </Grid>
                <Grid item xs={4} md={3}>
                  <TextField
                    value={sem2}
                    type='number'
                    label='Sem 2'
                    variant='outlined'
                    InputProps={{
                      inputProps: {
                        max: 10,
                        min: 0,
                      },
                    }}
                    size='small'
                    onChange={(e) => setSem2(parseInt(e.target.value))}
                  />
                </Grid>
                <Grid item xs={4} md={3}>
                  <TextField
                    value={sem3}
                    type='number'
                    label='Sem 3'
                    variant='outlined'
                    size='small'
                    InputProps={{
                      inputProps: {
                        max: 10,
                        min: 0,
                      },
                    }}
                    onChange={(e) => setSem3(parseInt(e.target.value))}
                  />
                </Grid>
                <Grid item xs={4} md={3}>
                  <TextField
                    value={sem4}
                    label='Sem 4'
                    type='number'
                    InputProps={{
                      inputProps: {
                        max: 10,
                        min: 0,
                      },
                    }}
                    variant='outlined'
                    size='small'
                    onChange={(e) => setSem4(parseInt(e.target.value))}
                  />
                </Grid>
                <Grid item xs={4} md={3}>
                  <TextField
                    value={sem5}
                    label='Sem 5'
                    variant='outlined'
                    type='number'
                    size='small'
                    InputProps={{
                      inputProps: {
                        max: 10,
                        min: 0,
                      },
                    }}
                    onChange={(e) => setSem5(parseInt(e.target.value))}
                  />
                </Grid>
                <Grid item xs={4} md={3}>
                  <TextField
                    value={sem6}
                    label='Sem 6'
                    type='number'
                    variant='outlined'
                    size='small'
                    InputProps={{
                      inputProps: {
                        max: 10,
                        min: 0,
                      },
                    }}
                    onChange={(e) => setSem6(parseInt(e.target.value))}
                  />
                </Grid>
                <Grid item xs={4} md={3}>
                  <TextField
                    value={sem7}
                    label='Sem 7'
                    variant='outlined'
                    type='number'
                    InputProps={{
                      inputProps: {
                        max: 10,
                        min: 0,
                      },
                    }}
                    size='small'
                    onChange={(e) => setSem7(parseInt(e.target.value))}
                  />
                </Grid>
                <Grid item xs={4} md={3}>
                  <TextField
                    value={sem8}
                    label='Sem 8'
                    variant='outlined'
                    type='number'
                    InputProps={{
                      inputProps: {
                        max: 10,
                        min: 0,
                      },
                    }}
                    size='small'
                    onChange={(e) => setSem8(parseInt(e.target.value))}
                  />
                </Grid>
              </Grid>
              <Box p={2} display='flex' justifyContent='space-between' alignItems='center'>
                <Typography>CGPI: {cgpi?.toFixed(2)}</Typography>
                <a href={baseURL + studentState.resume} target='_blank'>
                  View Resume
                </a>
              </Box>
              <Button variant='contained' color='secondary' onClick={onUpdate}>
                Update CGPA
              </Button>
            </Box>
          </CardContent>
        </Card>
      </Box>
    </Box>
  );
}

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    large: {
      width: theme.spacing(7),
      height: theme.spacing(7),
    },
    cardWidth: {
      padding: theme.spacing(1),
      [theme.breakpoints.down("sm")]: {
        width: "100%",
      },
      [theme.breakpoints.up("md")]: {
        width: "80%",
      },
    },
  })
);

export default StudentProfile;
