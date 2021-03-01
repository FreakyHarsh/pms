import { Avatar, Button, Card, CardActions, CardHeader, Box, Typography } from '@material-ui/core';
import React, { useEffect, useState } from 'react';

function Applications() {
  const [students, setStudents] = useState<any>();
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
      {students?.map((student: any) => student)}
      <Card>
        <CardHeader
          avatar={
            <Avatar
              aria-label='recipe'
              alt='d'
              src='https://randomuser.me/api/portraits/men/37.jpg'
            />
          }
          title='Harsh Boricha'
          subheader='UIN: 161P006'
        />
        <CardActions style={{ justifyContent: 'flex-end' }}>
          <Button size='small' color='primary'>
            Accept
          </Button>
        </CardActions>
      </Card>
    </div>
  );
}

export default Applications;
