import { Box, Typography } from '@mui/material';

export default function Carousel() {
  return (
    <Box className="imgSlider">
      <Box className="carousel-text">
        <Typography
          variant="h3"
          sx={{
            fontSize: { xs: '1.5rem', sm: '2rem', md: '2.5rem' },
            fontWeight: 600,
            color: 'white',
            px: 2,
          }}
        >
          Welcome to the Department of
          <br />
          Electrical Engineering
          <br />
          @ IIT Indore
        </Typography>
      </Box>
    </Box>
  );
}
