import {
  Avatar,
  Box,
  Button,
  Card,
  CardContent,
  CardHeader,
  Collapse,
  createStyles,
  Divider,
  IconButton,
  makeStyles,
  Theme,
  Typography,
  useTheme,
} from "@material-ui/core";
import ExpandLessIcon from "@material-ui/icons/ExpandLess";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import React, { useState } from "react";
import { useSelector } from "react-redux";

import { RootState } from "..";
import { ViewJobCardProps } from "../types/StudentTypes/ViewJobCardProps";
import { formatToCurrency } from "../utils/formatToCurrency";
import { longDate } from "../utils/longDate";

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    large: {
      width: theme.spacing(7),
      height: theme.spacing(7),
    },
  })
);

function ViewJobCard({
  companyName,
  requisitionID,
  companyProfilePic,
  jobLocation,
  jobPosition,
  jobSalary,
  jobDescription,
  jobLastDayOfSummission,
  onRefreshList,
}: ViewJobCardProps) {
  const theme = useTheme();
  const classes = useStyles();
  const [expanded, setExpanded] = useState(false);
  const authState = useSelector((state: RootState) => state.authState);
  const handleExpandClick = () => {
    setExpanded(!expanded);
  };
  const onApply = async () => {
    const post = await fetch(baseURL + "/applications", {
      method: "POST",
      headers: {
        Authorization: `Bearer ${authState.token}`,
      },
      body: JSON.stringify({
        jobId: requisitionID,
      }),
    })
      .then((res) => res.json())
      .then((data) => data)
      .catch((error) => console.error(error));
    onRefreshList();
    console.log(post);
  };
  return (
    <Box mb={2}>
      <Card raised>
        <CardHeader
          avatar={
            <Avatar aria-label='recipe' className={classes.large} src={companyProfilePic}>
              T
            </Avatar>
          }
          title={
            <Typography variant='body1' color='primary'>
              {companyName}
            </Typography>
          }
          subheader={longDate(jobLastDayOfSummission)}
        />
        <Divider variant='middle' style={{ backgroundColor: theme.palette.primary.main }} />
        <CardContent style={{ paddingBottom: 0 }}>
          <Box style={{ paddingLeft: "1rem" }}>
            <Typography variant='body1' paragraph noWrap>
              Position: {jobPosition}
            </Typography>
            <Typography variant='body1' paragraph noWrap>
              Salary: ₹ {formatToCurrency(jobSalary)}
            </Typography>
            <Typography variant='body1' noWrap>
              Location: {jobLocation}
            </Typography>
          </Box>
          <Box textAlign='end'>
            <IconButton onClick={handleExpandClick} aria-expanded={expanded} aria-label='show more'>
              {expanded ? <ExpandLessIcon /> : <ExpandMoreIcon />}
            </IconButton>
          </Box>
        </CardContent>
        <Collapse in={expanded} timeout='auto' unmountOnExit>
          <CardContent>
            <Typography paragraph align='center'>
              Job Description
            </Typography>
            <Box p={1}>
              <pre style={{ whiteSpace: "pre-line", fontSize: ".9rem", fontFamily: "Roboto" }}>
                {jobDescription}
              </pre>
            </Box>
            <Box textAlign='end'>
              <Button variant='contained' size='small' color='primary' onClick={onApply}>
                Apply
              </Button>
            </Box>
          </CardContent>
        </Collapse>
      </Card>
    </Box>
  );
}

export default ViewJobCard;
