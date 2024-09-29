import React from 'react'
import leetcode from '../images/leetcode.png'
import ace from '../images/ace.jpeg'
import {Card,Grid2 as Grid,Typography,Box, CardContent, CardMedia} from '@mui/material'

const achievements=[
    {
        "name":"ACE AWARD AT ACCENTURE",
        "description":"",
        "image":ace
    },
    {
        "name":"LEETCODE",
        "description":"",
        "image":leetcode
    },
   
]

const Achievement = () => {
    return (
      <Grid container direction="column">
        <Grid>
        <Typography variant={'h5'}  sx={{marginBottom:3,fontWeight:"bold"}}>
            ACHIEVEMENTS
        </Typography>
        </Grid>
        <Grid item container direction="column"  spacing={5} >
        {achievements.map((achievement, index) => (
          <Grid item key={index}>
         <Typography  variant="h6" sx={{fontWeight:"bold"}}>{achievement.name}</Typography>
            <Card
              sx={{
                height: 400,
                width: 600,
                display: 'flex',
                flexDirection: 'column',
                padding:2
              }}
            >
              <CardMedia
                component="img"
                image={achievement.image}
                sx={{
                  flexGrow: 1,          
                  objectFit: 'cover',    
                }}
              />
            </Card>
          </Grid>
        ))}
        </Grid>
       
      </Grid>
    );
  };
  
  export default Achievement;
  