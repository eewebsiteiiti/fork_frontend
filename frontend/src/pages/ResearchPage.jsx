import React from "react";
import Navbar from "../components/BodyNavbar/BodyNavbar";
import Header from "../components/Header";
import { research } from "../HeaderData";
import { Grid, Typography } from "@mui/material";
const ResearchPage = () => {
  return (
    <div>
      <Navbar />
      <Header
        title={research.title}
        description={research.description}
        image={research.image}
      />
   <div className="bg_border">
   <br />
   <br />
   <br />
   <Grid container > 
   <Grid item xs={12} sm={6}>
    <Typography variant='h4' paddingLeft="40%" color={"secondary.main"}>Machine Learning and Deep Learning</Typography>
   <div id="rectangle-l-outside"> <div id="rectangle-l-inside">
   
   <Typography variant="p" fontSize={"0.8rem"}>


<Typography fontWeight="bold">

Faculty Involved:
</Typography>

<list>
    <li>
    Prof. Ram Bilas Pachori
    </li>
    <li>
    Prof. Shaibal Mukherjee
    </li>
    <li>
    Prof. Vivek Kanhangad
    </li>
    <li>
        Prof. Vimal Bhatia    
    </li>
</list>


    </Typography>
   </div> </div>
   </Grid>
   <Grid item xs={12} sm={6}>
   <Typography variant='h4' align="right" paddingRight="40%" color={"secondary.main"}>Bio-Photonics</Typography>
   <div id="rectangle-r-outside">
    <div id="rectangle-r-inside">
    <Typography variant="p" fontSize={"0.8rem"}> 
    <Typography fontWeight="bold">

Faculty Involved:
</Typography>
<list>
    <li>
    Prof. Shaibal Mukherjee
    </li>
    <li>
    Prof. Srivathsan Vasudevan
    </li>
    <li>
    Prof. Mukesh Kumar
    </li>
</list></Typography>
    </div>
   </div>
   </Grid>
   </Grid>
   <br/>
   
   <Grid container > 
   <Grid item xs={12} sm={6}>
    <Typography variant='h4' paddingLeft="40%" color={"secondary.main"}>Photonics</Typography>
   <div id="rectangle-l-outside"> <div id="rectangle-l-inside">
   <Typography variant="p" fontSize={"0.8rem"}> 
    <Typography fontWeight="bold">

Faculty Involved:
</Typography>
<list>
    <li>
    Prof. Srivathsan Vasudevan
    </li>
    <li>
    Prof. Mukesh Kumar
    </li>
    <li>
    Prof. Shaibal Mukherjee
    </li>
    <li>
    Prof. Vipul Singh
    </li>
   
</list></Typography></div> </div>
   </Grid>
   <Grid item xs={12} sm={6}>
   <Typography variant='h4' align="right" paddingRight="40%" color={"secondary.main"}>VLSI, Nano Electronics and Semiconductor Devices</Typography>
   <div id="rectangle-r-outside">
    <div id="rectangle-r-inside">
    <Typography variant="p" fontSize={"0.8rem"}> 
    <Typography fontWeight="bold">

Faculty Involved:
</Typography>
<list>
    <li>
   Prof. Santosh Kumar Vishvakarma 
    </li>
    <li>
   Prof. Shaibal Mukherjee
    </li>
    <li>
    Prof. Vipul Singh
    </li>
    <li>
    Prof. Abhinav Kranti
    </li>
   
    <li>
    Prof. Mukesh Kumar
    </li>

</list></Typography>
    </div>
   </div>
   </Grid>
   </Grid>
   <br/>
   <Grid container > 
   <Grid item xs={12} sm={6}>
    <Typography variant='h4' paddingLeft="40%" color={"secondary.main"}>Communications</Typography>
   <div id="rectangle-l-outside"> <div id="rectangle-l-inside">
   <Typography variant="p" fontSize={"0.8rem"}> 
    <Typography fontWeight="bold">

Faculty Involved:
</Typography>
<list>
    <li>
    Prof. Ram Bilas Pachori
    </li>
    <li>
    Dr. Sumit Gautam
    </li>
    <li>
Prof. Prabhat Kumar Upadhyay     </li>
    <li>
   Prof. Vimal Bhatia 
    </li>
    <li>
   Dr. Swaminathan R.
    </li>
    <li>
    Dr. Appina Balasubramanyam
    </li>
   
</list></Typography></div> </div>
   </Grid>
   <Grid item xs={12} sm={6}>
   <Typography variant='h4' align="right" paddingRight="40%" color={"secondary.main"}>Radio Frequency and Microwave</Typography>
   <div id="rectangle-r-outside">
    <div id="rectangle-r-inside">
    <Typography variant="p" fontSize={"0.8rem"}> 
    <Typography fontWeight="bold">

Faculty Involved:
</Typography>
<list>
  
    <li>
    Dr. Saptrishi Ghosh
    </li>
    <li>
    Dr. Rinkee Chopra
    </li>

</list></Typography>
    </div>
   </div>
   </Grid>
   </Grid>
   <br/>
   <Grid container > 
   <Grid item xs={12} sm={6}>
    <Typography variant='h4' paddingLeft="40%" color={"secondary.main"}>Power Systems</Typography>
   <div id="rectangle-l-outside"> <div id="rectangle-l-inside">
   <Typography variant="p" fontSize={"0.8rem"}> 
    <Typography fontWeight="bold">

Faculty Involved:
</Typography>
<list>
    <li>
    Prof. Trapti Jain
    </li>
    <li>
    Dr. Shubhadeep Paladhi
    </li>
   
</list></Typography></div> </div>
   </Grid>
   <Grid item xs={12} sm={6}>
   <Typography variant='h4' align="right" paddingRight="40%" color={"secondary.main"}>Signal and IP</Typography>
   <div id="rectangle-r-outside">
    <div id="rectangle-r-inside">
    <Typography variant="p" fontSize={"0.8rem"}> 
    <Typography fontWeight="bold">

Faculty Involved:
</Typography>
<list>
    <li>
    Prof. Ram Bilas Pachori
    </li>
    <li>
    Prof. Prabhat Kumar Upadhyay
    </li>
    <li>
    Prof. Vimal Bhatia
    </li>
    <li>
    Prof. Vivek Kanhangad
 
    </li>
    <li>
   Dr. Appinaa Balasubramanyam
    </li>
    
</list></Typography>
    </div>
   </div>
   </Grid>
   </Grid>
   <br/>
   <Grid container > 
   <Grid item xs={12} sm={6}>
    <Typography variant='h4' paddingLeft="40%" color={"secondary.main"}>Power Electronics</Typography>
   <div id="rectangle-l-outside"> <div id="rectangle-l-inside">
   <Typography variant="p" fontSize={"0.8rem"}> 
    <Typography fontWeight="bold">

Faculty Involved:
</Typography>
<list>
    <li>
    Prof. Amod C. Umarikar
    </li>
    <li>
    Dr. Vijay A. S.
    </li>
</list></Typography></div> </div>
   </Grid>
   <Grid item xs={12} sm={6}>
   {/* <Typography variant='h4' align="right" paddingRight="40%" color={"secondary.main"}>Radio Frequency and Microwave</Typography>
   <div id="rectangle-r-outside">
    <div id="rectangle-r-inside">
    jsgfhsfahgfkg
    </div>
   </div> */}
   </Grid>
   </Grid>
   <br/>
   </div>
    </div>
  );
};

export default ResearchPage;
// KYAA HUAAAAA
