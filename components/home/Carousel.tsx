'use client';

import { Box, Typography } from '@mui/material';
import { useState, useEffect } from 'react';

interface CarouselProps {
  images: string[];
}

export default function Carousel({ images }: CarouselProps) {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    if (images.length === 0) return;

    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % images.length);
    }, 5000); // Change image every 5 seconds

    return () => clearInterval(interval);
  }, [images.length]);

  if (images.length === 0) {
    return null;
  }

  return (
    <Box
      sx={{
        width: '100%',
        height: 'calc(100vh + 270px)',
        position: 'relative',
        overflow: 'hidden',
      }}
    >
      {images.map((image, index) => (
        <Box
          key={image}
          sx={{
            position: 'absolute',
            top: 0,
            left: 0,
            width: '100%',
            height: '100%',
            backgroundImage: `url("${image}")`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            opacity: index === currentIndex ? 1 : 0,
            transform: index === currentIndex ? 'scale(1.05)' : 'scale(1)',
            transition: 'opacity 1.5s ease-in-out, transform 6s ease-out',
          }}
        />
      ))}
      <Box
        sx={{
          position: 'relative',
          zIndex: 1,
          backgroundColor: 'rgba(0, 0, 0, 0.5)',
          height: '100%',
          margin: 'auto',
          display: 'flex',
          color: 'white',
          alignItems: 'center',
          textAlign: 'center',
          justifyContent: 'center',
        }}
      >
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
