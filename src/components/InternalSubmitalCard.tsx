import { Button, Card, CardActions, CardContent, Typography } from "@material-ui/core";
import React from "react";

import { InternalSubmitalCardProps } from "../types/CompanyTypes/InternalSubmitalCardProps";

function InternalSubmitalCard({
  studentName,
  cgpi,
  uinNumber,
  resume,
  studentId,
  onApproved,
  onRejected,
}: InternalSubmitalCardProps) {
  const onRejectStudent = (id: string) => {
    alert(id);
  };
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
        <CardActions style={{ justifyContent: "flex-end" }}>
          <Button style={{ color: "#5DD86E" }} size='small' onClick={onApproved}>
            Accept
          </Button>
          <Button style={{ color: "#F35050" }} size='small' onClick={onRejected}>
            Reject
          </Button>
        </CardActions>
      </Card>
    </div>
  );
}

export default InternalSubmitalCard;
