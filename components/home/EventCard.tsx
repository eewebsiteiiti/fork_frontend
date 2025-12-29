'use client';

import { useState } from 'react';
import { Box, Typography, CardMedia, Grid } from '@mui/material';

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
  const [imgSrc, setImgSrc] = useState(image || EVENT_PLACEHOLDER);

  return (
    <Box>
      <Grid container direction="column" alignItems="flex-start">
        <Grid size={12}>
          <CardMedia
            component="img"
            sx={{ height: 140, width: '100%', objectFit: 'cover' }}
            image={imgSrc}
            onError={() => setImgSrc(EVENT_PLACEHOLDER)}
          />
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
