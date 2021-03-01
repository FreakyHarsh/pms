import {
  Avatar,
  Button,
  Card,
  CardActions,
  CardHeader,
  Box,
  Typography,
  CardContent,
  Grid,
} from '@material-ui/core';
import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { RootState } from '../../index';

function Applications() {
  const [students, setStudents] = useState<any>();
  const authState = useSelector((state: RootState) => state.authState);

  const onApprove = async (id: string) => {
    const approve = await fetch(baseURL + '/admin/toggle', {
      method: 'POST',
      headers: {
        Authorization: `Bearer ${authState.token}`,
      },
      body: JSON.stringify({
        studentId: id,
      }),
    })
      .then((res) => res.json())
      .then((data) => data)
      .catch((error) => console.error(error));
    console.log(approve);
  };
  useEffect(() => {
    const getApplications = async () => {
      const post = await fetch(baseURL + '/students')
        .then((res) => res.json())
        .then((data) => data)
        .catch((error) => console.error(error));
      console.log(post);
      setStudents(post);
    };
    getApplications();
  }, []);
  return (
    <div>
      {students?.map(
        (student: any) =>
          !student.approved && (
            <Grid item xs={12} md={6} key={student.id}>
              {console.log(student)}
              <Card>
                <CardHeader
                  avatar={<Avatar alt={student.firstName} src={student.avatar} />}
                  title={student.firstName + ' ' + student.lastName}
                  subheader={'UIN: ' + student.uinNumber}
                />
                <CardContent>
                  <Typography>Department: {student.department}</Typography>
                  <Typography>Program: {student.program}</Typography>
                  <Typography>Gender: {student.gender}</Typography>
                  <Typography>Email: {student.email}</Typography>
                </CardContent>
                <CardActions style={{ justifyContent: 'flex-end' }}>
                  <Button size='small' color='primary' onClick={() => onApprove(student.id)}>
                    Approve
                  </Button>
                </CardActions>
              </Card>
            </Grid>
          )
      )}
    </div>
  );
}

export default Applications;
