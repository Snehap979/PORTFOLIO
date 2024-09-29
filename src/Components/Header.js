import { Typography,Grid2 as Grid } from "@mui/material";

const Header = () => {
    return(
        <Grid item>
             <Typography variant="h4" sx={{ fontWeight: 'bold',marginBottom:8 }}>SNEHA PRIYADARSHAN</Typography>
        <Typography variant="h5" sx={{ fontWeight: 'bold',marginBottom:2 }}>FULLSTACK WEB DEVELOPER</Typography>
        <Typography sx={{ fontWeight: 'bold'}}>4+ Years </Typography>
    
        <Typography style={{}} variant="body2">
          As a dedicated full-stack developer, I excel in coding, designing, and
          implementing robust software solutions. My strong management and
          organizational skills enhance team collaboration and project execution.
          With a keen eye for detail and a commitment to continuous learning, I
          ensure high-quality deliverables and effective problem-solving throughout
          the development lifecycle.
        </Typography>
      </Grid>
    )

};

export default Header;