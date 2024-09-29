import React, { useState } from "react";
import {
  Card,
  Grid,
  Typography,
  CardMedia,
  CardContent,
  Divider,
  Modal,
  Box,
  Fade,
  Button,
} from "@mui/material";
import cox from "../images/cox.png";
import gynger from "../images/gynger.png";
import sai from "../images/SMERP.png";
import saral from "../images/saral.png";
import saralWeb from "../images/saralWeb.png";
import smartfoodsafe from "../images/SFS.png";

const projects = [
  {
    name: "GYNGER",
    image: gynger,
    description: `GYNGER MOBILE APP: Loyalty Points and Inventory Management

Gynger is a popular loyalty points app with over 50,000 downloads and a 3.9+ rating on the Play Store. It offers users comprehensive visibility into loyalty scheme details, including earning ratios, targets, and product commissions for past, current, and upcoming schemes.

Key features implemented include:
• Stock Keeping Units (SKU) tracking for improved retailer inventory management
• Enhanced media integration, optimizing image and PDF retrieval from AWS S3 buckets
• Successful bug resolution and issue fixes during production deployment

The app was developed using React Native for cross-platform compatibility, integrated with AWS S3 for efficient media handling. Backend integration involved implementing API calls for SKU tracking and inventory management, ensuring seamless data communication and integrity.

Quality assurance processes included thorough testing, bug identification and resolution, and collaboration with QA teams for regression testing and fix validation.

Key achievements:
• Contributed to a highly-rated app with significant user adoption
• Successfully implemented features enhancing inventory management and media integration
• Ensured smooth production deployment through effective bug resolution and performance optimization

This project showcases proficiency in mobile app development, cloud integration, and maintaining high-quality software throughout the development lifecycle.`,
    url: "https://play.google.com/store/apps/details?id=com.evato.o4s.tpo&hl=en_US"
  },
  { name: "SARAL", image: saral, description: `Mobile Application Development:
• Project Overview:
    ◦ Developed a front-end mobile application using React Native for managing various business operations such as viewing live stock units, stock summaries, invoices, sales order creation, sales invoice generation, and receipts generation.
• Key Features Implemented:
    ◦ Stock Management:
        ▪ Created interfaces to view live stock units and stock summaries, ensuring real-time data updates for inventory management.
    ◦ Sales Order & Invoice Generation:
        ▪ Designed and developed pages for creating sales orders and generating sales invoices, streamlining the sales process.
    ◦ Receipts Generation:
        ▪ Built functionality for generating receipts, providing a comprehensive solution for financial transactions.
• Shopping Cart Feature:
    ◦ Developed a robust shopping cart feature enabling users to add items to their cart, review their selections, and proceed to checkout.
• User Engagement and Data Visualization:
    ◦ Improved user engagement by integrating a Dashboard for data visualization using reusable React components and Charts.js. This provided users with insightful data representation and analytics.
Technology Stack & Tools:
• React JS & Material UI:
    ◦ Utilized React JS for developing a dynamic and responsive user interface.
    ◦ Employed Material UI for creating visually appealing and user-friendly screens, ensuring a consistent and modern look and feel.
• Unit Testing:
    ◦ Conducted comprehensive unit testing using Jest, ensuring the reliability and performance of the application components.`, url: "https://play.google.com/store/apps/details?id=com.saralaccountsmobile&pcampaignid=web_share" },
  { name: "COX", image: cox, description: `COX COMMUNICATIONS: Notification System Development and Deployment
• Project Overview:
    ◦ Led a team of 10 engineers in the design, development, and deployment of a robust notification system utilizing AWS SNS. This system successfully notified over 80 million COX customers during their billing cycle, seamlessly integrating with the Adobe Channel (CNS-ADOBE Link). This achievement earned recognition with the prestigious Extra Mile Award for outstanding client contribution.
• Key Features and Implementations:
    ◦ Notification System:
        ▪ Architected and developed a serverless solution using AWS Lambda to handle customer notification logic within the billing subscriber process.
        ▪ Increased the channel of input requests into the system by 20% using AWS SQS as a traffic management system.
    ◦ Security Best Practices:
        ▪ Initiated security best practices like input validation and data encryption to safeguard sensitive customer information within the notification system and throughout the backend architecture.
        ▪ Deployed security measures through YAML files, ensuring a secure and efficient deployment process.
    ◦ Operational Efficiency:
        ▪ Automated routine tasks such as cloud monitoring and database transactions using scripting and cloud-based tools, improving operational efficiency and reducing manual workload.
    ◦ Software Release and Maintenance:
        ▪ Oversaw software release deployments, monitored system performance, and addressed maintenance tasks, including updates, patches, and improvements.
• Achievements:
    ◦ Successfully notified over 80 million customers during their billing cycle.
    ◦ Earned the prestigious Extra Mile Award for outstanding client contribution.
    ◦ Increased input request capacity by 20% using AWS SQS.
Technology Stack & Tools:
• Backend:
    ◦ Utilized AWS SNS for the notification system and AWS Lambda for handling notification logic.
    ◦ Used AWS SQS for traffic management to increase the channel of input requests.
    ◦ Implemented security measures, including input validation and data encryption, deploying through YAML files.
• Operational Automation:
    ◦ Automated routine tasks using scripting and cloud-based tools for cloud monitoring and database transactions.
• Front-End Testing:
    ◦ Built a testing suite using React JS for the front end, ensuring comprehensive testing and reliability.
Leadership and Team Management:
• Led a team of 10 engineers, coordinating design, development, and deployment efforts.
• Ensured effective communication and collaboration within the team, fostering a productive work environment.
• Oversaw project timelines, deliverables, and milestones, ensuring successful project completion.`, url: "https://www.cox.com/residential/home.html" },
  { name: "SMERP", image: sai, description: `SMERP: Full-Stack Progressive Web Application for Enterprise Planning
• Project Overview:
    ◦ Developed a robust full-stack progressive web application named SMERP for a prominent manufacturer of PET preforms. The manufacturer utilizes state-of-the-art PET injection molding machines and newly acquired molds for the production of its products.
• Key Features and Microservices Implemented:
    ◦ Order Management:
        ▪ Designed and implemented the order management system using Node.js and RESTful API integration, allowing efficient tracking and processing of customer orders.
    ◦ Product Management:
        ▪ Developed the product management system to handle the entire lifecycle of products from creation to maintenance, ensuring accurate and up-to-date product information.
    ◦ Employee Management:
        ▪ Built an employee management system to manage employee records, roles, and responsibilities, streamlining human resource operations.
    ◦ Customer Management:
        ▪ Implemented a customer management module to maintain detailed records of customer interactions and transactions, enhancing customer relationship management.
• Dynamic Filtering:
    ◦ Enhanced the dynamic filter component to enable users to refine data based on various criteria, improving data accessibility and user experience.
• User Engagement and Data Visualization:
    ◦ Leveraged user engagement by integrating a Dashboard for data visualization using reusable React components and Charts.js. This provided users with insightful data representation and analytics, facilitating better decision-making.
Technology Stack & Tools:
• Front-End:
    ◦ Utilized React JS for developing a dynamic and responsive user interface.
    ◦ Employed Material UI to create visually appealing and user-friendly screens, ensuring a consistent and modern look and feel.
• Back-End:
    ◦ Implemented server-side functionality using Node.js.
    ◦ Developed RESTful APIs to facilitate communication between the front-end and back-end, ensuring seamless data flow and integration.
• CI/CD Pipeline Automation:
    ◦ Developed a Python script to automate the Continuous Integration/Continuous Deployment (CI/CD) pipeline, facilitating the automated steps of building, testing, and deploying the application. This ensured a seamless and efficient deployment process, minimizing downtime and enhancing productivity.
• Unit Testing:
    ◦ Conducted comprehensive unit testing using Jest, ensuring the reliability and performance of the application components.`, url: "https://saipetpreforms.com/" },
  { name: "SMART FOOD SAFE", image: smartfoodsafe, description: `SMART FARM: Full-Stack Progressive Web Application for Real-Time Farm Traceability
• Project Overview:
    ◦ SmartFoodSafe provides software solutions designed to address various inadequacies in the food industry by bridging the food safety functional gap through advanced technologies. The application leverages React JS, Node.js, MongoDB, and AWS to deliver real-time traceability to the farm.
• Key Features and Implementations:
    ◦ User Authentication and Authorization:
        ▪ Secured the user base using AWS Cognito features to authenticate and authorize users during the onboarding process, ensuring robust security and user management.
    ◦ Weather Widget Integration:
        ▪ Developed a weather widget to display current weather predictions for farmers' fields. Integrated the widget with the AccuWeather API using Node.js for backend data fetching.
    ◦ Field Mapping and Geotagging:
        ▪ Implemented field mapping and geotagging with Google Maps integration to provide better visibility and management of farm locations.
    ◦ Supply Chain Management System:
        ▪ Developed a comprehensive system to manage the supply chain, including orders, deliveries, and supplier coordination. Used Node.js for order processing, delivery scheduling, and supplier management.
Technology Stack & Tools:
• Front-End:
    ◦ Utilized React JS for developing a dynamic and responsive user interface.
    ◦ Employed Material UI to create visually appealing and user-friendly screens, ensuring a consistent and modern look and feel.
• Back-End:
    ◦ Implemented server-side functionality using Node.js.
    ◦ Developed RESTful APIs to facilitate communication between the front-end and back-end, ensuring seamless data flow and integration.
    ◦ Used MongoDB for efficient data storage and retrieval, supporting the application's needs for real-time data management.
• CI/CD Pipeline Automation:
    ◦ Implemented a Continuous Integration/Continuous Deployment (CI/CD) pipeline using Jenkins. Automated the steps of building, testing, and deploying the application, ensuring a seamless and efficient deployment process, minimizing downtime, and enhancing productivity.
• Unit Testing:
    ◦ Conducted comprehensive unit testing using Jest, ensuring the reliability and performance of the application components.`,url: "https://smartfoodsafe.com/smart-farm/" },
  { name: "SARAL WEB APP", image: saralWeb, description: `Web Application Development
• Project Overview:
    ◦ Developed a comprehensive web application using React JS to manage various business operations, including:

        ▪ Viewing live stock units
        ▪ Viewing stock summaries
        ▪ Invoice management
        ▪ Sales order creation
        ▪ Sales invoice generation
        ▪ Receipts generation
• Key Features Implemented:
    ◦ Stock Management:
        ▪ Created interfaces to view live stock units and stock summaries, ensuring real-time data updates for efficient inventory management.
    ◦ Sales Order & Invoice Generation:
        ▪ Designed and developed pages for creating sales orders and generating sales invoices, streamlining the sales process.
    ◦ Receipts Generation:
        ▪ Implemented functionality for generating receipts, providing a comprehensive solution for managing financial transactions.
• Shopping Cart Feature:
    ◦ Developed a robust shopping cart feature enabling users to add items to their cart, review their selections, and proceed to checkout.
• User Engagement and Data Visualization:
    ◦ Enhanced user engagement by integrating a Dashboard for data visualization using reusable React components and Charts.js, providing users with insightful data representation and analytics.
Technology Stack & Tools:
• React JS & Material UI:
    ◦ Utilized React JS for developing a dynamic and responsive user interface.
    ◦ Employed Material UI to create visually appealing and user-friendly screens, ensuring a consistent and modern look and feel.`, url: "https://www.saralaccounts.com/" },
];

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: "80%",
  maxWidth: 600,
  maxHeight: "80vh",
  bgcolor: "background.paper",
  border: "2px solid #000",
  boxShadow: 24,
  p: 4,
  overflowY: "auto",
};

