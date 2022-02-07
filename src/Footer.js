import * as React from 'react';

import CssBaseline from '@mui/material/CssBaseline';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import Link from '@mui/material/Link';
import GlobalStyles from '@mui/material/GlobalStyles';
import Container from '@mui/material/Container';
import {ServerUrl} from './config';

function Copyright(props) {
  return (
    <Typography variant="body2" color="text.secondary" align="center" {...props}>
      {'Copyright © '}
      <Link color="inherit" href={ServerUrl}>
        alivcinema
      </Link>{' '}
      {new Date().getFullYear()}
      {'.'}
    </Typography>
  );
}




const footers = [
  {
    title: 'Company',
    description: [{title:"About Us",url: ServerUrl+"about-us"},
    {title:"Advertiser Sign Up",url: ServerUrl+"business-services/sign-up"},
    {title:"Filmmaker Sign Up",url: ServerUrl+"studio-services/sign-up"},
                  {title:"Contact us",url: ServerUrl+"contact-us"}],
  },
  {
    title: 'Business Services',
    description: [{title:"OTT Consulting",url: ServerUrl+"business-services/ott-consulting"},
    {title:"Advertisement",url: ServerUrl+"business-services/advertisement"}
    ],
  },
  
  {
    title: 'Studio Services',
    description: [
      {title:"Photography",url: ServerUrl+"studio-services/photography"},
      {title:"Video Production",url: ServerUrl+"studio-services/video-production"},
      {title:"Music Production",url: ServerUrl+"studio-services/music-production"}
    ],
  },
  {
    title: 'Legal',
    description: [{title:"Privacy policy",url: ServerUrl+"privacy-policy"},
    {title:"Terms of use",url: ServerUrl+"terms"}],
  },
];

function FooterContent() {
  return (
      <Container
        maxWidth="md"
        component="footer"
        sx={{
          borderTop: (theme) => `1px solid ${theme.palette.divider}`,
          mt: 8,
          py: [3, 6],
        }}
      >
        <Grid container spacing={4} justifyContent="space-evenly">
          {footers.map((footer) => (
            <Grid item xs={6} sm={3} key={footer.title}>
              <Typography variant="h6" color="text.primary" gutterBottom>
                {footer.title}
              </Typography>
              <ul>
                {footer.description.map((item) => (
                  <li key={item}>
                    <Link href={item.url} variant="subtitle1" color="text.secondary">
                      {item.title}
                    </Link>
                  </li>
                ))}
              </ul>
            </Grid>
          ))}
        </Grid>
        <Copyright sx={{ mt: 5 }} />
        </Container>);
}

export default function Footer() {
  return <FooterContent />;
}
