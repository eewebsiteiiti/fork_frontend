import React from "react";
import Navbar from "../components/BodyNavbar/BodyNavbar";
import Header from "../components/Header";
import { research } from "../HeaderData";
import { Grid, Typography, List } from "@mui/material";
import {ListItem} from "@mui/material";
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

sdkjfbsdihfbdshf fhdbf ihsd 
fhdbfds fhsd fdfhbsfh <br/>dfbdhfhfbf ihbfhjsd fu fds fhb f f fds fhdbf hfsd fhvfhd fdifh sdfsfbdfsdfih sdf hisd fhsdfbdhfisfhfhif
Faculty Involved:
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
    Faculty Involved:
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
    Faculty Involved:
<list>
    <li>
    Prof. Srivathsan Vasudevan
    </li>
    <li>
    Mukesh Kumar
    </li>
    <li>
    Dr. Shaibal
    </li>
   
</list></Typography></div> </div>
   </Grid>
   <Grid item xs={12} sm={6}>
   <Typography variant='h4' align="right" paddingRight="40%" color={"secondary.main"}>VLSI, Nano Electronics and Semiconductor Devices</Typography>
   <div id="rectangle-r-outside">
    <div id="rectangle-r-inside">
    <Typography variant="p" fontSize={"0.8rem"}> 
    Faculty Involved:
<list>
    <li>
    Santosh 
    </li>
    <li>
    Shaibal
    </li>
    <li>
    Dr. Vipul Singh
    </li>
    <li>
    Dr. Kranti
    </li>
   
    <li>
    Dr. Mukesh
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
    Faculty Involved:
<list>
    <li>
    Dr. RAM 
    </li>
    <li>
    Dr. Sumit 
    </li>
    <li>
Prabhat     </li>
    <li>
    Vimal 
    </li>
    <li>
   Swaminathan
    </li>
    <li>
    Appina 
    </li>
   
</list></Typography></div> </div>
   </Grid>
   <Grid item xs={12} sm={6}>
   <Typography variant='h4' align="right" paddingRight="40%" color={"secondary.main"}>Radio Frequency and Microwave</Typography>
   <div id="rectangle-r-outside">
    <div id="rectangle-r-inside">
    <Typography variant="p" fontSize={"0.8rem"}> 
    Faculty Involved:
<list>
  
    <li>
    Dr. Saptrishi
    </li>
    <li>
    Rinki
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
    Faculty Involved:
<list>
    <li>
    Dr. Trapti
    </li>
    <li>
    Dr. Shubhadeep
    </li>
   
</list></Typography></div> </div>
   </Grid>
   <Grid item xs={12} sm={6}>
   <Typography variant='h4' align="right" paddingRight="40%" color={"secondary.main"}>Signal and IP</Typography>
   <div id="rectangle-r-outside">
    <div id="rectangle-r-inside">
    <Typography variant="p" fontSize={"0.8rem"}> 
    Faculty Involved:
<list>
    <li>
    Dr. Ram 
    </li>
    <li>
    Dr. Prabhat kumar
    </li>
    <li>
    Dr. Vimal
    </li>
    <li>
    Vivek 
    </li>
    <li>
    Appinaa
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
    Faculty Involved:
<list>
    <li>
    Dr. Amogh
    </li>
    <li>
    Dr. Vijay
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