const Project = () => {
  const [open, setOpen] = useState(false);
  const [selectedProject, setSelectedProject] = useState(null);

  const handleClick = (project) => {
    setSelectedProject(project);
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const handleViewProject = (url) => {
    window.open(url, '_blank');
  };

  const formatDescription = (description) => {
    return description.split('\n').map((line, index) => (
      <React.Fragment key={index}>
        {line.trim().startsWith('•') ? (
          <li>{line.substring(1).trim()}</li>
        ) : (
          <Typography paragraph>{line}</Typography>
        )}
      </React.Fragment>
    ));
  };

  return (
    <Grid container direction="column" sx={{ marginBottom: 4 }}>
      <Grid item>
        <Typography variant="h5" sx={{ fontWeight: "bold", marginBottom: 2 }}>
          PROJECTS
        </Typography>
      </Grid>
      <Grid container spacing={4} justifyContent="space-between">
        {projects.map((project, index) => (
          <Grid item key={index} lg={4} md={6} xs={12}>
            <Card
              elevation={6}
              sx={{ borderRadius: "16px", maxWidth: 300, cursor: "pointer" }}
              onClick={() => handleClick(project)}
            >
              <CardMedia
                component="img"
                sx={{
                  height: 120,
                  width: "auto",
                  margin: "auto",
                }}
                image={project.image}
                alt={project.name}
              />
              <Divider />
              <CardContent>
                <Typography>{project.name}</Typography>
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>

      <Modal
        open={open}
        onClose={handleClose}
        closeAfterTransition
        aria-labelledby="modal-title"
        aria-describedby="modal-description"
      >
        <Fade in={open}>
          <Box sx={style}>
            {selectedProject && (
              <>
                <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', mb: 2 }}>
                  <Typography id="modal-title" variant="h6" component="h2">
                    {selectedProject.name}
                  </Typography>
                  <Button
                    variant="contained"
                    color="primary"
                    onClick={() => handleViewProject(selectedProject.url)}
                  >
                    View Project
                  </Button>
                </Box>
                <Divider sx={{ mb: 2 }} />
                <Box id="modal-description" component="div">
                  {formatDescription(selectedProject.description)}
                </Box>
              </>
            )}
          </Box>
        </Fade>
      </Modal>
    </Grid>
  );
};

export default Project;