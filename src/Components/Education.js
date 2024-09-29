import React from 'react'
import {Grid2 as Grid,Typography,List,ListItem, ListItemText} from '@mui/material'

const list=[
    {
        "university":"CALIFORNIA STATE UNIVERSITY FULLERTON",
        "degree":"MASTER’S IN COMPUTER SCEINCE",
        "year":"Aug 2022 - May 2024",
        "gpa":"3.9"
    },
    {
        "university":"RNS INSTITUTE OF TECHNOLOGY",
        "degree":"B.E IN COMPUTER SCEINCE",
        "year":"Aug 2014 - June 2018",
        "gpa":"3.9"
    },
]
   
const Education=()=>{
return (
  <Grid>
     <Typography variant="h5" fontWeight="bold" style={{ marginBottom: 4 }}>
            EDUCATION
        </Typography>
    <Typography variant='h6'>
   
    </Typography>
    <Grid style={{marginBottom:3}}>
    {list.map((item)=>{
      return(<ListItemText 
        primary={
            <Typography variant="body1" sx={{fontWeight:"bold",}}> {item.university}</Typography>}
           
        sx={{marginBottom:3,fontWeight:"bold"}}
        secondary={
            <>
              <Typography  variant="body2" sx={{fontWeight:"bold"}}>
                {item.degree}
              </Typography>
              <Typography variant="body2">
                GPA: {item.gpa}
              </Typography>
              <Typography  variant="body2">
                {item.year}
              </Typography>
            </>
          }>        
        </ListItemText> 
      
      ) 
      
    })}
    </Grid>
   
  </Grid>
)
}

export default Education





