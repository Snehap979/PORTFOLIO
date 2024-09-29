import { Typography, Grid as Grid2 } from '@mui/material';
import React from 'react';

const ContactDetails = () => {
  return (
    <Grid2 container direction="row" spacing={3}>
      <Grid2 item>
        <Typography variant="h5" sx={{ fontWeight: 'bold' }}>
          CONTACT
        </Typography>
      </Grid2>
      <Grid2 item>
        <Typography>snehap9779@gmail.com</Typography>
      </Grid2>
      <Grid2 item>
        <Typography>+16576267472</Typography>
      </Grid2>
      <Grid2 item>
        <Typography>
          <a
            href="https://github.com/Snehap979"
            target="_blank"
            rel="noopener noreferrer"
            style={{ textDecoration: 'none', color: '#0073b1' }} // Custom color for GitHub
          >
            https://github.com/Snehap979
          </a>
        </Typography>
      </Grid2>
      <Grid2 item>
        <Typography>
          <a
            href="http://www.linkedin.com/in/sneha-priyadarshan"
            target="_blank"
            rel="noopener noreferrer"
            style={{ textDecoration: 'none', color: '#0A66C2' }} // Custom color for LinkedIn
          >
            http://www.linkedin.com/in/sneha-priyadarshan
          </a>
        </Typography>
      </Grid2>
    </Grid2>
  );
};

export default ContactDetails;
