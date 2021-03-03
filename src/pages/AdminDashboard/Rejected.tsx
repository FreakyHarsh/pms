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
import { useHistory, useRouteMatch } from 'react-router-dom';

function Rejected() {
  const history = useHistory();
  const [students, setStudents] = useState<any>();
  const [reload, setReload] = useState();
  const authState = useSelector((state: RootState) => state.authState);
  const match = useRouteMatch();
  const onApprove = async (id: string) => {
    const res = await fetch(baseURL + '/admin/toggle', {
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
    console.log(res);
    setReload(res);
  };

  const onDelete = async (id: string) => {
    const res = await fetch(baseURL + '/students/' + id, {
      method: 'DELETE',
      headers: {
        Authorization: `Bearer ${authState.token}`,
      },
    })
      .then((res) => res.json())
      .then((data) => data)
      .catch((error) => console.log(error));
    console.log(res);
    setReload(res);
  };
  useEffect(() => {
    const getRejected = async () => {
      const post = await fetch(baseURL + '/students/unapproved')
        .then((res) => res.json())
        .then((data) => data)
        .catch((error) => console.error(error));
      setStudents(post);
    };
    getRejected();
  }, [reload]);

  return (
    <div>
      <Grid container spacing={4}>
        {students?.map((student: any) => (
          <Grid item xs={12} md={6} key={student.id}>
            <Card>
              <CardHeader
                avatar={<Avatar alt={student.firstName} src={baseURL + student.avatar} />}
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
                <Button size='small' style={{ color: 'red' }} onClick={() => onDelete(student.id)}>
                  Delete
                </Button>
              </CardActions>
            </Card>
          </Grid>
        ))}
      </Grid>
    </div>
  );
}

export default Rejected;
