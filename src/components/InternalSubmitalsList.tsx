import { Grid, IconButton } from '@material-ui/core';
import React from 'react';
import { InternalSubmitalCardProps } from '../types/CompanyTypes/InternalSubmitalCardProps';
import InternalSubmitalCard from './InternalSubmitalCard';
import ArrowBackIcon from '@material-ui/icons/ArrowBack';
import { useHistory } from 'react-router-dom';

const sampleResponse: InternalSubmitalCardProps[] = [
  {
    studentName: 'John Doe',
    uinNumber: '161P000',
    cgpi: '7.3',
    resume: 'link',
  },
  {
    studentName: 'Sina Doe',
    uinNumber: '161P020',
    cgpi: '9.6',
    resume: 'link',
  },
];
function InternalSubmitalsList() {
  const history = useHistory();
  return (
    <div>
      <IconButton onClick={() => history.replace('/company-dashboard/internal-submitals')}>
        <ArrowBackIcon />
      </IconButton>
      <Grid container spacing={2}>
        {sampleResponse.map(
          ({ studentName, uinNumber, cgpi, resume }: InternalSubmitalCardProps) => (
            <Grid item xs={12} md={6} key={uinNumber}>
              <InternalSubmitalCard
                studentName={studentName}
                uinNumber={uinNumber}
                cgpi={cgpi}
                resume={resume}
              />
            </Grid>
          )
        )}
      </Grid>
    </div>
  );
}

export default InternalSubmitalsList;
