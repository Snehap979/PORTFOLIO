import React from 'react';
import { Container, Grid , Typography, List, ListItem, ListItemText } from '@mui/material';

const experiences = [
  {
    company: "O4S",
    title: "Software Engineer",
    dates: "May 2022 - July 2022",
    details: [
      "Worked on the Gynger application, a loyalty points app with over 50,000 downloads and a 3.9+ rating on Play Store.",
      "Implemented a feature to track stock-keeping units for retailers and inventory using Node.js.",
      "Enhanced bug-fixing processes post-production deployment with automated testing scripts, resulting in a 25% reduction in bug resolution time and a 20% increase in overall system stability."
    ]
  },
  {
    company: "Accenture",
    title: "Application Development Analyst",
    dates: "Feb 2021 - May 2022",
    details: [
      "Implemented a robust notification system that notifies more than 80 million COX customers during their billing cycle using AWS SNS.",
      "Utilized AWS Lambda to create serverless billing functions for backend processing achieving 99.9% uptime and reducing operational costs by 20%.",
      "Increased the system's capacity to handle input requests by 20% through the integration of AWS SQS as a traffic management system."
    ]
  },
  {
    company: "Exathought",
    title: "Software Developer",
    dates: "Sept 2018 - Oct 2020",
    details: [
      "Developed the mobile application Saral using React Native, achieving over 10,000 downloads on the App Store and Play Store.",
      "Spearheaded the development of a full-stack progressive web application (PWA) for SAI Pet Preforms using React, Node.js, Express.js, and MongoDB.",
      "Designed a modular microservices architecture for product, employee, and order management, secured with JWT token-based authorization using AWS Cognito."
    ]
  }
];

const Experience = () => {
  return (
    <Grid container>
        <Typography variant="h5" fontWeight="bold" style={{ marginBottom: 4 }}>
            EXPERIENCE
        </Typography>
      {experiences.map((exp, index) => (
        <Grid container spacing={2} key={index} style={{ marginBottom: "20px" }}>
          {/* Company Column */}
          <Grid item xs={12} sm={4}>
            <Typography variant="h6" fontWeight="bold">
              {exp.company}
            </Typography>
            <Typography variant="body2">{exp.title}</Typography>
            <Typography variant="body2">{exp.dates}</Typography>
          </Grid>
          <Grid item xs={12} sm={8}>
            <List>
              {exp.details.map((detail, idx) => (
                <ListItem key={idx} sx={{ padding: '2px 0' }}>
                  <ListItemText primary={`• ${detail}`} />
                </ListItem>
              ))}
            </List>
          </Grid>
        </Grid>
      ))}
    </Grid>
  );
};

export default Experience;
