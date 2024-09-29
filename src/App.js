import React from "react";
import Header from "./Components/Header";
import Experience from "./Components/Experience";
import Project from "./Components/Project";
import Education from "./Components/Education";
import Achievement from "./Components/Acheivement";
import Grid from "@mui/material/Grid2";
import degree from "./images/degree.png";
import { Card, Divider } from "@mui/material";
import ContactDetails from "./Components/Contacts";

const App = () => {
  return (
    <Grid
      container
      direction="column"
      justifyContent="center"
      spacing={2}
      sx={{
        // minHeight: "100vh",
        maxWidth: "50%",
        margin: "auto",
      }}
    >
      <Grid item sx={{ border: "2px solid yellow" }}>
        <Card style={{ height: 450 }}>
          <img src={degree}></img>
        </Card>
      </Grid>
      <Grid item>
        <Header />
      </Grid>
      <Divider>
        
        </Divider>
      <Grid item>
        <Experience />
      </Grid>
      <Divider>
        
        </Divider>
      <Grid item >
        <Project />
      </Grid>
      <Divider>

      </Divider>
      <Grid item>
        <Education />
      </Grid>
 <Divider>
        
      </Divider>
      <Grid item>
        <Achievement />
      </Grid>
      <Divider>

      </Divider>
      <Grid item>
     <ContactDetails>

     </ContactDetails>
      </Grid>
      <Divider>
        
      </Divider>
    </Grid>
  );
};

export default App;
