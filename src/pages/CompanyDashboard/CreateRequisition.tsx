import {
  Box,
  Button,
  Card,
  createStyles,
  FormControl,
  Grid,
  InputAdornment,
  InputLabel,
  makeStyles,
  MenuItem,
  OutlinedInput,
  Select,
  TextField,
  Theme,
} from "@material-ui/core";
import React, { useEffect, useState } from "react";
import { formatYMD } from "../../utils/formatYMD";
import { useSelector } from "react-redux";
import { RootState } from "../../index";
import { useParams, useHistory } from "react-router-dom";
import { getRequisitionDetail } from "../../utils/getRequisitionDetail";
import { JobDetailProp } from "../../types/Jobs/JobDetailProps";

function CreateRequisition() {
  const history = useHistory();
  const classes = useStyles();
  const [position, setPosition] = useState("");
  const [noOfPositions, setNoOfPositions] = useState<number>();
  const [salary, setSalary] = useState<number>();
  const [jobType, setJobType] = useState<string>("");
  const [location, setLocation] = useState("");
  const [endDate, setEndDate] = useState(formatYMD(new Date()));
  const [description, setDescription] = useState("");
  const [minCgpa, setMinCgpa] = useState(6);

  const params = useParams<{ id: string }>();
  const companyState = useSelector((state: RootState) => state.companyState);
  const authState = useSelector((state: RootState) => state.authState);
  useEffect(() => {
    const populate = async () => {
      const jobDetail: JobDetailProp = await getRequisitionDetail(params.id);
      setPosition(jobDetail.position);
      setNoOfPositions(jobDetail.openings);
      setSalary(jobDetail.ctc);
      setJobType(jobDetail.type);
      setLocation(jobDetail.location);
      setEndDate(jobDetail.lastDayOfSummission?.slice(0, 10));
      setDescription(jobDetail.description);
    };
    populate();
  }, []);
  const onUpdateRequisition = async () => {
    const post = await fetch(baseURL + "/jobs/" + params.id, {
      method: "PUT",
      headers: {
        Authorization: `Bearer ${authState.token}`,
      },
      body: JSON.stringify({
        companyId: companyState.id,
        title: "hello",
        position: position,
        type: jobType,
        openings: noOfPositions,
        ctc: salary,
        location: location,
        lastDayOfSummission: new Date(endDate).getTime(),
        description: `<pre>${description}</pre>`,
      }),
    })
      .then((res) => res.json())
      .then((data) => data)
      .catch((error) => console.error(error));
    console.log(post);
    history.push("/company-dashboard");
  };
  const onCreateRequisition = async () => {
    const post = await fetch(baseURL + "/jobs", {
      method: "POST",
      headers: {
        Authorization: `Bearer ${authState.token}`,
      },
      body: JSON.stringify({
        companyId: companyState.id,
        title: "hello",
        position: position,
        type: jobType,
        openings: noOfPositions,
        ctc: salary,
        location: location,
        lastDayOfSummission: new Date(endDate).getTime(),
        description: description,
      }),
    })
      .then((res) => res.json())
      .then((data) => data)
      .catch((error) => console.error(error));
    console.log(post);
    history.push("/company-dashboard");
  };
  const onJobTypeSelect = (e: any) => {
    setJobType(e.target.value);
  };

  return (
    <Box display='flex' justifyContent='center'>
      <Card className={classes.cardWidth}>
        <Box p={3}>
          <Grid container spacing={3}>
            <Grid item xs={12} md={6}>
              <TextField
                label='Position'
                placeholder='Eg: Data Analyst'
                variant='outlined'
                value={position}
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
                value={noOfPositions}
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
                  <MenuItem value={"Full Time"}>Full Time</MenuItem>
                  <MenuItem value={"Part Time"}>Part Time</MenuItem>
                  <MenuItem value={"Internship"}>Internship</MenuItem>
                  <MenuItem value={"Contract"}>Contract</MenuItem>
                  <MenuItem value={"Other"}>Other</MenuItem>
                </Select>
              </FormControl>
            </Grid>
            <Grid item xs={6}>
              <FormControl fullWidth variant='outlined' size='small' id='salary'>
                <InputLabel htmlFor='salary'>Salary</InputLabel>
                <OutlinedInput
                  id='salary'
                  type='number'
                  value={salary}
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
                value={location}
                onChange={(e) => setLocation(e.target.value)}
              />
            </Grid>
            <Grid item xs={12} md={6}>
              <TextField
                label='Last date to apply'
                type='date'
                variant='outlined'
                size='small'
                fullWidth
                InputLabelProps={{
                  shrink: true,
                }}
                onChange={(e) => setEndDate(e.target.value)}
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                label='Minimum CGPA required'
                type='number'
                variant='outlined'
                defaultValue={6}
                size='small'
                fullWidth
                onChange={(e: any) => setMinCgpa(e.target.value)}
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
                value={description}
                onChange={(e) => setDescription(e.target.value)}
              />
            </Grid>
            <Grid item xs={12}>
              <Box textAlign='end'>
                <Button
                  color='secondary'
                  variant='contained'
                  onClick={params.id ? onUpdateRequisition : onCreateRequisition}
                >
                  {params.id ? "Update" : "Create"}
                </Button>
              </Box>
            </Grid>
          </Grid>
        </Box>
      </Card>
    </Box>
  );
}

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    cardWidth: {
      padding: theme.spacing(1),
      [theme.breakpoints.down("sm")]: {
        width: "100%",
      },
      [theme.breakpoints.up("md")]: {
        width: "90%",
        height: "100%",
      },
    },
  })
);

export default CreateRequisition;
