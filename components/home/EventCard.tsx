'use client';

import * as React from 'react';
import { Box, Typography, Grid } from '@mui/material';

const EVENT_PLACEHOLDER = '/images/logos/event-placeholder.jpg';

interface EventCardProps {
  title: string;
  description: string;
  image: string;
  date: number;
  month: string;
  day: string;
  time: string;
  year?: number;
  link?: string;
}

function ImageWithFallback({ src, alt }: { src: string; alt: string }) {
  const [status, setStatus] = React.useState<'loading' | 'loaded' | 'error'>('loading');

  React.useEffect(() => {
    if (!src) {
      setStatus('error');
      return;
    }
    const img = new Image();
    img.onload = () => setStatus('loaded');
    img.onerror = () => setStatus('error');
    img.src = src;
  }, [src]);

  const imageSrc = status === 'loaded' ? src : EVENT_PLACEHOLDER;

  return (
    <Box
      component="img"
      src={imageSrc}
      alt={alt}
      sx={{ height: 140, width: '100%', objectFit: 'cover' }}
    />
  );
}

export default function EventCard({
  title,
  description,
  image,
  date,
  month,
  day,
  time,
  year,
}: EventCardProps) {
  return (
    <Box>
      <Grid container direction="column" alignItems="flex-start">
        <Grid size={12}>
          <ImageWithFallback src={image} alt={title} />
        </Grid>
        <Grid size={12}>
          <Grid container justifyContent="space-between" sx={{ mt: 1 }}>
            <Typography variant="body2" color="text.secondary" fontSize="0.7rem">
              {time}
            </Typography>
            <Typography variant="body2" color="text.secondary" fontSize="0.7rem">
              {date} {month} {year}, {day}
            </Typography>
          </Grid>
        </Grid>
        <Grid size={12}>
          <Typography variant="h6" fontWeight={700} color="text.primary" sx={{ mt: 0.5 }}>
            {title}
          </Typography>
        </Grid>
        <Grid size={12}>
          <Typography variant="body2" fontSize="0.8rem" sx={{ textAlign: 'justify' }}>
            {description}
          </Typography>
        </Grid>
      </Grid>
    </Box>
  );
}
