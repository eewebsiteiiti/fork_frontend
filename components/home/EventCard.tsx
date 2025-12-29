import { Box, Typography, CardMedia, Grid } from '@mui/material';

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
  return (
    <Box>
      <Grid container direction="column" alignItems="flex-start">
        <Grid size={12}>
          <CardMedia
            component="img"
            sx={{ height: 140, width: '100%', objectFit: 'cover' }}
            image={image || '/images/profile_placeholder.jpg'}
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
