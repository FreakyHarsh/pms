import { Box, Typography } from "@material-ui/core";
import React from "react";

function TermsAndConditions() {
  return (
    <div style={{ color: "white" }}>
      <Box mb={2}>
        <Typography variant='h4' style={{ fontFamily: "Playfair Display" }}>
          Terms and Conditions
        </Typography>
      </Box>
      <Typography variant='body1'>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolor quis, culpa eligendi
        perspiciatis corrupti ullam placeat sunt sint repellendus id iste neque ducimus quasi
        nostrum reprehenderit illo sed fugit officia?
      </Typography>
    </div>
  );
}

export default TermsAndConditions;
