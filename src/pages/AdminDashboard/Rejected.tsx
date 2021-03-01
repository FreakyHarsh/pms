import {
  Grid,
  Card,
  CardHeader,
  Avatar,
  CardContent,
  Typography,
  CardActions,
  Button,
} from '@material-ui/core';
import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { RootState } from '../..';

function Rejected() {
  const [students, setStudents] = useState<any>();
  const authState = useSelector((state: RootState) => state.authState);

  const onReject = async (id: string) => {
    const reject = await fetch(baseURL + '/admin/toggle', {
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
    console.log(reject);
  };
  useEffect(() => {
    const getApproved = async () => {
      const post = await fetch(baseURL + '/students/unapproved')
        .then((res) => res.json())
        .then((data) => data)
        .catch((error) => console.error(error));
      console.log(post);
      setStudents(post);
    };
    getApproved();
  }, []);
  return (
    <div>
      {students?.map((student: any) => (
        <Grid item xs={12} md={6} key={student.id}>
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
              <Button size='small' color='primary' onClick={() => onReject(student.id)}>
                Reject
              </Button>
            </CardActions>
          </Card>
        </Grid>
      ))}
    </div>
  );
}

export default Rejected;
