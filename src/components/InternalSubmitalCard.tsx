import { Card, CardContent, Typography } from '@material-ui/core';
import React from 'react';
import { InternalSubmitalCardProps } from '../types/CompanyTypes/InternalSubmitalCardProps';

function InternalSubmitalCard({ studentName, cgpi, uinNumber, resume }: InternalSubmitalCardProps) {
  return (
    <div>
      <Card raised>
        <CardContent>
          <Typography paragraph noWrap>
            Name: {studentName}
          </Typography>
          <Typography paragraph noWrap>
            CGPI: {cgpi}
          </Typography>
          <Typography paragraph noWrap>
            UIN Number: {uinNumber}
          </Typography>
          <a href={resume} target='blank'>
            View Resume
          </a>
        </CardContent>
      </Card>
    </div>
  );
}

export default InternalSubmitalCard;
