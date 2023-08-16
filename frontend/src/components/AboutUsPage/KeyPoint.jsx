import React from 'react'
import { Box, Container, Typography,List, ListItem, ListItemIcon } from '@mui/material'
import FlashOnIcon from '@mui/icons-material/FlashOn';
export default function KeyPoint() {
  return (
      <div>
          <Box sx={{backgroundColor:"secondary.main", padding:"4%"}}>
              <Container>
              <Typography variant="h1" color={"white"} pb={3}>PLANS AND VISIONS</Typography>
              <List sx={{color:"white"}}>
                <ListItem>
                  <ListItemIcon>
                    <FlashOnIcon sx={{color:"#FFC107"}}/>
                  </ListItemIcon>
                  <Typography variant='p' color={"white"}>
                  Next-generation Communication Systems, Smart Antennas, and Human-Centered AI methods for Signal Processing
                  </Typography>
                </ListItem>
                <ListItem>
                  <ListItemIcon>
                    <FlashOnIcon sx={{color:"#FFC107"}}/>
                  </ListItemIcon>
                  <Typography variant='p' color={"white"}>
                  Flexible Electronics, Semiconductor Nanofabrication, Electronics-Photonics convergence, Energy efficient systems
                  </Typography>
                </ListItem>
                <ListItem>
                  <ListItemIcon>
                    <FlashOnIcon sx={{color:"#FFC107"}}/>
                  </ListItemIcon>
                  <Typography variant='p' color={"white"}>
                  Renewable Energy Integration and Smart Grid, Cyber-security aspects, System on Chip Biomedical Devices for diagnostics and therapy 
                  </Typography>
                  
                </ListItem>
              </List>
              </Container>
          </Box>
    </div>
  )
}
