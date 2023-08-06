import { Container, Typography} from '@mui/material'
import React from 'react'

export default function Events() {
  return (
    <div>
      <Container sx={{ my: 5 }}>
        <Typography variant="h1" sx={{ borderBottom: "2px solid #BBBBBB" }}>
          EVENTS
        </Typography>
      </Container>
    </div>
  );
}
